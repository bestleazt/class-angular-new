import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'class-angular-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.css']
})
export class ItemslistComponent implements OnInit {
  @Input() items = [];
  constructor() { }

  ngOnInit(): void {
  }

}
