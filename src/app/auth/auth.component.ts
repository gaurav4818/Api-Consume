import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  isLoginMode=true;
  constructor(private authservice:AuthService,private route:Router,private routes:ActivatedRoute) { }
 
  ngOnInit(): void {
  }
  onswitch()
  {
    this.isLoginMode=!this.isLoginMode;
  }
  onsubmit(signupform:NgForm)
  {
    console.log(this.isLoginMode);
    if(this.isLoginMode==false)
    {
    this.authservice.SignUp(signupform.value).subscribe(data=>{
      console.log(data);
      alert(data+" Please Login To View Dashboard!");
      signupform.reset();
    }); 
    }
    else{
      this.authservice.Login(signupform.value).subscribe(data=>{
        console.log(data);
        localStorage.setItem('userdata', JSON.stringify(data));
        this.route.navigate(['/allemp'],{relativeTo:this.routes});
       
      
      }); 
    }
  }

}
