import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { WorkComponent } from './work/work.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
    {path:'Contact',component:ContactComponent},
    { path:'sign', component:SignupComponent},
    { path:'subscribe',component:SubscribeComponent},
    { path: 'work',component:WorkComponent},
    { path: 'footer', component:FooterComponent},
    { path: '', component:HomeComponent},
    { path: 'service', component:ServiceComponent},
    {path : 'aboutus',component:AboutUsComponent},
    {path : 'blog',component:BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
