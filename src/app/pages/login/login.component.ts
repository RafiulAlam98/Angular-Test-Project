import { Component, OnInit } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { authConfig } from '../../auth/auth.config';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NzButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private oidcSecurityService: OidcSecurityService) {}
  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe((loginResponse) => {
      const { isAuthenticated, userData, accessToken, idToken, configId } =
        loginResponse;
      console.log(loginResponse);
    });
  }

  handleLogin() {
    this.oidcSecurityService.authorize();
  }
}
