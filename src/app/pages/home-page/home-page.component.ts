import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist, BackendService } from 'src/app/services/backend/backend.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  artists: Observable<Artist[]> = this.backendService.getArtists();

  constructor(
    private backendService: BackendService
  ) { }

  ngOnInit(): void {
  }

  logout(){

  }

}
