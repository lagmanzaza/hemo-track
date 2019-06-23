import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.user.subscribe(value => {
      if (value) {
        localStorage.setItem('uid', value.uid);
        this.router.navigate(['dashboard']);
      }
    });
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  ngOnInit() {}
  logout() {
    this.afAuth.auth.signOut();
  }
}
