import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	total: number;
	tip : number;
	tipTotal : number;

  constructor(public navCtrl: NavController) {

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
