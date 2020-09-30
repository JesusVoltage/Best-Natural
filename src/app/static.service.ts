import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { categorias } from '../assets/JSON/categorias.js';
import { productos } from '../assets/JSON/productos.js';
@Injectable({
  providedIn: 'root'
})
export class StaticService {

  constructor() { }

  getCategorias() {
    return categorias;
  }

  getProductosById(id) {
    let result: any[] = [];
    for (const producto of productos) {
      if (producto.categoria == id) {
        result.push(producto);
      }
    }

    console.log(result);
    return result;
  }



}
