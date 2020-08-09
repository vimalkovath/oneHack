import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Array<any> = [
    {
      'id': "1",
      'title': "Example 1",
      'description': 'description 1',
      "name":"Vimal",
      "phone":"8884216200",
      "category":"kovath",
      "emergency":"9020380704"
    },
    {
      'id': "2",
      'title': "Example 2",
      'description': 'description 2',
      "name":"Vimal",
      "phone":"8884216200",
      "category":"kovath",
      "emergency":"9020380704"
    },
    {
      'id': "3",
      'title': "Example 3",
      'description': 'description 3',
      "name":"Vimal",
      "phone":"8884216200",
      "category":"kovath",
      "emergency":"9020380704"
    },
    {
      'id': "4",
      'title': "Example 4",
      'description': 'description 4',
      "name":"Vimal",
      "phone":"8884216200",
      "category":"kovath",
      "emergency":"9020380704"
    },
    {
      'id': "5",
      'title': "Need a more complex app?",
      'description': 'Check the Ionic 4 Full Starter App.',
      "name":"Vimal",
      "phone":"8884216200",
      "category":"kovath",
      "emergency":"9020380704"
    }
  ]

  users: Array<any> = [
    {
      'id': "1",
      "name":"Vimal",
      "phone":"8884216200",
      "category":"kovath",
      "emergency":"9020380704"
    },
    {
      'id': "2",
      "name":"Vimal",
      "phone":"8884216200",
      "category":"kovath",
      "emergency":"9020380704"
    },
    {
      'id': "3",
      "name":"Vimal",
      "phone":"8884216200",
      "category":"kovath",
      "emergency":"9020380704"
    },
    {
      'id': "4",
      "name":"Vimal",
      "phone":"8884216200",
      "category":"kovath",
      "emergency":"9020380704"
    },
    {
      'id': "5",
      "name":"Vimal",
      "phone":"8884216200",
      "category":"kovath",
      "emergency":"9020380704"
    }
  ]

  constructor() { }

  createItem(title, description){

    let randomId = Math.random().toString(36).substr(2, 5);

    this.items.push({
      'id': randomId,
      'title': title,
      'description': description
    });
  }

  createUser(name,phone,category,emergency){

    let randomId = Math.random().toString(36).substr(2, 5);

    this.items.push({
      'id': randomId,
      "name":name,
      "phone":phone,
      "category":category,
      "emergency":emergency
    });
  }


  getItems(){
    return this.items;
  }

  getUserById(id){
    return this.users.filter(item => item.id === id);
  }
  updateUser(newValues){
    let itemIndex = this.users.findIndex(item => item.id == newValues.id);
    this.users[itemIndex] = newValues;
  }

  getItemById(id){
    return this.items.filter(item => item.id === id);
  }

  updateItem(newValues){
    let itemIndex = this.items.findIndex(item => item.id == newValues.id);
    this.items[itemIndex] = newValues;
  }
}
