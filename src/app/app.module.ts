import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { FootBarComponent } from './foot-bar/foot-bar.component';
import { LoadingComponent } from './loading/loading.component';
import { AboutComponent } from './about/about.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { BlogComponent } from './blog/blog.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { EditionsComponent } from './editions/editions.component';
import { LandingImageComponent } from './landing-image/landing-image.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent }
  //{ path: 'register-individual', component: IndividualRegistrationComponent },
  //{ path: 'register-business', component: BusinessRegistrationComponent },
  //{ path: 'blog', component: BlogPageComponent },
  //{ path: '**', component: ErrorComponent }
];

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
    PricingComponent,
    ContactComponent,
    EditionsComponent,
    LandingImageComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
