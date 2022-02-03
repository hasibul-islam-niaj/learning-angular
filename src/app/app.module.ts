import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorinfoComponent } from './authorinfo/authorinfo.component';
import { FormsModule } from '@angular/forms';
import { TestingComponent } from './entities/testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorinfoComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
