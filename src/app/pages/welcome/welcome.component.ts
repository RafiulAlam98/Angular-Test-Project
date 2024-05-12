import { Component, OnInit } from '@angular/core';

import { LoginComponent } from './../login/login.component';

import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../../auth/auth.config';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private oauthService: OAuthService) {}

  ngOnInit() {}
}
