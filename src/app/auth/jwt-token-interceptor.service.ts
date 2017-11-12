import { Infra } from './../model/infra';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { HEKETI_UI_INFRA } from './auth.service';

import * as jwtSimple from 'jwt-simple';
import * as sha256 from 'js-sha256';
import * as moment from 'moment';

@Injectable()
export class JwtTokenInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.generateJwtToken(request)}`
      }
    });

    return next.handle(request);
  }

  generateJwtToken(request: HttpRequest<any>): string{
    let infra: Infra = JSON.parse(localStorage.getItem(HEKETI_UI_INFRA))
    let requestMethod: string = request.method
    var hash = sha256.create();
    let apiUri = request.url.substring(infra.serverUrl.length);
    console.log(`${requestMethod}&${apiUri}`);
    hash.update(`${requestMethod}&${apiUri}`);
    let qsh: string = hash.hex();
    let now = moment();
    let payload = {
      iss: infra.user,
      iat: now.format(),
      exp: now.add(7, 'days').format(),
      qsh: qsh
    }
    let jwtToken = jwtSimple.encode(payload, infra.secret);
    return jwtToken;
  }
}