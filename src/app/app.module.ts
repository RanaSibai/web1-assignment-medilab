import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { MainComponent } from './main/main.component';
import { WhyUsComponent } from './main/why-us/why-us.component';
import { AboutComponent } from './main/about/about.component';
import { CountsComponent } from './main/counts/counts.component';
import { ServicesComponent } from './main/services/services.component';
import { AppointmentComponent } from './main/appointment/appointment.component';
import { DepartmentsComponent } from './main/departments/departments.component';
import { DoctorsComponent } from './main/doctors/doctors.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { ContactComponent } from './main/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FaqComponent } from './main/faq/faq.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { DropdownComponent } from './header/navbar/dropdown/dropdown.component';
import { DeepdropdownComponent } from './header/navbar/dropdown/deepdropdown/deepdropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HeaderComponent,
    HeroComponent,
    MainComponent,
    WhyUsComponent,
    AboutComponent,
    CountsComponent,
    ServicesComponent,
    AppointmentComponent,
    DepartmentsComponent,
    DoctorsComponent,
    TestimonialsComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
    FaqComponent,
    NavbarComponent,
    DropdownComponent,
    DeepdropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
