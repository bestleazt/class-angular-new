import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'class-angular-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    {name:'Best', age:25, job:'front-end programmer',employed:true},
    {name:'Ohm', age:16, job:'Student',employed:false},
    {name:'Gym', age:29, job:'Artist',employed:true}
  ];
  headers = [
    {key:'name',label:'Name'},
    {key:'age',label:'Age'},
    {key:'job',label:'Job'},
    {key:'employed',label:'Has a Job?'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
