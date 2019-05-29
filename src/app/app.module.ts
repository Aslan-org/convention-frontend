import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { FootBarComponent } from './foot-bar/foot-bar.component';
import { LoadingComponent } from './loading/loading.component';
import { AboutComponent } from './about/about.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { BlogComponent } from './blog/blog.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadBarComponent,
    FootBarComponent,
    LoadingComponent,
    AboutComponent,
    SpeakersComponent,
    SponsorsComponent,
    BlogComponent,
    RegisterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
