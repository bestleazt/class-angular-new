import { Component,Output ,EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'ui-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent{

@Input() checked

@Output() check = new EventEmitter();


  onclick(event){
     const check =  event.target.checked;
     this.check.emit(check);
  }

    
  

}
