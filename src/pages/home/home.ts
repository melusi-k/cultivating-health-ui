import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  menuItems = [
    {
      name: 'Depression'
    },
    {
      name: 'Anxiety'
    },
    {
      name: 'Eating Dissorders'
    },
    {
      name: 'Trauma'
    },
    {
      name: 'Relationships'
    },
    {
      name: 'Family Issues'
    },
    {
      name: 'Careers'
    }
  ];

  constructor(public navCtrl: NavController) {

  }
  menuSelected(menu) {
    switch (menu.name) {
      default: console.log(menu.name);
        break;
    }
  }

}
