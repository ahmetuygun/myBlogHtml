import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;
  currentProduct = null;
  currentIndex = -1;
  name = "";

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.readProducts();
  }

  readProducts(): void{
    this.productService.readAll().subscribe(
      data=>{
        this.products = data.products;
        //console.log(this.products);
      },
      error=>{
        console.log(error);
      }
    );
  }

  setCurrentProduct(product: any, index: number): void{
    this.currentProduct = product;
    this.currentIndex = index;
  }

  deleteProduct(id: Number){
    if(confirm("Sure to delete?")){
      const data = {
        id: id,
      };
      this.productService.delete(data).subscribe(
        response=>{        
          console.log(response);
          this.readProducts();
        },
        error=>{
          console.log(error);
        }
      );
    }
  }
}
