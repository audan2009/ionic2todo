import {Page, NavParams} from 'ionic-angular';

/*
  Generated class for the ItemDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/item-detail/item-detail.html',
})
export class ItemDetailPage {

  static get parameters(){
    return [[NavParams]];
  }
  constructor(navParams) {

    this.navParams = navParams;
    console.log(navParams);
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;

  }

}
