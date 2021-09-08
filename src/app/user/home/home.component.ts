import { Component, OnInit } from '@angular/core';
import { Home } from '../home';
import {Router} from '@angular/router'
import { UserService } from '../user.service';
import {AuthService} from '../auth.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private user:UserService,private router:Router,private auth:AuthService) { }
  userlist:Home[]=[]
  arr=[]
  ngOnInit(): void {
    this.user.readUser().subscribe(data=>{
      this.userlist=data.map((doc)=>{
        return{
          id:doc.payload.doc.id,
          ...doc.payload.doc.data() as{}
        }as Home
      })
    })
  }

  home=new Home()
save(){
console.log(this.home)
if(this.home.id==null){
  this.user.saveUser(this.home)
}
else{
  this.user.editUser(this.home)
}
}
edit(arr:Home){
this.home=arr
}
delete(arr:Home){
this.user.deleteUser(arr)
}
logout(){
  this.auth.logout()
  this.router.navigate(["user/login"])
}
}
