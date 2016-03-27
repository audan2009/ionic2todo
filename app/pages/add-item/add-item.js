import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
 templateUrl: 'build/pages/add-item/add-item.html',
})

export class AddItemPage {

 static get parameters(){
   return [[NavController],[NavParams]];
 }

 constructor(nav, navParams) {

   this.nav = nav;
   this.navParams = navParams;

   this.title = "";
   this.description = "";
 }

 saveItemfromAddItemPage(){

      /* Since we want to pop this view when the user hits the save button, we are importing the NavController again. We are also importing the NavParams service though, which will allow us to grab data that is passed in from the list view using this.navParams.get(‘something’). In this case, we are passing in a reference to the ListPage class so that we can call its corresponding saveItem function (which we have not created yet). */

   console.log('save item from add-item ran');
   let newItem = {
     title: this.title,
     description: this.description
   };

   console.log(this.navParams);
   //this is how we use the saveItem function in the list.js file to save the newItem object
   this.navParams.get('listPage').saveItem(newItem);
   //we were pushed with the addItem() function and now we are 'popping' back to the List page
   this.nav.pop();

 }

}
