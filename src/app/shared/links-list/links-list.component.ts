import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Link } from '../../../models/links.interface';
import { LinkComponent } from '../link/link.component';

interface LinkListClasses {
  'ribbon-links': boolean;
  'footer-links': boolean;
}
@Component({
  selector: 'app-links-list',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  templateUrl: './links-list.component.html',
  styleUrl: './links-list.component.scss'
})
export class LinksListComponent {
  @Input() links: Link[] = [];
  @Input() componentName?: string;

  getClasess(): LinkListClasses {
    return {
      'ribbon-links': this.componentName === 'ribbon',
      'footer-links': this.componentName === 'footer-links'
    }
  }
  
  constructor() {}
}
