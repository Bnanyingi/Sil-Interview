import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Artist, BackendService } from 'src/app/services/backend/backend.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  artist: Observable<Artist> = this.backendService.getArtist( Number(this.route.snapshot.paramMap.get('id')) );

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService
  ) { }

  ngOnInit(): void {
  }

}
