import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover/popover.component';
import { IonicModule } from '@ionic/angular';

// Este archivo se crea con el comando -ionic g module components (donde components es la carpeta que contiene los elementos compartidos)

@NgModule({
  declarations: [
    // declaro el componente a compartir
    PopoverComponent
  ],
  exports: [
    // exporto el componente a compartir
    PopoverComponent
  ],
  imports: [
    CommonModule,
    // importo el ionicmodule para utilizar los componentes de ionic en la carpeta components
    IonicModule
  ]
})
export class ComponentsModule { }
