import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private loginService: LoginService,
                private fb:FormBuilder) { 
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  loginRequest() {
    const values = this.form.value; 
    console.log(values)
    if (values.email && values.password) {
      this.loginService.login(values.email, values.password).subscribe(() => {
        console.log("User is logged in");
      });
    }
  }

}
