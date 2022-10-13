import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { SubscribeComponent } from './subscribe/subscribe.component';


const routes: Routes = [
  
     {path:'Contact',component:ContactComponent},
     { path:'sign', component:SignupComponent},
     { path:'subscribe',component:SubscribeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
