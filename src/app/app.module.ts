import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuemSouComponent } from './quem-sou/quem-sou.component';
import { QueFacoComponent } from './que-faco/que-faco.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    QuemSouComponent,
    QueFacoComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
