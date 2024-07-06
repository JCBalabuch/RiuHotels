import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Image {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})

export class GalleryComponent {
  images: Image[] = [
    {src: '/images/bar-lobby-riu-plaza-panama.webp', alt: 'Lobby Riu Plaza Panamá'},
    {src: '/images/Hotel-Riu-Plaza-Panama-Exterior.webp', alt: 'Exterior Riu Plaza Panamá'},
    {src: '/images/Meetings-Panamá.webp', alt: 'Sala de reuniones Riu Plaza Panamá'},
    {src: '/images/restaurante-restaurant.webp', alt: 'Restaurante Riu Plaza Panamá'},
    {src: '/images/Salones-Panamá.webp', alt: 'Salones Riu Plaza Panamá'},
    {src: '/images/room-deluxe-riu-plaza-panama.webp', alt: 'Habitaciones Riu Plaza Panamá'}
  ]

}
