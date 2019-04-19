import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Image } from '../../assets/image';
import { ImageService } from '../../assets/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

@Injectable()
export class GalleryComponent implements OnInit {
  display: boolean;
  images$: Observable<Image[]>;
  selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private service: ImageService
  ) {
    this.display = false;
  }

  ngOnInit() {
    this.images$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getImages();
      })
    );
  }

  iframeDisplay() {
    if (window.innerWidth >= 800) {
      this.display = true;
    } else {
      document.getElementById('imglink').setAttribute("target", "_self");
    }
  }
}
