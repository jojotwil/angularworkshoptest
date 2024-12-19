import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() title!:string;
@Input() image!:string;
@Input() description!:string;
@Input() id!:number;
@Input() btnText!:string;
@Input() isAvailable!:boolean;
@Output() sender= new EventEmitter();
addToParent(){
  this.sender.emit({idUser:1,idElement:this.id});
}
}
