import { AppRoutingModule } from './app-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {HeaderModule} from "./header/header.module";
import {MatIconModule} from "@angular/material/icon";
import {BodyModule} from "./body/body.module";
import {FirestoreModule} from "./firestore/firestore.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HeaderModule,
    MatIconModule,
    BodyModule,
    AppRoutingModule,
    FirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
