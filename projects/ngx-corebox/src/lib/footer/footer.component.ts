import { Component, Input } from '@angular/core';

@Component({
  selector: 'corebox-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  @Input() companyName?: string;
  @Input() menuIsOpen: boolean = false;

  currentYear: number = (new Date()).getFullYear();

  useMenuClosedClass(): boolean {
    return this.menuIsOpen && window.innerWidth > 1280;
  }

  useMenuOpenedClass(): boolean {
    return this.menuIsOpen && window.innerWidth <= 1280;
  }

  fecharSubmenu = (): void => {
    if (window.innerWidth >= 1280) {
      let divSubmenu = document.getElementById('submenu');
      if (divSubmenu) {
        divSubmenu.style.display = 'none';
      }
    }
  }
}
