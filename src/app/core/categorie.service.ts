import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProduitService } from './produit.service';

@Injectable({
  providedIn: 'root' //visiblity tout le projet (composants et modules)
})


export class CategorieService {
  
  categories : Categorie[]=[]
  URL = 'http://localhost:3000/categories';
  
  constructor( private http: HttpClient, private productS:ProduitService) { }

  getAllCategories(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.URL);
  }

  getCategorieById(id:number){
    return this.http.get<Categorie>(this.URL+'/'+id);
  }

  addCategorie(C:Categorie){
    return this.http.post(this.URL, C);
  }

  updateCategorie(C:Categorie){
    return this.http.put(this.URL+'/'+C.id, C);
  }

  deleteCategorie(id:any){
    //Delete des produits par categorie
    return this.http.delete(this.URL+'/'+id);
  }

}
