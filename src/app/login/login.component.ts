import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * For the forget password items
   */
  isShown: boolean = false;
  /**
   * For choosing between signup or login
   */
  constructor() { }

  ngOnInit() {
  }
  forgetPassword() {
    this.isShown = true;
  }
}
