import React, { useState, useRef, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { CSVLink } from 'react-csv';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';

import { convertObjectToArray } from '../../helpers/convertObjectArray';
import { saveProcessData } from '../../store/actions/phaseStore';

const ProcessBackgroundInformation = () => {
    const {register, errors, handleSubmit, reset, setValue} = useForm();

    const dispatch = useDispatch();

    // Use of Refs to target an element
    const btnRef = useRef();
    const saveRef = useRef();

    const [exportData, setExportData] = useState(true);
    const [ csvData, setCsvData ] = useState([]);

    const theProcessData = useSelector(state => state.phaseData.processInfo);

    useEffect(() => {
        // Check if there is a process data stored upon page load and set to each textareaa respectively
        if (theProcessData && theProcessData.title) {
            setValue('title', theProcessData.title);
        }  

        if (theProcessData && theProcessData.doc_num) {
            setValue('doc_num', theProcessData.doc_num);
        } 

        if (theProcessData && theProcessData.purpose) {
            setValue('purpose', theProcessData.purpose);
        }

        if (theProcessData && theProcessData.scope) {
            setValue('scope', theProcessData.scope);
        } 
        if (theProcessData && theProcessData.accountability) {
            setValue('accountability', theProcessData.accountability);
        }  

        if (theProcessData && theProcessData.responsibility) {
            setValue('responsibility', theProcessData.responsibility);
        } 

        if (theProcessData && theProcessData.references) {
            setValue('references', theProcessData.references);
        }

        if (theProcessData && theProcessData.definitions) {
            setValue('definitions', theProcessData.definitions);
        } 
    }, [theProcessData]);

     // Headers for csv export
    const headers = [
        {label: 'Information', key: 'information'},
        {label: 'Value', key: 'value'}
    ];

    // CSV export object
    const csvReport = {
        filename: 'process-background.csv',
        headers: headers,
        data: csvData
    };

    // Function to export process background information
    const exportBackgroundInformation = async (data) => {
        
        // Convert Object to an array for easy export
        const array = convertObjectToArray(data)
        await setCsvData(array);
        btnRef.current.link.click();
        reset({});

        // if export data is true, clear export data that is stored
        if (exportData) {
            dispatch(saveProcessData(null));
        }
    };

    // Function to save process background information
    const saveprocessBackgroundInfo = async (data) => {
        // If exporting data is set to false upon initiating go back, store data to store
        if (!exportData) {
            await dispatch(saveProcessData(data));  
            return;
        }
        // Else export data immediately
        await exportBackgroundInformation(data);
    };

    // Function to intiate going back
    const gotoHome = async () => {
        await setExportData(false);
        await saveRef.current.click();
        setTimeout(() => {
            Router.push('/');     
        }, 200);
    };

    return (
        <>
            <section className='process-bg'>
                <div className="container">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mt-5">
                                <a onClick={gotoHome} className="go-back">
                                    Go back
                                </a>
                            </div>
                            <div className="col-12">
                                <h1>Process Background Information</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <form onSubmit={handleSubmit(saveprocessBackgroundInfo)}>
                                    <div className="row">
                                        <div className="col-md-3 pr-sm-0 mb-2">
                                            <p className='thead pl-3'>Information</p>        
                                        </div>
                                        <div className="col-md-7 pl-sm-2 pr-sm-0 mb-2">
                                            <p className='thead pl-3'>Value</p>
                                        </div>
                                        <div className="col-md-3 pr-sm-0">
                                            <p className='thead bg-green pl-3'>Title</p>        
                                        </div>
                                        <div className="col-md-7 pl-sm-2">
                                            <textarea ref={register()} className='input-field' name="title" id="title" cols="30" rows="3" placeholder='User inputs'/>
                                            {/* <input ref={register()} className='input-field' type="text" name="title" placeholder='User inputs' /> */}
                                        </div>
                                        <div className="col-md-3 pr-sm-0 mt-2">
                                            <p className='thead bg-green pl-3'>Doc_Num</p>        
                                        </div>
                                        <div className="col-md-7 pl-sm-2 mt-2">
                                            <textarea ref={register()} className='input-field' name="doc_num" id="doc_num" cols="30" rows="3" placeholder='User inputs'></textarea>
                                            {/* <input ref={register()} className='input-field' type="text" name="doc_num" placeholder='User inputs' /> */}
                                        </div>
                                        <div className="col-md-3 pr-sm-0 mt-2">
                                            <p className='thead bg-green pl-3'>Purpose</p>        
                                        </div>
                                        <div className="col-md-7 pl-sm-2 mt-2">
                                            <textarea ref={register()} className='input-field' name="purpose" id="purpose" cols="30" rows="3" placeholder='User inputs'/>
                                            {/* <input ref={register()} className='input-field' type="text" name="purpose" placeholder='User inputs' /> */}
                                        </div>
                                        <div className="col-md-3 pr-sm-0 mt-2">
                                            <p className='thead bg-green pl-3'>Scope</p>        
                                        </div>
                                        <div className="col-md-7 pl-sm-2 mt-2">
                                            <textarea ref={register()} className='input-field' name="scope" id="scope" cols="30" rows="3" placeholder='User inputs'/>
                                            {/* <input ref={register()} className='input-field' type="text" name="scope" placeholder='User inputs' /> */}
                                        </div>
                                        <div className="col-md-3 pr-sm-0 mt-2">
                                            <p className='thead bg-green pl-3'>Accountability</p>        
                                        </div>
                                        <div className="col-md-7 pl-sm-2 mt-2">
                                            <textarea ref={register()} className='input-field' name="accountability" id="accountability" cols="30" rows="3" placeholder='User inputs'/>
                                            {/* <input ref={register()} className='input-field' type="text" name="accountability" placeholder='User inputs' /> */}
                                        </div>
                                        <div className="col-md-3 pr-sm-0 mt-2">
                                            <p className='thead bg-green pl-3'>Responsibility</p>        
                                        </div>
                                        <div className="col-md-7 pl-sm-2 mt-2">
                                            <textarea ref={register()} className='input-field' name="responsibility" id="responsibility" cols="30" rows="3" placeholder='User inputs'/>
                                            {/* <input ref={register()} className='input-field' type="text" name="responsibility" placeholder='User inputs' /> */}
                                        </div>
                                        <div className="col-md-3 pr-sm-0 mt-2">
                                            <p className='thead bg-green pl-3'>References</p>        
                                        </div>
                                        <div className="col-md-7 pl-sm-2 mt-2">
                                            <textarea ref={register()} className='input-field' name="references" id="references" cols="30" rows="3" placeholder='User inputs'/>
                                            {/* <input ref={register()} className='input-field' type="text" name="references" placeholder='User inputs' /> */}
                                        </div>
                                        <div className="col-md-3 pr-sm-0 mt-2">
                                            <p className='thead bg-green pl-3'>Definitions</p>        
                                        </div>
                                        <div className="col-md-7 pl-sm-2 mt-2">
                                            <textarea ref={register()} className='input-field' name="definitions" id="definitions" cols="30" rows="3" placeholder='User inputs'/>
                                            {/* <input ref={register()} className='input-field' type="text" name="definitions" placeholder='User inputs' /> */}
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button ref={saveRef} button='submit' className="btn btn-green mt-4">Export to data frame</button>
                                    </div>
                                </form>
                                <CSVLink className='d-none' ref={btnRef} {...csvReport}>Export</CSVLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default ProcessBackgroundInformation;