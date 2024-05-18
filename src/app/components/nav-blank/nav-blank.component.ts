import { Component, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css'],
})
export class NavBlankComponent {
  constructor(
    private _AuthService: AuthService,
    private _Renderer2: Renderer2
  ) {}

  sign() {
    this._AuthService.logout();
  }

  closeBtn(
    navBar: HTMLElement,
    btnTow: HTMLElement,
    btnThree: HTMLElement
  ): void {
    navBar.classList.toggle('active');
    btnTow.classList.toggle('d-none');
    btnThree.classList.toggle('d-none');
  }
  
}
