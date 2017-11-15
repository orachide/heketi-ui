import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpModule } from '@angular/http';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';
import { ClusterService } from './heketi/cluster.service';
import { NodeService } from './heketi/node.service';
import { VolumeService } from './heketi/volume.service';
import { DeviceService } from './heketi/device.service';
import { EventManagerService } from './shared/event-manager.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [AuthGuard,
     AuthService, ClusterService, NodeService, VolumeService, DeviceService, CookieService, EventManagerService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
