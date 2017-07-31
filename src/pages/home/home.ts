import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	total: number;
	tip : number;
	tipTotal : number;
	background: any;

  constructor(public storage: Storage, public navParams: NavParams, public navCtrl: NavController, public alertCtrl: AlertController) {

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
        /*if (isNaN(this.total)==false || this.total!=0) {
        	this.nativeAudio.play('notGreat');
    	}*/
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
  /*   viewSettings() {
	    this.navCtrl.push(SettingsPage, {
	    });
	}*/
	 getColors() {
      if(localStorage.getItem('background') != null){
        this.background = localStorage.getItem('background');
      }
      else {
      this.background = "#222";
      }
   }
  save() {
  	localStorage.setItem('background', this.background);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Background Color',
      message: 'Choose background color!',
      inputs: [
      {
        type: 'radio',
        label: 'Black',
        value: '#222'
      },
      {
        type: 'radio',
        label: 'White',
        value: '#fff'
      },
      {
        type: 'radio',
        label: 'Blue',
        value: '#2C69CC'
      },
      {
        type: 'radio',
        label: 'Yellow',
        value: '#ffff00'
      },
      {
        type: 'radio',
        label: 'Green',
        value: '#17c434'
      },
      {
        type: 'radio',
        label: 'Red',
        value: '#e80909'
      },
      {
        type: 'radio',
        label: 'Pink',
        value: '#ff49bf'
      },
      {
        type: 'radio',
        label: 'Purple',
        value: '#ad0ace'
      },
      {
        type: 'radio',
        label: 'Teal',
        value: '#0fbdc6'
      },
      {
        type: 'radio',
        label: 'Orange',
        value: '#ff7b00'
      },
      {
        type: 'radio',
        label: 'Grey',
        value: '#918881'
      },
      {
        type: 'radio',
        label: 'Brown',
        value: '#68330b'
      }],
      buttons: [
      {
         text: 'Cancel'
       },
      {
        text: 'Save',
        handler: data => {
          console.log(data);
          this.background = data;
          this.save();
        }
       }
       ]
    });
    alert.present();
  }

}
