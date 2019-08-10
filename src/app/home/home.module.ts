import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ComponentsModule } from '../components/components.module';
import { PopoverComponent } from '../components/popover/popover.component';

@NgModule({
  // entryComponents hace que pueda renderizar de forma dinamica un elemento exterior en mi HTML
  entryComponents: [
    PopoverComponent
  ],
  imports: [
    CommonModule,
    // importo el ComponentsModule en cada page donde vaya a utilizarlo
    ComponentsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage
  ]
})
export class HomePageModule {}
