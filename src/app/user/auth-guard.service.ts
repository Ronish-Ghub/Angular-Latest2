import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot,RouterStateSnapshot,Router,CanActivate} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
constructor(private router:Router) { }
  canActivate(snapshot:ActivatedRouteSnapshot,router:RouterStateSnapshot):boolean{
      if(this.isLoggedIn()){
        return true
    }
this.router.navigate(["/user/login"])
return false
  }
isLoggedIn(){
  let status=false
  if(localStorage.getItem("isLoggedIn")=="true"){
    status=true
  }
else{
  status=false
}
return status
}
}

