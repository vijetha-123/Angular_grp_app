import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { WorkComponent } from './work/work.component';
import { FooterComponent } from './footer/footer.component';
import { PartnerComponent } from './partner/partner.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { DsmPersnalInfoComponent } from './dsm-persnal-info/dsm-persnal-info.component';



const routes: Routes = [
    { path:'sign', component:SignupComponent},
    { path:'subscribe',component:SubscribeComponent},
    { path: 'work',component:WorkComponent},
    { path: 'footer', component:FooterComponent},
    { path: '', component:HomeComponent},
    { path: 'service', component:ServiceComponent},
    {path : 'aboutus',component:AboutUsComponent},
    {path : 'blog',component:BlogComponent},
    { path:'partner', component:PartnerComponent},
    {path: 'info', component:DsmPersnalInfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
