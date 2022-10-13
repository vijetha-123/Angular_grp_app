import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { WorkComponent } from './work/work.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  
    
     { path:'sign', component:SignupComponent},
     { path:'subscribe',component:SubscribeComponent},
     { path: 'work',component:WorkComponent},
     { path:'foot',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
