import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormControl, FormGroup,  } from '@angular/forms';
import {Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dsm-persnal-info',
  templateUrl: './dsm-persnal-info.component.html',
  styleUrls: ['./dsm-persnal-info.component.css']
})
export class DsmPersnalInfoComponent implements OnInit {
 useurl=environment.pageapi;
  myForm = new FormGroup({
    Firstname : new FormControl(''),
    Lastname : new FormControl(''),
   Email : new FormControl(''),
  })

  submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }


  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      Firstname: ['', Validators.required], 
      Lastname: ['', Validators.required],
      Email: ['', Validators.required]
    });
  }

  get f() {
     return this.myForm.controls; 
    }
    
  submitHandler() {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }

    this.http.post<any>(this.useurl, this.myForm.value)
      .subscribe(res => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
    
        Toast.fire({
          icon: 'success',
          title: 'We have received your request. Thank you!'
        })
        this.myForm.reset();
        this.router.navigate(['']);
      })

  }

}

  


