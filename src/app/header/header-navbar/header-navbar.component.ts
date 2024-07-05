import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Link {
  url: string;
  label: string;
}

@Component({
  selector: 'app-header-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-navbar.component.html',
  styleUrl: './header-navbar.component.scss'
})

export class HeaderNavbarComponent {
  links: Link[] = [
    { url: 'https://www.riu.com/checkin-online', label: 'Check in'},
    { url: 'https://www.riu.com/es/hotel/panama/panama-city/hotel-riu-plaza-panama/', label: 'Mi reserva'}
  ]
}
