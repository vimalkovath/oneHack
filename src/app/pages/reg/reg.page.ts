import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-reg',
  templateUrl: './reg.page.html',
  styleUrls: ['./reg.scss'],
})
export class RegPage implements OnInit {

  items: Array<any>;

  new_item_form: FormGroup;

  constructor(
    private router: Router,
    public itemService: ItemService,
    public formBuilder: FormBuilder,
  ){}

  ngOnInit() {
    this.new_item_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      emergency: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    });
  }

  goBack(){
    this.router.navigate(['/home']);
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  createItem(value){
    this.itemService.createUser(value.name, value.phone, value.emergency, value.category);
    this.new_item_form.reset();
    this.goToLogin();
  }

}
