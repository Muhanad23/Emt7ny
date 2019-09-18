import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from '../Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private jarwis: JarwisService ,
    private token: TokenService,
    private router: Router ,
    private Auth: AuthService,
  ) { }

  /**
   * For the forget password items
   */
  isShown: boolean = false;
  /*
  *   login handling by ahmed waleed 
  */
  public error = null;
  
  public form = {
    email: null,
    password: null
  };

  ngOnInit() {
  }
  forgetPassword() {
    this.isShown = true;
  }
  onSubmit() {
    this.jarwis.login(this.form).subscribe(
      data => {
        this.handelResponse(data);
        console.log(data);
      },
      error => this.handelError(error)
    );
  }

  handelResponse(data) {
    this.token.handel(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile/:username');
  }

  handelError(error) {
    this.error = error.error.error;
  }
}