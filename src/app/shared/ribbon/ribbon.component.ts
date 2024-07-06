import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LinksListComponent } from '../links-list/links-list.component';
import { LinkComponent } from '../link/link.component';
import { Link } from '../../../models/links.interface';

@Component({
  selector: 'app-ribbon',
  standalone: true,
  imports: [CommonModule, LinksListComponent, LinkComponent],
  templateUrl: './ribbon.component.html',
  styleUrl: './ribbon.component.scss'
})
export class RibbonComponent {
  links: Link[] = [
      {
        "url": "https://www.riu.com/es/hotel/panama/panama-city/hotel-riu-plaza-panama/#hotel-details",
        "label": "Detalles"
      },
      {
        "url": "https://www.riu.com/es/hotel/panama/panama-city/hotel-riu-plaza-panama/#tripadvisor",
        "label": "Opiniones"
      },
      {
        "url": "https://www.riu.com/es/hotel/panama/panama-city/hotel-riu-plaza-panama/#servicios",
        "label": "Servicios"
      },
      {
        "url": "https://www.riu.com/es/hotel/panama/panama-city/hotel-riu-plaza-panama/#reuniones-eventos",
        "label": "Reuniones y eventos"
      },
      {
        "url": "https://www.riu.com/es/hotel/panama/panama-city/hotel-riu-plaza-panama/#offers",
        "label": "Ofertas"
      },
      {
        "url": "https://www.riu.com/es/hotel/panama/panama-city/hotel-riu-plaza-panama/#mapa-hoteles",
        "label": "Mapa"
      }    
  ]
}
