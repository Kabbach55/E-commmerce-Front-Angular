import {Component, OnInit} from '@angular/core';
import {CatalogueService} from "./catalogue.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   products:any ;
  constructor(private catService:CatalogueService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.catService.getResource("/products").subscribe(data=>{
      this.products=data;
    },error => {
      console.log(error);
      }
    );
  }
}
