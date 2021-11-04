import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'https://angularcrud.igaptechnologies.com/api'; 


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httlClient: HttpClient) { }

  readAll(): Observable<any>{
    return this.httlClient.post(baseURL + "/listproducts", null);
  }

  read(data: any): Observable<any>{
    return this.httlClient.post(baseURL + "/getproduct", JSON.stringify(data));
  }

  create(data:any): Observable<any>{
    return this.httlClient.post(baseURL + "/saveproduct", JSON.stringify(data));
  }


  delete(data: any): Observable<any>{
    return this.httlClient.post(baseURL + "/deleteproduct", JSON.stringify(data));
  }
}
