import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {Ng2MultiSelectorModule} from "../../modules/ng2-multi-selector/ng2-multi-selector.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    Ng2MultiSelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
