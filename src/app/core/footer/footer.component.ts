import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterLinksComponent } from './footer-links/footer-links.component';
import { FooterRrssComponent } from './footer-rrss/footer-rrss.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FooterLinksComponent, FooterRrssComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
