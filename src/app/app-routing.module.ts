import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { PostComponent } from "./post/post.component";
import { CitiesComponent } from "./cities/cities.component";
import { BlankComponent } from "./blank/blank.component";
import { BarComponent } from "./bar/bar.component";

import { RbarComponent } from "./rbar/rbar.component";
import { GiguComponent } from "./gigu/gigu.component";

import { FriendsComponent } from "./friends/friends.component";
import { PhotosComponent } from "./photos/photos.component";
import { RatingComponent } from "./rating/rating.component";

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
  },
  {
    path: 'gigu',
    component: GiguComponent,
    outlet: "pop"
  },
  {
    path: 'rbar',
    component: RbarComponent,
    outlet: "pop"
  },
  {
    path: 'friends',
    component: FriendsComponent,
    outlet: "social"
  },
  {
    path: 'photos',
    component: PhotosComponent,
    outlet: "social"
  },
  {
    path: 'rating',
    component: RatingComponent,
    outlet: "social"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
