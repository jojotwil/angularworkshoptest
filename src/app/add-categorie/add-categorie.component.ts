import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategorieService } from '../core/categorie.service';
import { Categorie } from '../models/categorie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent {
  newCateg!:Categorie;
  idCateg!: number; 
constructor(private categServ: CategorieService, private R: Router, private actR: ActivatedRoute){}

ngOnInit(): void {
//this.idCateg=Number(this.actR.snapshot.queryParamMap.get('id'));
this.actR.queryParamMap.subscribe(data => this.idCateg = Number(data.get('id'))); 
if (this.idCateg){
  this.categServ.getCategorieById(this.idCateg).subscribe(
    data => this.newCateg = data
  );
}
}



addCateg(f: NgForm){
  console.log(f.value);
  this.newCateg = f.value;
  console.log(this.newCateg); 
  
  this.categServ.addCategorie(this.newCateg).subscribe(
    ()=> {
      alert('Categorie ajoutée avec succès');
      this.R.navigate(['/categories']);
    }
  );
  //add dans list categories
}

updateCateg(addForm: NgForm){
  this.newCateg=addForm.value;
  this.categServ.updateCategorie(this.newCateg).subscribe(
    ()=> {
      alert('Categorie modifiée avec succès');
      this.R.navigate(['/categories']);
    }
  );
}
}
