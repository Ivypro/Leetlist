import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { PostComponent } from "./post/post.component";
import { CitiesComponent } from "./cities/cities.component";
import { BlankComponent } from "./blank/blank.component";
import { BarComponent } from "./bar/bar.component";

const routes: Routes = [
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'cities',
    component: CitiesComponent
  },
  {
    path: 'main',
    component: BlankComponent
  },
  {
    path: 'bar',
    component: BarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
