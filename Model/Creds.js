class Creds{
    constructor(creds){
        this.uname = creds.uname;
        this.pass = creds.pass;
    }
    isValidLogin(){
        if(this.uname=="Admin"&&this.pass=="Admin"){
            return true;
        }
        else{
            return false;
        }
    }
}
export default Creds;