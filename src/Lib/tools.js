import validator from 'validator' ;
// import Signup from '../Components/UserDetails';


export const strongPasswordChecker = (mydata) => {
    //  console.log(mydata , 'mydata');
    return (validator.isStrongPassword(mydata, {
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
      }))
}   


export const confirmPasswordChecker = (password , cpassword) => {
    if(password === cpassword){
        return true
    }
    return false
}


