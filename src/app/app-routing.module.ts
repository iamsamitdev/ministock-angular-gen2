import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { HomeComponent } from './pages/frontend/home/home.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { LoginRegisterLayoutComponent } from './layouts/login-register-layout/login-register-layout.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { AboutComponent } from './pages/frontend/about/about.component';
import { ContactComponent } from './pages/frontend/contact/contact.component';


const routes: Routes = [
   // Route สำหรับเรียกหน้า Frontend Layout
  {
    path:'',
    component: FrontendLayoutComponent,
    children:[
      {
        path: "",
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  },
  // Route สำหรับเรียกหน้า Backend Layout
  {
    path:'backend',
    component: BackendLayoutComponent,
    children:[
      {
        path: "",
        component: DashboardComponent
      }
    ]
  },
  // Route สำหรับเรียกหน้า Login/Register Layout
  {
    path:'login',
    component: LoginRegisterLayoutComponent,
    children:[
      {
        path: "",
        component: LoginRegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
