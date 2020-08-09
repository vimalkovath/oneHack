import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';

import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  items: Array<any>;
  new_item_form: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public itemService: ItemService
  ){}

  ngOnInit(){
    // this.items = this.itemService.getItems();

    this.new_item_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      pwd: new FormControl('', Validators.required)
    });
  }

  goTo(){
    this.router.navigate(['/profile']);
  }

  login(value){
    this.new_item_form.reset();
    this.goTo();
  }

}
