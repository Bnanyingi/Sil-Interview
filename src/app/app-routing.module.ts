import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AlbumPageComponent } from './pages/album-page/album-page.component'
import { PhotoPageComponent } from './pages/photo-page/photo-page.component';
import { AuthGuard } from './services/guards/auth/auth.guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '',
    canActivateChild: [AuthGuard],
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'users/:id',
        component: UserPageComponent
      },

      {
        path: 'users/:userId/albums/:id',
        component: AlbumPageComponent
      },

      {
        path: 'photos',
        component: PhotoPageComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
