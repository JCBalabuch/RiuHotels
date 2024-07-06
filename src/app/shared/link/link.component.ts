import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Link } from '../../../models/links.interface';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
 @Input() link: Link = {url:'', label:''};

 constructor() {}
}
