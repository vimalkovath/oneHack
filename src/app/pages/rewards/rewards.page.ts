import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
})
export class RewardsPage implements OnInit {

  items: Array<any>;

  constructor(
    private router: Router,
    public alertController: AlertController,
    public itemService: ItemService
  ){}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Success',
      message: 'Check your Email',
      buttons: ['OK']
    });

    await alert.present();
  }

  goBack(){
    this.router.navigate(['/home']);
  }


  ngOnInit(){
    this.items = this.itemService.getItems();
  }

}
