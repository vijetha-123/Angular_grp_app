import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { WorkComponent } from './work/work.component';


const routes: Routes = [
  
     {path:'Contact',component:ContactComponent},
     { path:'sign', component:SignupComponent},
     { path:'subscribe',component:SubscribeComponent},
     { path: 'work',component:WorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
