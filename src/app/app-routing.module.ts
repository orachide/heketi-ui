import { VolumeComponent } from './volume/volume.component';
import { NodeComponent } from './node/node.component';
import { ClusterComponent } from './cluster/cluster.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: 'home',component: HomeComponent,canActivate: [AuthGuard]},
    {path: 'login',component: LoginComponent},
    {path: 'cluster/:clusterId', component: ClusterComponent,canActivate: [AuthGuard]},
    {path: 'cluster/:clusterId/node/:nodeId', component: NodeComponent,canActivate: [AuthGuard]},
    {path: 'cluster/:clusterId/volume/:volumeId', component: VolumeComponent,canActivate: [AuthGuard]},
    {path: 'about',component: AboutComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' }
  ];

  @NgModule({
    imports: [
      RouterModule,
      RouterModule.forRoot(
        routes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
        RouterModule
    ]
  })
  export class AppRoutingModule { }