import { Component } from '@angular/core';

@Component({
  selector: 'ngx-search',
  templateUrl: `search.component.html`,
  styleUrls: ['./search.scss'],
})
export class SearchComponent {





  dataBooks = [
    {
      titulo: 'O principe e o mendigo',
      autor:  'Mark Twain',
      pais: 'França',
      genero: 'Romance Histórico',
    },
    {
      titulo: 'A Menina que Roubava Livros',
      autor:  'Markus Zusak',
      pais: 'Alemanha',
      genero: 'Ficção Histórica',
    },
    {
      titulo: 'A Marca de uma Lágrima',
      autor:  'Pedro Bandeira',
      pais: 'Brasil',
      genero: 'Romance',
    },
    {
      titulo: 'O Homem que Calculava',
      autor:  'Malba Tahan',
      pais: 'India',
      genero: 'Romance',
    },
    {
      titulo: 'A Marca de uma Lágrima',
      autor:  'Pedro Bandeira',
      pais: 'Brasil',
      genero: 'Romance',
    },
    {
      titulo: 'A Marca de uma Lágrima',
      autor:  'Pedro Bandeira',
      pais: 'Brasil',
      genero: 'Romance',
    },
    {
      titulo: 'A Marca de uma Lágrima',
      autor:  'Pedro Bandeira',
      pais: 'Brasil',
      genero: 'Romance',
    },
  ];

}
