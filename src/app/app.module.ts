import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { CommonModule } from '@angular/common';
import { PartnerComponent } from './partner/partner.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { DsmPersnalInfoComponent } from './dsm-persnal-info/dsm-persnal-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactComponent,
    FooterComponent,
    SignupComponent,
    SubscribeComponent,
    PartnerComponent,
    HomeComponent,
    BlogComponent,
    DsmPersnalInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
