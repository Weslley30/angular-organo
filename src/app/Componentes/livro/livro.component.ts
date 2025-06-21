import { Component, input } from '@angular/core';
import { Livro } from './livro';

@Component({
  selector: 'asas-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito
  }

  livro = input.required<Livro>()

}
