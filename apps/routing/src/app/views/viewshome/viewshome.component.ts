import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'class-angular-viewshome',
  templateUrl: './viewshome.component.html',
  styleUrls: ['./viewshome.component.css']
})
export class ViewshomeComponent implements OnInit {

  stats = [
    {value:22, label:'# of Users'},
    {value:900, label:'Revenue'},
    {value:50, label:'Reviews'}
  ];


  items = [
    {
      image :'./assets/hanson-lu-gGgoDJRD2WM-unsplash.jpg',
      title: 'Camera 1',
      description:'Good Camera for you'
    },
    {
      image :'./assets/paul-gaudriault-cwy9yVBBPxg-unsplash.jpg',
      title: 'Camera 2',
      description:'Profestional Camera'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
