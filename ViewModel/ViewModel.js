import Creds from '../Model/Creds';
class ViewModel{
    
    constructor(uname,pass){
        this.data = {
            uname : uname,
            pass : pass
        }
        this.creds = new Creds(this.data);
    }
    login(){
        if(this.creds.isValidLogin()){
          return "Success";
        }
        else{
          return "Failed";
        }
    }
}
export default ViewModel;