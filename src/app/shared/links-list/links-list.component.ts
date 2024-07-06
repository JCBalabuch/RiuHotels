import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Link } from '../../../models/links.interface';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-links-list',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  templateUrl: './links-list.component.html',
  styleUrl: './links-list.component.scss'
})
export class LinksListComponent {
  @Input() links: Link[] = [];
  
  constructor() {}
}
