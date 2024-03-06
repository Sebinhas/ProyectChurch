import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgIconComponent } from '@ng-icons/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelpComponent } from 'src/components/help/help.component';

import {AccordionModule} from 'primeng/accordion'



@NgModule({
  declarations: [
    AppComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgIconComponent,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
