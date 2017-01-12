export class SecurityCredential {
 public username : string
 public password : string
 public token : string

 constructor(_userName : string, _password : string){
  this.username = _userName
  this.password = _password
  this.token = null
 }
}
