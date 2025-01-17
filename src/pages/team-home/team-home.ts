import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeamHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

import { StandingsPage, TeamDetailPage } from '../pages';

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {
  team: any;
  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
  }

  goHome(){
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

}
