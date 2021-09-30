import {LOGIN_FORM_SUBMIT , SIGNUP_FORM_SUBMIT} from './ActionType';

export const submitSignupForm = (payload) => {
    return{
        type:SIGNUP_FORM_SUBMIT ,
        payload
    }
}

export const submitLoginForm = (user) => {
    return {
        type:LOGIN_FORM_SUBMIT,
        user    
    }
}


