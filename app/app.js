import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
//this is the class your importing
import {ListPage} from './pages/list/list';
import {DataService} from './providers/data';


@App({
  //this is important to match with the this.rootPage below
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  //providers add services to use throughout the App
  providers: [DataService],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})

export class MyApp {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    //controls the page you start with
    this.rootPage = ListPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
