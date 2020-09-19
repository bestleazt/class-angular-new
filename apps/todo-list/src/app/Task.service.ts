

import { Iitems} from './model';
import { TaskaddComponent } from './taskadd/taskadd.component';

export class itemservice {
private items : Iitems[] = [

    
    { 
      id : 1,
      name : 'foods',
      done : false 
    },
    {
      id : 2,
      name : 'fruit',
      done : false
    },
    {
        id : 3,
        name : 'animal',
        done : false
      },
      {
        id : 4,
        name : 'human',
        done : false
      }
  
]
     
  getitems(){
    return this.items.slice()
    
  }

  additems(items : Iitems){
      this.items.push({
        id:this.items.length +1,
        ...items
      })
  }

  updatetask(items:Iitems){

      const mathindex = this.items.findIndex( 
          t => t.id === items.id)
          
      this.items[mathindex] = items
      console.log(this.items[mathindex])
  }

}



  