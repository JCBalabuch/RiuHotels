import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { HeaderHeroComponent } from './header-hero/header-hero.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderNavbarComponent, HeaderHeroComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
