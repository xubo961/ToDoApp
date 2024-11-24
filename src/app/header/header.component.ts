import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showNav: boolean = false;

  toggleNav() {
    this.showNav = !this.showNav;
  }

  constructor(
      private router: Router
  ) {}

  goLogin(): void {
    this.router.navigate(['']);
  }

  goGitHub(): void {
    this.router.navigate(['https://github.com/xubo961']);
  }
}
