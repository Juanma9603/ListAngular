import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products = [
    {
      id:1,
      name:'Egg',
      category:'Food',
      description:'Lorem egg',
      price:1
    },
    {
      id:2,
      name:'Onion',
      category:'Food',
      description:'Red Onion',
      price:5
    },
    {
      id:3,
      name:'Watermellon',
      category:'Food',
      description:'Red watermellon',
      price:5
    }
  ];

  getAllProducts(){
    return this.products;
  }

  getProductById(id: string | number | null ){
    return this.products.filter((product) => product.id==id);
  }
}
