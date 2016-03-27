import {Page, NavController} from 'ionic-angular';
import {AddItemPage} from '../add-item/add-item';
import {ItemDetailPage} from '../item-detail/item-detail';
import {DataService} from '../../providers/data';

@Page({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {

  static get parameters(){
    //import the service
    return [ [NavController], [DataService] ]
  }

  //use the dataService
  constructor(nav, dataService){
    //this will allow us to push and pop views using this.nav.push() .pop()
    this.nav = nav;
    this.dataService = dataService;
    this.items = [];
    console.log(this.items);

    /* It’s important to note here that getData returns a promise not the data itself. Fetching data from SqlStorage is asynchronous which means our application will continue to run while the data loads. A promise allows us to perform some action whenever that data has finished loading, without having to pause the whole application. */

    this.dataService.getData().then((todos) => {
      this.items = JSON.parse(todos) || [];
    });

  }

  addItem(){
    this.nav.push(AddItemPage, {listPage: this});
  }

  saveItem(item){
    //pushing this to the this.items array.
    this.items.push(item);
    this.dataService.save(item);
  }

  viewItem(item){
    this.nav.push(ItemDetailPage, {
      item: item
    });
  }


}
