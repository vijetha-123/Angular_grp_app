import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormControl,FormGroup,FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
url=environment.contactapi;
contactForm = new FormGroup({
  Firstname: new FormControl(''),
  lastname: new FormControl(''),
  email: new FormControl(''),
  phone:new FormControl(''),
  company:new FormControl(''),
  website:new FormControl(''),
  know_us:new FormControl(''),
  reason:new FormControl(''),
  message:new FormControl('')
})
submitted=false;

constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.contactForm=this.formbuilder.group({
      Firstname: ['', Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(6), Validators.maxLength(16)],
      lastname: ['', Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(6), Validators.maxLength(16)],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      company: ['', Validators.required],
      website: ['', Validators.required],
      know_us: ['', Validators.required],
      reason: ['', Validators.required],
      message: ['', Validators.required]
  });
  }
  get f(){
    return this.contactForm.controls;
  }
  
  submitHandler(){
    this.submitted=true;
    if(this.contactForm.invalid){
      return;
    }
    this.http.post<any>(this.url, this.contactForm.value).subscribe(res=>{
      const Toast=Swal.mixin({
        toast: true,
        position:'top',
        showConfirmButton: false,
        timer:3000,
        timerProgressBar:true
      })
      Toast.fire({
        icon:'success',
        title:'you will be contacted soon'
      })
      this.contactForm.reset();
      this.router.navigate(['']);
    })
  }
}
