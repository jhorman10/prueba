import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // crear una variable de control para usarla en la funcion
  constructor(private PopCTRL: PopoverController) {}

  // Aqui cree el evento que dispara el popover
  async mostrarPop( evento) {
    // crear variable controladora del evento
    const POPOVER = await this.PopCTRL.create({
      // componente a mostrar dentro del pop
      component: PopoverComponent,
      // event es para que reconozca el boton que se clickeo
      event: evento,
      // forma en la que se va a visualizar
      mode: 'ios'
    });
    // espera promesa para mostrar el pop
    await POPOVER.present();
  }

}
