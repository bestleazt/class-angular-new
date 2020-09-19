
import { Component, Input, Output ,EventEmitter } from '@angular/core';
import {Iitems,filterButtonType} from '../model';
import { itemservice } from '../Task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent {


label:filterButtonType = ['ALL','DONE','UNDONE']

@Input() status

private fillter
 
    items : Iitems[]
    
    constructor( private itemservice : itemservice){
        this.items = itemservice.getitems()
        this.dofilter('ALL')
    }
    //เพิ่มข้อมมูลเข้าไปใหม่
     newitem(event){
       const data = {
         name:event,
         done:false
       }
       this.itemservice.additems(data);
     //this.items =  this.itemservice.getitems();
     this.dofilter(this.fillter)   
    } 

    //เปลี่ยนค่า boolean เปลี่ยนสถานะ
    movelist(items:Iitems){
      this.itemservice.updatetask(items)
      this.dofilter(this.fillter)   
     
    }  
    // filter แสดงข้อมูลตามที่เลือก
    dofilter(event:string){
        this.fillter = event
        this.items = this.itemservice.getitems()
         this.items = this.items.filter(
          t => {
             if (event === 'ALL') {
               return true
             }else if (event === 'DONE'){
               return t.done
             }else{
               return !t.done
             }
           }
         ) 
    }

   

   
}

