import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupurl=environment.signupApi;
  signupForm = new FormGroup({
    Firstname: new FormControl(''),
    email: new FormControl(''),
  })
  submitted=false;
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) { }
  
  
  
    ngOnInit(): void {
      this.signupForm=this.formbuilder.group({
        Firstname: ['', [Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(6), Validators.maxLength(16)]],
        email: ['', Validators.required]
    });
    }
    get f(){
      return this.signupForm.controls;
    }
    
    submitHandler(){
      this.submitted=true;
      if(this.signupForm.invalid){
        return;
      }
      this.http.post<any>(this.signupurl, this.signupForm.value).subscribe(res=>{
        const Toast=Swal.mixin({
          toast: true,
          position:'top',
          showConfirmButton: false,
          timer:3000,
          timerProgressBar:true
        })
        Toast.fire({
          icon:'success',
          title:'Congratulation on your Subscription'
        })
        this.signupForm.reset();
        this.router.navigate(['/subscribe']);
      })
    }
  }