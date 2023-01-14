import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightDirective , BoldDirective } from './directives/attr-directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HighlightDirective,
    BoldDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
