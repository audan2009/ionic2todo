import {Storage, SqlStorage} from 'ionic-angular';
import {Injectable} from 'angular2/core';

@Injectable()

export class DataService {

  constructor(){
    //create new SqlStorage called todo
    this.storage = new Storage(SqlStorage, {name: 'todo'});
    this.data = null;

    //can only be saved as a string to database
    this.storage.get('todos').then((todos) => {
      this.data = JSON.parse(todos);
    });
  }

  getData(){
    return this.storage.get('todos');
  }

  //save takes an item, if there is no data in the database then it stores that single item. If there is data then it adds the new item to the exisiting data

  save(item){
    //if there is no data
    if(!this.data){
      this.data = [item];
      //create newData to store
      let newData = JSON.stringify(item);
      //pass in newData
      this.storage.set('todos', newData);
    } else {
    //if there is data, then push the new data
      this.data.push(item);
      let newData = JSON.stringify(this.data);
      this.storage.set('todos', newData);
    } // end save item if
  } //end save item
} //end class
