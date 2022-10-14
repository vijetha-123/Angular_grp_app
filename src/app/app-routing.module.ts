import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { WorkComponent } from './work/work.component';
import { FooterComponent } from './footer/footer.component';
import { PartnersComponent } from './partners/partners.component';


const routes: Routes = [
  
     {path:'Contact',component:ContactComponent},
     { path:'sign', component:SignupComponent},
     { path:'subscribe',component:SubscribeComponent},
     { path:'work',component:WorkComponent},
     { path:'footer', component:FooterComponent},
     { path:'partner', component:PartnersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
