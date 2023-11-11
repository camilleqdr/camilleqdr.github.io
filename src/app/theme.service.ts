import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: string = 'day';

  isNightTheme() {
    this.setTheme(this.currentTheme);
    return this.currentTheme === 'night';
  }

  getBackgroundColor() {
    return this.currentTheme === 'day' ? '#fff' : '#000';
  }

  setTheme(theme: string) {
    console.log(theme);
    document.documentElement.style.setProperty('--background-color', theme === 'night' ? '#000' : '#000');
    document.documentElement.style.setProperty('--text-color', theme === 'night' ? '#fff' : '#000');
  }

  // Dans le service de gestion du thème
detectUserPreference() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    this.currentTheme = 'night';
    document.documentElement.style.setProperty('--background-color', this.getBackgroundColor());
  }
}

}
