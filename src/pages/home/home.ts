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
        this.tip = this.total * 0.075;
        this.tipTotal = this.total + this.tip;
    };
    
    average() {
        this.tip = this.total * 0.15;
        this.tipTotal = this.total + this.tip;
    };
    
    good() {
        this.tip = this.total * 0.20;
        this.tipTotal = this.total + this.tip;
    };
    
    veryGood() {
        this.tip = this.total * 0.25;
        this.tipTotal = this.total + this.tip;
    };
    
    excellent() {
        this.tip = this.total * 0.35;
        this.tipTotal = this.total + this.tip;
    };
    
    roundDown() {
        this.tip = Math.floor(this.tip);
        this.tipTotal = this.total + this.tip;
    };
    
    roundUp() {
        this.tip = Math.ceil(this.tip);
        this.tipTotal = this.total + this.tip;
    };

}
