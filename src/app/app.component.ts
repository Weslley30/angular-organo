import { Component } from '@angular/core';
import { CabecalhoComponent } from './Componentes/Cabecalho/cabecalho.component';
import { RodapeComponent } from './Componentes/Rodape/rodape.component';
import { LivroComponent } from './Componentes/livro/livro.component';

@Component({
  selector: 'app-root',
  imports: [
    CabecalhoComponent, 
    RodapeComponent,
    LivroComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'organo';
}
