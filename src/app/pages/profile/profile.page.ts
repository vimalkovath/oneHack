import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';

import { Chart } from "chart.js";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  @ViewChild('lineCanvas') lineCanvas: ElementRef;


  items: Array<any>;
cno=10;
public timer = 0;
public m = 0;
coins;


private lineChart: Chart;

  constructor(
    private router: Router,
    public itemService: ItemService
  ){
    this.start();
  }

  start()

{

var IntervalVar = setInterval( function() {

  this.timer++;

  if (this.timer === 60)

   {

    this.timer = 0;

    this.m += 1;

   }

  // if (this.m === 0)
  //  {
  //   this.timer = "00";
  //   this.m = "00"
  //   clearInterval(IntervalVar);
  //  }
  this.cno = --this.cno <= 0 ? 10 : this.cno;

this.coins=(this.m*60+this.timer)/10;
}.bind(this) , 1000)




}

  ngOnInit(){
    this.items = this.itemService.getItems();



    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          }
        ]
      }
    });

  }

  goBack(){
    this.router.navigate(['/home']);
  }



}
