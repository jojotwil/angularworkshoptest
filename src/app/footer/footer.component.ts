import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
@Input() received!: string;
x!: string;
@Output() env= new EventEmitter<string>()

sendToParent(){
this.received+= this.x;
this.env.emit(this.received);
}
}
