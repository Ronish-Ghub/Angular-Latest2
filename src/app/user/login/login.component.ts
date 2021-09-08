import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home } from '../home';
import { Login } from '../login';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any
  userlist:Home[]=[]
  passwor:any
  url_return:string=''
  login_sucess:string="false"
    constructor(private router:Router,private userservice:UserService) { }
  ngOnInit(): void {
    this.userservice.readUser().subscribe(data=>{
    this.userlist=data.map((doc)=>{
      return{
        id:doc.payload.doc.id,
        ...doc.payload.doc.data() as {}
      }as Home
    })
    })
    this.url_return="/user/home"
  }
  login=new Login("","")
log(){
console.log(this.login)
}
loggin(){
this.user=this.login.name
this.passwor=this.login.password
for(let i of this.userlist){
  if(this.user==i.name && this.passwor==i.password){
this.login_sucess="true"
localStorage.setItem("isLoggedIn","true")
localStorage.setItem("username",this.login.name)
this.router.navigate([this.url_return])
  }
}
if(this.login_sucess=="false"){
alert("Login Failed")
}
}
}
