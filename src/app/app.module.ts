import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TabView, TabViewModule} from 'primeng/tabview';
import {TooltipModule} from "primeng/tooltip";
import {TabviewExtendedComponent} from "./components/tabview-extended/tabview-extended.component";

@NgModule({
  declarations: [
    AppComponent,
    TabviewExtendedComponent,
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    TooltipModule,
  ],
  providers: [TabView],
  bootstrap: [AppComponent]
})
export class AppModule {
}
