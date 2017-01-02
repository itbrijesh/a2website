import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent }  from     './app.component';
import { NavbarComponent } from   './components/navbar/navbar.component';
import { JumbtronComponent } from './components/jumbtron/jumbtron.component';
import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';

import { routing } from './app.routing';

import * as _ from 'underscore';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, 
                  routing ], 
  declarations: [ AppComponent, NavbarComponent, JumbtronComponent, HomeComponent, AboutComponent ],
  providers:    [  ],
  exports : [ NavbarComponent, JumbtronComponent ],
  schemas: [ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
