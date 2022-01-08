import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Error from '../components/Error';

const AuthModal = () => {
    const { handleSubmit, errors, register } = useForm();
    const [ loading, setLoading ] = useState(false);
    const [ formState, setFormState ] = useState('signUp')

    const signUpHandler = () => {

    }

    return (
        <>
            <div className="modal fade" id="authModal" tabIndex="-1" role="dialog"
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
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
                                            <h2>Kindly sign up/login</h2>
                                            {formState === 'signUp' && <form className='auth-form' onSubmit={handleSubmit(signUpHandler)}>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <input type="text"
                                                            name="firstName"
                                                            placeholder="First name"
                                                            className="w-100"
                                                            ref={register({ required: 'This field is required' })} />
                                                            
                                                        {errors.firstName && <Error>{errors.firstName.message}</Error>}
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <input type="text"
                                                            name="lastName"
                                                            placeholder="Last name"
                                                            className="w-100"
                                                            ref={register({ required: 'This field is required' })} />
                                                        {errors.lastName && <Error>{errors.lastName.message}</Error>}
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <input type="email"
                                                            name="email"
                                                            placeholder="Email"
                                                            className="w-100"
                                                            ref={register({ required: 'This field is required' })} />
                                                        {errors.email && <Error>{errors.email.message}</Error>}
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <input type="password"
                                                            name="password"
                                                            placeholder="Password"
                                                            className="w-100"
                                                            ref={register({ required: 'This field is required' })} />
                                                        {errors.password && <Error>{errors.password.message}</Error>}
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                        <button disabled={loading} type="submit" className="btn">
                                                            {!loading ? 'Submit' : 'Submitting...'}
                                                        </button>
                                                </div>
                                            </form>}
                                            {formState === 'login' && <form className='auth-form' onSubmit={handleSubmit(signUpHandler)}>
                                                <div className="row">
                                                    <div className="col-12 mb-4">
                                                        <input type="email"
                                                            name="email"
                                                            placeholder="Email"
                                                            className="w-100"
                                                            ref={register({ required: 'This field is required' })} />
                                                        {errors.email && <Error>{errors.email.message}</Error>}
                                                    </div>
                                                    <div className="col-12 mb-4">
                                                        <input type="password"
                                                            name="password"
                                                            placeholder="Password"
                                                            className="w-100"
                                                            ref={register({ required: 'This field is required' })} />
                                                        {errors.password && <Error>{errors.password.message}</Error>}
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                        <button disabled={loading} type="submit" className="btn">
                                                            {!loading ? 'Submit' : 'Submitting...'}
                                                        </button>
                                                </div>
                                            </form>}
                                            {formState === 'forgot' && <form className='auth-form' onSubmit={handleSubmit(signUpHandler)}>
                                                <div className="row">
                                                    <div className="col-12 mb-4">
                                                        <input type="email"
                                                            name="email"
                                                            placeholder="Email"
                                                            className="w-100"
                                                            ref={register({ required: 'This field is required' })} />
                                                        {errors.email && <Error>{errors.email.message}</Error>}
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                        <button disabled={loading} type="submit" className="btn">
                                                            {!loading ? 'Submit' : 'Submitting...'}
                                                        </button>
                                                </div>
                                            </form>}
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p> {formState === 'signUp' ? 'Already signed up?' : `Haven't signup yet?`} 
                                                    {formState === 'signUp' ? <span onClick={() => setFormState('login')} className='cursor'> Login</span> : <span onClick={() => setFormState('signUp')} className='cursor'> Signup</span> }
                                                </p>
                                                <p onClick={() => setFormState('forgot')} className='cursor'>Forgot password?</p>
                                            </div>
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