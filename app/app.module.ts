import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import * as _ from 'underscore';

@NgModule({
  // photoRouting should come before main/root routing.
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, 
                  ], 
  declarations: [ AppComponent ],
  providers:    [  ],
  exports : [  ],
  schemas: [ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
