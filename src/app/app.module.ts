import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeEsAR from '@angular/common/locales/es-AR';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

registerLocaleData(localeEsAR);

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
