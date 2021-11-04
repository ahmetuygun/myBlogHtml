import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product = {
    id: 0,
    name: '',
    mrp: 0,
    price: 0,
    available: 'Yes'
  };

  submitted = false;

  constructor(private productService: ProductService,
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.product.id = Number(this.route.snapshot.paramMap.get('id'));
    const data = {
      id: this.product.id,
    };
    console.log(data);
    this.productService.read(data).subscribe(
      response=>{
        this.product = response.product;
      },
      error=>{
        console.log(error);
      }
    );
  }

  createProduct(): void{
    const data = {
      id: this.product.id,
      name: this.product.name,
      mrp:  this.product.mrp,
      price: this.product.price,
      available: this.product.available
    };
    console.log(data);
    this.productService.create(data).subscribe(
      response=>{
        console.log(response);
        this.submitted = true;
      },
      error=>{
        console.log(error);
      }
    );
  }
}
