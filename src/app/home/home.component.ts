import { Component, OnInit } from '@angular/core';
import { runInThisContext } from 'vm';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // TODO: Make models for Artist, Albums
  searchText = '';
  artists: any;
  topArtist: any;
  constructor(public api: ApisService) { }

  ngOnInit(): void {
    this.getTopCharts();
  }

  searchApi(event: string): any {
    this.api.getArtistBySearch(event).subscribe((res: any) => {
      this.artists = res.body.data;
    });
  }

  getTopCharts(): any {
    this.api.getTopArtist().subscribe((res: any) => {
      this.topArtist = res.body.data;
    });
  }

}
