import { Component, OnInit } from '@angular/core';
import { StaticService } from '../static.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {


  targets: any;

  categorias: any;
  nombreCategoria: string;
  nombreProducto: string;

  isCategory: boolean = false;
  isProduct: boolean = false;
  product: any;

  constructor(
    private staticService : StaticService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.categorias = this.staticService.getCategorias(); 
    this.targets = this.categorias;
  }

  action(target: any){
    //if es categoria -- else 
    if(target.id.substr(0,1) == "0"){
      this.targets = this.staticService.getProductosById(target.id);
      this.nombreCategoria = target.nombre;
      this.isCategory = true;

    }else{
      this.isProduct= true;
      //Recogemos Datos del producto
      this.product = target;
      console.log(this.product);
    }
  }

  goToCategorias(){
    if(this.isCategory) this.isCategory = false;
    if(this.isProduct) this.isProduct = false;
    this.targets = this.categorias;
    this.isCategory = false;
  }

  goToProduct(){

  }
  backToProducts(){
    this.isProduct = false;
  }

}
