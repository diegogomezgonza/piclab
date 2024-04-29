import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private selectedImageSource = new BehaviorSubject<string | ArrayBuffer>('');
  selectedImage$ = this.selectedImageSource.asObservable();

  private selectedFilterSource = new BehaviorSubject<string>('');
  selectedFilter$ = this.selectedFilterSource.asObservable();

  updateSelectedImage(image: string | ArrayBuffer) {
    this.selectedImageSource.next(image);
  }

  updateSelectedFilter(filter: string) {
    this.selectedFilterSource.next(filter);
  }
}
