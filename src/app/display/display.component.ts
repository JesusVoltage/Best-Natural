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

  action(id){
    //if es categoria -- else 
    if(id.substr(0,1) == "0"){
      this.targets = this.staticService.getProductosById(id);
    }else{
      console.log(id);
    }
  }

  goToCategorias(){
    this.targets = this.categorias;
  }

}
