import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { HeaderComponent } from './header/header.component';
import { ApisService } from './services/apis.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistDetailComponent,
    HeaderComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ApisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
