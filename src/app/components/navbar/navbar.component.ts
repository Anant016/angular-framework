import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService,
    private router:Router,
    private flashMessages:FlashMessagesService) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessages.show('Successfully Logged out.',{cssClass:"alert-success",timeout:3000})
    this.router.navigate(['login']);
    return false;
  }

}
