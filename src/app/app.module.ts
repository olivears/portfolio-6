import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { MouseComponent } from './mouse/mouse.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SocialMediaComponent,
    MouseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
