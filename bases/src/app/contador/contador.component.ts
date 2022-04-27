import {Component} from '@angular/core'

@Component({
   selector:'app-contador',
   template:
   `
    <h1>{{titulo}}</h1>
    <button (click)="acumular(base)">{{base}}</button>
        {{numero}}
    <button (click)="acumular(-base)">-{{base}}</button>

   `

})

export class ContadorComponent{

    public titulo:string = 'Contador APP';
    public numero:number=10;
    public base:number=5;
   
   sumar(){
     this.numero += 1; 
   }
   restar(){
     this.numero-=1;
   }
   
   acumular(valor:number)
   {
     this.numero += valor; 
   }

}