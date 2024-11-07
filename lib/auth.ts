import verified_users from "./valid";

export let CurrEmail = "";

const IsValidUser = (email : string , password : string ) => {
    let key : string ;
    let ValidState : boolean = false;
    for (key in verified_users) {
        if (verified_users.hasOwnProperty(key)) {
            let value : string = verified_users[key] ;
            if( (email === key) && (password === value)){
                console.log("User has been authenticated :) ");
                CurrEmail = email;
                ValidState = true;
                break;
            }
        }
    }
    if(ValidState === false){
        alert("Kindly enter the correct details");
    }

    return ValidState;
}

export default IsValidUser;