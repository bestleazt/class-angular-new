import { Component, Input,Output, EventEmitter, HostBinding } from '@angular/core';


@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.scss']
})
export class TaskitemComponent  {

   @Input()items 

   
  
   
   @Output()check = new  EventEmitter();
   
   @HostBinding('class.newcolor')
    get done() 
   { return this.items.done; }


   checkk(event){
     
     this.items.done = event
     this.check.emit({...this.items,done:event})
     
      
   }



   

 
}
