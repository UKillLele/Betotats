import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Image } from './image';
import { IMAGES } from './images';

@Injectable({
  providedIn: 'root',
})
export class ImageService {

  constructor() { }

  getImages(): Observable<Image[]> {
    return of(IMAGES);
  }

  getImage(id: number | string) {
    return this.getImages().pipe(
      // (+) before `id` turns the string into a number
      map((images: Image[]) => images.find(images => images.id === +id))
    );
  }
}
