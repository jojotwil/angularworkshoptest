import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  URL = 'http://localhost:3000/products';
  
  constructor(private http:HttpClient) { }

  getAllProducts(){
   return this.http.get<Product[]>(this.URL);
  }

  getProductById(id:number){
    return this.http.get(this.URL+'/'+id);
  }

  getProductByCategorie(idCat:number){
    return this.http.get<Product[]>(this.URL+'?categoryId='+idCat);
  }

  addProduct(P:Product){
    return this.http.post<Product>(this.URL, P);
  }

  updateProduct(P:Product){
    return this.http.put(this.URL+'/'+P.id, P);
  }

  deleteProduct(id:number){
    return this.http.delete(this.URL+'/'+id);
  }

}
