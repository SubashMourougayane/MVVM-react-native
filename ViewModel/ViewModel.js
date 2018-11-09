import Creds from '../Model/Creds';
class ViewModel{
    
    constructor(uname,pass){
        this.creds;
        this.data = {
            uname : uname,
            pass : pass
        }
        this.createModel();
    }
    createModel(){  
        this.creds = new Creds(this.data);
    }
    validateLogin(){
        if(this.creds.isValidLogin()){
            return true;
        }
        else{
            return false;
        }
    }
}
export default ViewModel;