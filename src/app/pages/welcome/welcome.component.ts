import { Component, OnInit } from '@angular/core';

import { LoginComponent } from './../login/login.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../../auth/auth.config';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [NzButtonModule, LoginComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private oauthService: OAuthService) {}

  ngOnInit() {}
}
