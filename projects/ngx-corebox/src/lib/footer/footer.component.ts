import { Component, Input } from '@angular/core';

@Component({
  selector: 'corebox-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() companyName: string = 'companyName';
  currentYear: number = (new Date()).getFullYear();
}
