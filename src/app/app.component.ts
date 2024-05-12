import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { OAuthService } from 'angular-oauth2-oidc';
import { RouterOutlet } from '@angular/router';
import { authCodeFlowConfig } from './auth/auth.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'oidc-demo';

  isLoggedIn = false;

  constructor(private oauthService: OAuthService) {}
  ngOnInit(): void {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      this.isLoggedIn = this.oauthService.hasValidAccessToken();

      if (this.isLoggedIn) {
        var token = this.oauthService.getIdToken();

        console.log('token', token);

        this.oauthService.loadUserProfile().then((profile) => {
          console.log('profile', profile);
        });
      }
    });
    this.oauthService.setupAutomaticSilentRefresh();
  }

  login() {
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
  }
}