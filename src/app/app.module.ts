import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule }   from '@angular/router';

import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
// import {MdButtonModule, MdCheckboxModule, MdToolbarModule,MdAutocompleteModule,MdInputModule} from '@angular/material';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ExoloreComponent } from './exolore/exolore.component';
import { CreateComponent } from './create/create.component';

import {GeoService} from './geo/geo.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExoloreComponent,
    CreateComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    BrowserAnimationsModule,
    // MdButtonModule,
    // MdCheckboxModule,
    // MdToolbarModule,
    // MdAutocompleteModule,
    // MdInputModule
    MaterialModule
  ],
  providers: [GeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
