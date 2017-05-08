import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ExoloreComponent } from './exolore/exolore.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about',  component: AboutComponent },
  { path: 'create', component: CreateComponent },
  { path: 'explore',     component: ExoloreComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

