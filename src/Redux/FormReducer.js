import { SIGNUP_FORM_SUBMIT, SUBMIT_LOGIN_FORM } from "./ActionType";

const initialState = {
    profile:{firstname: '' ,
    lastname: '' ,
    email: '',
    password:'',
    phonenumber: '',
    birthdate: '',
    address: ''
}
};

const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_FORM_SUBMIT:
      return {
        ...state,
       profile:{...state.profile, ...action.payload}
      };
    default :
    return state;
  }
};

export default FormReducer














