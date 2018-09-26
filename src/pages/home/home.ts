import { Component } from '@angular/core';
import { NavController,ModalController} from 'ionic-angular';
import { ArlauncherPage } from '../arlauncher/arlauncher';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ionViewDidLoad(){

  }
  openAR(){
    this.navCtrl.push(ArlauncherPage);
  }
}
