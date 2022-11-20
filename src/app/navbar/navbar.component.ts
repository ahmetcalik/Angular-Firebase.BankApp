import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  constructor( private router: Router ,private authService: AuthService) {}

  isAuthenticated = false;
  private userSub: Subscription = new Subscription;


  public yonlendir(){
    this.router.navigate(['../','home'])
      .then(() => {
        this.router.navigate(['../','teminat-islemleri'])
      })
  }

  ngOnInit() {
    this.userSub = this.authService.user
    .subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
      }
    )
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
