import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  artist: any;
  topFiveTracks: any;
  albums: any;
  constructor(public api: ApisService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getArtistDetail(id);
    this.getArtistTopTracks(id);
    this.getAllArtistAlbums(id);
  }

  getArtistDetail(id: number): any {
    this.api.getSingleArtist(id).subscribe((res: any) => {
      this.artist = res.body;
      console.log(this.artist);
    });
  }

  getArtistTopTracks(id: number): any {
    this.api.getArtistTopTracks(id).subscribe((res: any) => {
      this.topFiveTracks = res.body.data;
    });
  }

  getAllArtistAlbums(id: number): any {
    this.api.getArtistAlbums(id).subscribe((res: any) => {
      this.albums = res.body.data;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
