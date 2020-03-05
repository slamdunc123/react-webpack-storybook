import React from 'react'
import {SignUpForm} from './SignUpForm'

const handleOnSubmit = (e) => {
  e.preventDefault();
};

export default {
  title: 'Sign Up Form',
  component: SignUpForm,
};


export const Render = () => <SignUpForm />;

export const StateIdle = () => <SignUpForm state="idle" onSubmit={handleOnSubmit}/> 
export const StateSubmitting = () => <SignUpForm state="submitting" onSubmit={handleOnSubmit}/> 
export const StateSubmitted = () => <SignUpForm state="submitted" onSubmit={handleOnSubmit}/> 
