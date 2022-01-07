import React, { useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import { CSVLink } from 'react-csv';

import { convertObjectToArray } from '../../helpers/convertObjectArray';

const ProcessBackgroundInformation = () => {
    const btnRef = useRef();

    const [ csvData, setCsvData ] = useState([]);

    const {register, errors, handleSubmit} = useForm();

    const headers = [
        {label: 'Information', key: 'information'},
        {label: 'Value', key: 'value'}
    ];

    const csvReport = {
        filename: 'process-background.csv',
        headers: headers,
        data: csvData
    };

    const exportBackgroundInformation = async (data) => {
        const array = convertObjectToArray(data)
        await setCsvData(array);
        btnRef.current.link.click();
        console.log({array});
    };

    return (
        <>
            <section className='process-bg'>
                <div className="container">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>Process Background Information</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <form onSubmit={handleSubmit(exportBackgroundInformation)}>
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
                                            <input ref={register()} className='input-field' type="text" name="title" placeholder='User inputs' />
                                        </div>
                                        <div className="col-md-3 pr-sm-0 mt-2">
                                            <p className='thead bg-green pl-3'>Doc_Num</p>        
                                        </div>
                                        <div className="col-md-7 pl-sm-2 mt-2">
                                            <input ref={register()} className='input-field' type="text" name="doc_num" placeholder='User inputs' />
                                        </div>
                                        <div className="col-md-3 pr-sm-0 mt-2">
                                            <p className='thead bg-green pl-3'>Purpose</p>        
                                        </div>
                                        <div className="col-md-7 pl-sm-2 mt-2">
                                            <input ref={register()} className='input-field' type="text" name="purpose" placeholder='User inputs' />
                                        </div>
                                        <div className="col-md-3 pr-sm-0 mt-2">
                                            <p className='thead bg-green pl-3'>Scope</p>        
                                        </div>
                                        <div className="col-md-7 pl-sm-2 mt-2">
                                            <input ref={register()} className='input-field' type="text" name="scope" placeholder='User inputs' />
                                        </div>
                                        <div className="col-md-3 pr-sm-0 mt-2">
                                            <p className='thead bg-green pl-3'>Accountability</p>        
                                        </div>
                                        <div className="col-md-7 pl-sm-2 mt-2">
                                            <input ref={register()} className='input-field' type="text" name="accountability" placeholder='User inputs' />
                                        </div>
                                        <div className="col-md-3 pr-sm-0 mt-2">
                                            <p className='thead bg-green pl-3'>Responsibility</p>        
                                        </div>
                                        <div className="col-md-7 pl-sm-2 mt-2">
                                            <input ref={register()} className='input-field' type="text" name="responsibility" placeholder='User inputs' />
                                        </div>
                                        <div className="col-md-3 pr-sm-0 mt-2">
                                            <p className='thead bg-green pl-3'>References</p>        
                                        </div>
                                        <div className="col-md-7 pl-sm-2 mt-2">
                                            <input ref={register()} className='input-field' type="text" name="references" placeholder='User inputs' />
                                        </div>
                                        <div className="col-md-3 pr-sm-0 mt-2">
                                            <p className='thead bg-green pl-3'>Definitions</p>        
                                        </div>
                                        <div className="col-md-7 pl-sm-2 mt-2">
                                            <input ref={register()} className='input-field' type="text" name="definitions" placeholder='User inputs' />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button button='submit' className="btn btn-green mt-4">Export to data frame</button>
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