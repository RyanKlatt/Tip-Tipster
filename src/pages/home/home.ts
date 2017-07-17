import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	total: number;
	tip : number;
	tipTotal : number;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  checkNan() {
  	if (isNaN(this.total) || this.total==0) {
  		  let alert = this.alertCtrl.create({
  		  title: 'Enter Total',
	      subTitle: 'Please enter the total charge!',
	      buttons: ['OK']
	    });
	    alert.present();
	    this.tipTotal = 0;
	    this.tip = 0;
	 }
  }
  notGreat() {
        this.tip = this.total * 0.05;
        this.tipTotal = Number(this.total) + Number(this.tip);
    };
    
    average() {
        this.tip = this.total * 0.15;
        this.tipTotal = Number(this.total) + Number(this.tip);
    };
    
    good() {
        this.tip = this.total * 0.20;
        this.tipTotal = Number(this.total) + Number(this.tip);
    };
    
    veryGood() {
        this.tip = this.total * 0.25;
        this.tipTotal = Number(this.total) + Number(this.tip);
    };
    
    excellent() {
        this.tip = this.total * 0.35;
        this.tipTotal = Number(this.total) + Number(this.tip);
    };
    
    roundDown() {
        this.tip = Math.floor(this.tip);
        this.tipTotal = Number(this.total) + Number(this.tip);
    };
    
    roundUp() {
        this.tip = Math.ceil(this.tip);
        this.tipTotal = Number(this.total) + Number(this.tip);
    };

}
