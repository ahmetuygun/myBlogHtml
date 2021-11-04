import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id:any;
  product: any;

  constructor(private productService: ProductService,
            private router: Router, 
            private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    const data = {
      id: this.id,
    };
    this.productService.read(data).subscribe(
      response=>{
        this.product = response.product;
      },
      error=>{
        console.log(error);
      }
    );
  }

}
