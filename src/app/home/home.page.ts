import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public router: Router,
    public alertCtrl: AlertController,
  ) {}

  goToQuestion(){
    // Utiliser le router angular pour charger la page help
    // console.log(this.router)
    this.router.navigate(['/question'])
  }

}
