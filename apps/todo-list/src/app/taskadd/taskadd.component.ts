
import { Component, EventEmitter,Output,Input,ViewChild, ElementRef } from '@angular/core';




@Component({
  selector: 'app-taskadd',
  templateUrl: './taskadd.component.html',
  styleUrls: ['./taskadd.component.scss']
})
export class TaskaddComponent  {

  @Output() newitem = new EventEmitter();
  @ViewChild('newitem')  input: ElementRef;

  addNewItem(event) {
    this.newitem.emit(event);
  }

  clearanddfocus(){
    document.getElementById("textfiled").focus();
     this.input.nativeElement.value = ''   
  }


  addbypress(newitem : string){
      if (newitem) {
        this.newitem.emit(newitem);
        this.clearanddfocus()
      }
        
  }

  

  
  
  

}
