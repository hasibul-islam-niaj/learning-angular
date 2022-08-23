import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorinfoComponent } from './authorinfo/authorinfo.component';
import { FormsModule } from '@angular/forms';
import { TestingComponent } from './entities/testing/testing.component';
import { DashboardComponent } from './entities/dashboard/dashboard.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BggreenhighlightDirective } from './directives/bggreenhighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    AuthorinfoComponent,
    TestingComponent,
    DashboardComponent,
    HighlightDirective,
    BggreenhighlightDirective
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
