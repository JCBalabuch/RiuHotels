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