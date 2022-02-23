import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public users =[
    {name:'Juan',city:'Trujillo'},
    {name:'Dominico',city:'Lima'},
    {name:'Berto',city:'Ayacucho'},
    {name:'Lizardo',city:''},
    {name:'rodrigo',city:'Ica'}
  ];
  constructor() { }

  ngOnInit(): void {
    
  }

}
