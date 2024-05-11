import { Component, OnInit } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NzButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private oauthService: OAuthService) {}
  ngOnInit() {}
  login() {
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
  }
}
