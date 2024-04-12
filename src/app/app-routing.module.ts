import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewhomeComponent } from './components/newhome/newhome.component';
import { CartcomponentComponent } from './components/cartcomponent/cartcomponent.component';
import { NewsdetailsComponent } from './components/newsdetails/newsdetails.component';
import { homeGuard } from './guards/home.guard';

const routes: Routes = [
  { path: 'newhome', component: NewhomeComponent, canActivate: [homeGuard] },
  { path: 'cart', component: CartcomponentComponent },
  { path: 'newdetails/:author', component: NewsdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
