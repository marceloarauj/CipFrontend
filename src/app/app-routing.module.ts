import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {PortalUsuarioComponent} from './pages/portal-usuario/portal-usuario.component';
import {AdminComponent} from './pages/admin/admin.component';

const routes: Routes = [
  {path:'login',component:LoginPageComponent},
  {path:'portal',component:PortalUsuarioComponent},
  {path:'admin',component:AdminComponent},
  {path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
