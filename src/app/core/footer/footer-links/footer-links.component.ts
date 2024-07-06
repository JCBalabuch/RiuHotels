import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LinkComponent } from '../../../shared/link/link.component';
import { LinksListComponent } from '../../../shared/links-list/links-list.component';
import { linksFooter } from '../../../../data/links';
import { Link } from '../../../../models/links.interface';

@Component({
  selector: 'app-footer-links',
  standalone: true,
  imports: [CommonModule, LinkComponent, LinksListComponent],
  templateUrl: './footer-links.component.html',
  styleUrl: './footer-links.component.scss'
})
export class FooterLinksComponent implements OnInit {
  linksFooter: { [key: string]: Link[] } = linksFooter;

  constructor() {}

  ngOnInit(): void {}
}

// SERVICIOS RIU
  [
    {
      "url": "https://www.riu.com/es/eliteclub-by-RIU.jsp",
      "label": "Elite Club"
    },
    {
      "url": "https://www.riu.com/riu-party",
      "label": "RIU PARTY"
    },
    {
      "url": "https://www.riu.com/es/riu-class/index.jsp",
      "label": "RIU Class"
    },
    {
      "url": "https://www.riu.com/riupro",
      "label": "RIU Pro"
    },
    {
      "url": "http://www.riupartnerclub.com/",
      "label": "RIU PartnerClub"
    },
    {
      "url": "https://www.riu-shop.de/",
      "label": "RIU Shop"
    },
    {
      "url": "https://riubrandcenter.com/",
      "label": "Profesionales"
    },
    {
      "url": "https://www.riu.com/es/animacion/index.jsp",
      "label": "Trabaja en animación"
    },
    {
      "url": "https://www.riu.com/es/ayuda/index.jsp",
      "label": "FAQ's"
    },
    {
      "url": "https://www.riu.com/es/forms/form_contactar.jsp",
      "label": "Contactar"
    },
]

// RESERVAS
// [
//   {
//     "url": "https://www.riu.com/",
//     "label": "Reserva tu hotel"
//   },
//   {
//     "url": "https://www.riu.com/es/posts/codigo-corporativo.jsp",
//     "label": "Código corporativo"
//   },
//   {
//     "url": "https://www.riu.com/es/weddings",
//     "label": "RIU Bodas"
//   },
//   {
//     "url": "https://www.riu.com/es/grupos/index.jsp",
//     "label": "Reuniones y Eventos"
//   },
// ]

// HOTELES Y DESTINOS
// [
//   {
//     "url": "https://www.riu.com/es/posts/hoteles/nuevos-hoteles-riu.jsp",
//     "label": "Nuevas Aperturas"
//   },
//   {
//     "url": "https://www.riu.com/es/posts/hoteles/restaurantes-tematicos.jsp",
//     "label": "Gastronomía"
//   },
//   {
//     "url": "https://www.riu.com/es/posts/hoteles/reuniones-riu-plaza.jsp",
//     "label": "Reuniones en ciudad"
//   },
//   {
//     "url": "https://www.riu.com/es/posts/hoteles/riuland-hoteles-para-ninos.jsp",
//     "label": "Animación para niños"
//   },
//   {
//     "url": "https://www.riu.com/es/posts/top-ranking/top-10-hoteles-con-spa.jsp",
//     "label": "RIU Wellness & Spa"
//   },
//   {
//     "url": "https://www.riu.com/es/posts/hoteles/hoteles-con-golf.jsp",
//     "label": "RIU Hoteles & Golf"
//   },
//   {
//     "url": "https://www.riu.com/es/posts/top-ranking/top-5-destinos-para-ciclismo.jsp",
//     "label": "RIU Hoteles & Ciclismo"
//   },
//   {
//     "url": "https://www.riu.com/es/hotel/usa/chicago/index.jsp",
//     "label": "NUEVO DESTINO: Chicago"
//   },
//   {
//     "url": "https://www.riu.com/es/hotel/senegal/pointe-sarene/index.jsp",
//     "label": "NUEVO DESTINO: Senegal"
//   },
//   {
//     "url": "https://www.riu.com/es/hotel/reino-unido/londres/index.jsp",
//     "label": "NUEVO DESTINO: London"
//   },
//   {
//     "url": "https://bit.ly/HotelRIUPlazaEspa%C3%B1a",
//     "label": "Experiencia inmersiva: Hotel Riu Plaza España"
//   },
// ]