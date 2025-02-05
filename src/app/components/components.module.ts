import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { IonicModule } from '@ionic/angular';
import { CardPostComponent } from './card-post/card-post.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent,
    CardPostComponent,

  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  exports:[
    LayoutComponent,
    CardPostComponent,
    
  ]
})
export class ComponentModule { }
