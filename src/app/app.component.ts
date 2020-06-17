import { Component } from '@angular/core';
import {LoginPageComponent} from './pages/login-page/login-page.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetoCursos';


  rotaTemCabecalho = function rotaAtualTemCabecalho():Boolean{
    
    const rotaAtual = window.location.pathname;
    return rotaAtual === "/login";
  }
  
}
