import { Component } from '@angular/core';
import { IonHeader, IonContent, IonToolbar, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonTitle, IonToolbar, IonHeader, IonContent],
})
export class HomePage {

  contador = 0;
  animar = false;
  currentYear: number = new Date().getFullYear();

  incrementar() {
    this.contador++;
    this.animacion();
  }

  decrementar() {
    this.contador--;
    this.animacion();
  }

  reset() {
    this.contador = 0;
    this.animacion();
  }

  animacion() {
    this.animar = true;
    setTimeout(() => {
      this.animar = false;
    }, 200);
  }

}