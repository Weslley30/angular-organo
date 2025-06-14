import { Component } from '@angular/core';

@Component({
  selector: 'asas-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  alternarFavorito() {
    this.livro.favorito = !this.livro.favorito
  }

  livro = {
    titulo: "Warhammer O emperio",
    autoria: "black library",
    favorito: false,
    imagem: "https://m.media-amazon.com/images/I/81lyEdkwseL._AC_UF200,600_QL80_.jpg"
  }

}
