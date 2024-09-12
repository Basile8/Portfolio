import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    // Définit la langue par défaut à l'anglais
    this.translate.setDefaultLang('en');
  }

  SwitchLanguage(language: string) {
    this.translate.use(language);
  }
}
