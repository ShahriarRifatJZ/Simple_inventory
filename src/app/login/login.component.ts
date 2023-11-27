import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signUpButton: HTMLElement | null;
  signInButton: HTMLElement | null;
  container: HTMLElement | null;

  constructor() {
    this.signUpButton = null;
    this.signInButton = null;
    this.container = null;
  }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      this.signUpButton = document.getElementById('signUp');
      this.signInButton = document.getElementById('signIn');
      this.container = document.getElementById('container');

      if (this.signUpButton && this.signInButton && this.container) {
        this.signUpButton.addEventListener('click', () => {
          this.container!.classList.add("right-panel-active");
        });

        this.signInButton.addEventListener('click', () => {
          this.container!.classList.remove("right-panel-active");
        });
      }
    });
  }
}
