import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public email: string = '';
  public password: string = '';

  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit(): void {}

  login(): void {
    this.afAuth.auth
      .signInWithEmailAndPassword(this.email, this.password)
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    // this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
