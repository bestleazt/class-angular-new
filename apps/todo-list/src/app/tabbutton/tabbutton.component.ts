import { filterButtonType } from './../model';
import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'ui-tabbutton',
  templateUrl: './tabbutton.component.html',
  styleUrls: ['./tabbutton.component.scss']
})
export class TabbuttonComponent  {

      @Input() label:filterButtonType[]
      @Output() outtab = new EventEmitter()
      @Input() dis

      handlerclick(label){
        this.outtab.emit(label)
        this.dis = label
      }

       

     
      

  
}


