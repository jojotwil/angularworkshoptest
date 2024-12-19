import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent {
constructor(private actR:ActivatedRoute){}

id!:number;

categories:Categorie[]=[
    
  {"id":1,"title":"Grand électroménager",
  "image":"assets/images/categorie_electromenager.jpg", "description":"Grand électroménager",
  "available":true},
  {"id":2,"title":"Petit électroménager",
  "image":"assets/images/categorie_petit_electromenager.jpg", "description":"Petit électroménager",
  "available":true},
  {"id":3,"title":"Produits informatiques",
  "image":"assets/images/categorie_produits_informatiques.jpg", "description":"Produits informatiques",
  "available":true},
  {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg",
  "description":"test", "available":true},
  {"id":5,"title":"TV, images et son",
  "image":"assets/images/categorie_tv_image_son.jpg", "description":"TV, images et son",
  "available":false},
  {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg",
  "description":"Produits voiture","available":false},
]
ngOnInit(){
 
  this.actR.queryParamMap.subscribe(params=> this.id=Number(params.get('id')));
 
}
}
