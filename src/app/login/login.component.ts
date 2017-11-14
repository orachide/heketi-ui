import { AuthService } from './../auth/auth.service';
import { Infra } from './../model/infra';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  hide = true;
  infra: Infra = new Infra('','');

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(infra: Infra){
    this.authService.login(infra);
  }
}
