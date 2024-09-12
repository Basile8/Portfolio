import { Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  constructor(private translationService: TranslationService) {}
  //Optionnel car méthode identique au service, mais dans l'idée on peut récupérer la fonction pour en faire ce qu'on veut dans ce component 
  SwitchLanguage(event: Event) {
    
    const target = event.target as HTMLSelectElement;
    this.translationService.SwitchLanguage(target.value);
  }
  
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (menu && icon) {
      menu.classList.toggle("open", this.menuOpen);
      icon.classList.toggle("open", this.menuOpen);
    }
  }
}
