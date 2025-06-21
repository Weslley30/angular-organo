import { Component } from '@angular/core';
import { CabecalhoComponent } from './Componentes/Cabecalho/cabecalho.component';
import { RodapeComponent } from './Componentes/Rodape/rodape.component';
import { ListaLivrosComponent } from './Componentes/lista-livros/lista-livros.component';

@Component({
  selector: 'app-root',
  imports: [
    CabecalhoComponent, 
    RodapeComponent,
    ListaLivrosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'organo';
}
