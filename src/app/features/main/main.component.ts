import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GalleryComponent } from '../../shared/gallery/gallery.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, GalleryComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
