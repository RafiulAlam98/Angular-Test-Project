import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [NzButtonModule, LoginComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
