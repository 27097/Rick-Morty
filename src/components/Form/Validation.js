
import Form from "./Form";
var email_filter  = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

const Validation =(userData)=>{
    
    let errors = {};

    if(!email_filter.test(userData.username)){
       errors.username = 'email iincorrecto'
    }if(!userData.username){
        errors.username = 'este campo no puede estar vacio'
    }if(userData.username.length>35){
        errors.username= 'el email no puede pasar de 35'
    }

    if(!userData.password.match(/\d/)){
        errors.password='la contraseña tiene que tener un numero';
    }if(userData.password.length > 6 || userData.password.length<10 ){
        errors.password= 'entre 6 y 10 charactert'
    }
 return errors

   
    
}

export default Validation