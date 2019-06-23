import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

toggleNav = false;

  constructor(private afAuth: AngularFireAuth) { }

  onToggle() {
    console.log('sss');
    this.toggleNav = !this.toggleNav;
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
