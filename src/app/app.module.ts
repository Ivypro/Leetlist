import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';
import { PostComponent } from './post/post.component';
import { CitiesComponent } from './cities/cities.component';
import { BlankComponent } from './blank/blank.component';
import { BarComponent } from './bar/bar.component';
import { FriendsComponent } from './friends/friends.component';
import { PhotosComponent } from './photos/photos.component';
import { RatingComponent } from './rating/rating.component';
import { GiguComponent } from './gigu/gigu.component';
import { RbarComponent } from './rbar/rbar.component';
import { PartiesComponent } from './parties/parties.component';
import { KarmaComponent } from './karma/karma.component';
import { InfoComponent } from './info/info.component';
import { VoteComponent } from './vote/vote.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    PostComponent,
    CitiesComponent,
    BlankComponent,
    BarComponent,
    FriendsComponent,
    PhotosComponent,
    RatingComponent,
    GiguComponent,
    RbarComponent,
    PartiesComponent,
    KarmaComponent,
    InfoComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
