import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import Error from './Error';

const AuthModal = ({currentCard, currentPhase, phaseData, phaseIndex, resetDataAfterUpdate, storeEdittedDataToState}) => {
    const { handleSubmit, errors, register, reset, setValue } = useForm();
    const [ loading, setLoading ] = useState(false);


    const dispatch = useDispatch();
    // console.log({phaseIndex});

    useEffect(() => {
        if (currentCard && currentCard.title) {
            setValue('action', currentCard.title);
        } else {
            setValue('action', '');
        }   

        if (currentCard && currentCard.description) {
            setValue('responsible', currentCard.description);
        } else {
            setValue('responsible', '');
        } 

        if (currentCard && currentCard.label) {
            setValue('output', currentCard.label);
        } else {
            setValue('output', '');
        } 

        if (currentCard && currentCard.metadata) {
            setValue('notes', currentCard.metadata);
        } else {
            setValue('notes', '');
        } 
    }, [currentCard]);

    const saveCurrentUpdatedCard = (currentCard) => {
        const currentCardIndex = currentPhase[0].cards.findIndex(card => card.id === currentCard.id);

        let theCurentCard = currentPhase[0].cards[currentCardIndex];
        theCurentCard = currentCard;

        phaseData.splice(phaseIndex, 1, currentPhase[0]);

        storeEdittedDataToState(phaseData);
    };

    const editActionHandler = async (data) => {
        currentCard['description'] = data.responsible;
        currentCard['title'] = data.action;
        currentCard['label'] = data.output;
        currentCard['metadata'] = data.notes;

        await saveCurrentUpdatedCard(currentCard);
        resetDataAfterUpdate();

        $('#actionModal').modal('hide');
    };

    return (
        <>
            <div className="modal fade" id="actionModal" tabIndex="-1" role="dialog"
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog modal-lg" role="document">
                    <div className="modal-content">

                        <div className="modal-header">
                            <button style={{ fontSize: '3rem' }} type="button" className="close" data-dismiss="modal"
                                aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body mb-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="text-center">
                                            <h2 className='mb-1'>Edit Phase: {currentPhase.length > 0 ? currentPhase[0].title : ''}</h2>
                                            {(currentCard && currentCard.title) && <p>Action: {currentCard.title} </p>}
                                            <form className='auth-form' onSubmit={handleSubmit(editActionHandler)}>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <textarea 
                                                        name="action"
                                                        placeholder="Action"
                                                        className="w-100"
                                                        ref={register()}
                                                        cols="30" rows="3"
                                                        />
                                                        {/* <input type="text"
                                                            name="action"
                                                            placeholder="Action"
                                                            className="w-100"
                                                            ref={register({ required: 'This field is required' })} /> */}
                                                            
                                                        {errors.action && <Error>{errors.action.message}</Error>}
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <textarea 
                                                        name="responsible"
                                                        placeholder="Responsible"
                                                        className="w-100"
                                                        ref={register()}
                                                        cols="30" rows="3"
                                                        />
                                                        {/* <input type="text"
                                                            name="responsible"
                                                            placeholder="Responsible"
                                                            className="w-100"
                                                            ref={register({ required: 'This field is required' })} /> */}
                                                        {errors.responsible && <Error>{errors.responsible.message}</Error>}
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <textarea 
                                                        name="output"
                                                        placeholder="Output"
                                                        className="w-100"
                                                        ref={register()}
                                                        cols="30" rows="3"
                                                        />
                                                        {/* <input type="text"
                                                            name="output"
                                                            placeholder="Output"
                                                            className="w-100"
                                                            ref={register({ required: 'This field is required' })} /> */}
                                                        {errors.output && <Error>{errors.output.message}</Error>}
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <textarea 
                                                        name="notes"
                                                        placeholder="Notes"
                                                        className="w-100"
                                                        ref={register()}
                                                        cols="30" rows="3"
                                                        />
                                                        {/* <input type="text"
                                                            name="notes"
                                                            placeholder="Notes"
                                                            className="w-100"
                                                            ref={register({ required: 'This field is required' })} /> */}
                                                        {errors.notes && <Error>{errors.notes.message}</Error>}
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                        <button disabled={loading} type="submit" className="btn btn-login">
                                                            {!loading ? 'Update' : 'Updating...'}
                                                        </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AuthModal;