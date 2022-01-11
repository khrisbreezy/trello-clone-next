
import React, { useState, useRef } from 'react';
import Board, { createTranslate } from 'react-trello';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { CSVLink } from 'react-csv';
import {NotificationManager} from 'react-notifications';
import Cookies from 'js-cookie';

import { savePhaseData } from '../store/actions/phaseStore';
import { logout } from '../store/actions/auth';
import axiosInstance from '../config/axios';


const Home = () => {

    const dispatch = useDispatch();
    const btnRef = useRef();

    const thePhaseData = useSelector(state => state.phaseData.phases);
    const loggedIn = useSelector(state => state.auth.loggedIn);
    let user = Cookies.get('user') || null;
    user = typeof user === 'object' ? user : JSON.parse(user);
    const token = Cookies.get('token');

    const [ mapName, setMapName ] = useState('Map Name');
    const [phaseData, setPhaseData] = useState(thePhaseData);
    const [csvData, setCsvData] = useState([]);

    const TEXTS = {
        "Add another lane": "+ Add Phase",  
        "Click to add card": "Add actions",
        "Delete lane": "Delete phase",
        "Lane actions": "Phase actions",
        "button": {
          "Add lane": "Add Phase",
          "Add card": "Add Action",
          "Cancel": "Cancel"
        },
        "placeholder": {
          "title": "action",
          "description": "responsible",
          "label": "label"
        }
    };

    const mapNameHandler = (e) => {
        setMapName(e.target.value);
    };

    const headers = [
        {label: 'Phase', key: 'phase'},
        {label: 'Action', key: 'action'},
        {label: 'Responsible', key: 'responsible'}
    ];

    const csvReport = {
        filename: mapName.split(' ').join('-') + '.csv',
        headers: headers,
        data: csvData
    };

    const data = {
        lanes: phaseData
    };

    const dataChange = (data) => {
        setPhaseData(data.lanes);
        dispatch(savePhaseData([]));
    };

    const gotoProcessBginfoHandler = () => {
        dispatch(savePhaseData(phaseData));
        Router.push('/process-background-information');
    };

    const sendDataToDatase = async () => {
        let phase = [];
        data.lanes.map((lane => { 
            phase.push({
                'title': lane.title,
                'card': lane.cards.map((card) => ({
                    'action': card.title,
                    'responsibility': card.description
                }))
            });
            
            console.log({phase});
        }))
        try {
            const { data } = await axiosInstance.post('processes', {
                process_name: mapName, 
                user_id: user.id,
                phase: phase
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log({data});
            let dataToExport = [];
            phaseData.forEach(phase => {
                phase.cards.forEach(card => {
                    dataToExport.push({
                        'phase': phase.title,
                        'action': card.title,
                        'responsible': card.description
                    });
                })
            });

            await setCsvData(dataToExport);
            btnRef.current.link.click();
            dispatch(savePhaseData([]));
        } catch(e) {
            console.log(e);
        }
    };

    const exportDataHandler = async () => {
        if (!loggedIn) {
            $('#authModal').modal('show');
            return;
        }
        await sendDataToDatase();
    };

    const loginHandler = () => {
        $('#authModal').modal('show');
    };

    const loginOutHandler = () => {
        dispatch(logout());
        NotificationManager.success('Logout successfully', '', 5000);
    }
  

    return (
        <section className='page_manager'>
            <div className="container-fluid">  
                <div className="row">
                    <div className="col-12 text-center d-flex align-items-center justify-content-center">
                        <input className='mapName_input mx-3' type="text" value={mapName} onChange={mapNameHandler} />
                        {!loggedIn ? 
                        <button onClick={loginHandler} className='btn btn-login'>Login</button>
                        :
                        <button onClick={loginOutHandler} className='btn btn-login'>Logout</button>}
                    </div>
                </div>

                <div className="row">
                   <Board data={data}
                    editable editLaneTitle
                    canAddLanes onDataChange={dataChange}
                    t={createTranslate(TEXTS)}
                    /> 
                </div>

                <div className="row text-center">
                    <div className="col-md-6 mb-4">
                        <button onClick={gotoProcessBginfoHandler} className="btn">Add process background</button>
                    </div>
                    <div className="col-md-6 mb-4">
                        <CSVLink className='d-none' ref={btnRef} {...csvReport}>Export</CSVLink>
                        <button onClick={exportDataHandler} className="btn">Export to data frame</button>
                    </div>         
                </div>
            </div>
        </section>
    )
  
};

export default Home;

