import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SettingsPage } from '../settings/settings';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	total: number;
	tip : number;
	tipTotal : number;
	background: any;

  constructor(public nativeAudio: NativeAudio, public storage: Storage, public navParams: NavParams, public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  ionViewWillEnter(){
    this.getColors();
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
        this.nativeAudio.play('assets/audio/not-great.mp3');
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
     viewSettings() {
	    this.navCtrl.push(SettingsPage, {
	    });
	}
	 getColors() {
      if(localStorage.getItem('background') != null){
        this.background = localStorage.getItem('background');
      }
      else {
      this.background = "#222";
      }
   }

}
