import React from 'react';

import './SignUpForm.css';

export const SignUpForm = ({onSubmit, state}) => {
    const submitting = state === 'submitting';
    const submitted = state === 'submitted';

    const buttonState = submitting ?
        'form__button--submitting' :
        'form__button--submitted';

    return (
        <form className="form" onSubmit={onSubmit}>
            <h1 className="form__title">Sign Up</h1>
            {
                submitted ?
                    <div className="form__status">
                      You have been signed up successfully. Sign in?
                    </div> : null
            }
            <label htmlFor="name" className="form__label">Name</label>
            <p>
                <input type="text"
                       id="name"
                       placeholder="Name"
                       disabled={submitting}
                       className="form__input"
                />
            </p>
            <label htmlFor="email" className="form__label">Email</label>

            <p>
                <input type="email"
                       id="email"
                       disabled={submitting}
                       placeholder="Email"
                       className="form__input"
                />
            </p>
            <p>
                <button disabled={submitting} 
                        className={`form__button ${buttonState}`}>
                    Submit
                </button>
            </p>
        </form>
    );
};