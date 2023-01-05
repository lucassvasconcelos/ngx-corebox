import { Component, Input, OnInit } from '@angular/core';
import { AppItem } from '../types/app-item';

@Component({
  selector: 'corebox-avatar',
  templateUrl: './avatar.component.html'
})
export class AvatarComponent implements OnInit {
  @Input() sessionName?: string;
  @Input() pathToAvatarImage?: string;

  public iniciais?: string;

  ngOnInit(): void {
    if (this.pathToAvatarImage === undefined || this.pathToAvatarImage === '')
      this.iniciais = this.getFirstLettersOfEachName();
  }

  getFirstLettersOfEachName(): string | undefined {
    if (this.sessionName) {
      const nameUppercase = this.sessionName.toUpperCase();
      const nameArray = nameUppercase.split(' ');

      if (nameArray.length == 1)
        return `${this.validateLetter(nameArray[0][0])}`;
      else
        return `${this.validateLetter(nameArray[0][0])}${this.validateLetter(nameArray[(nameArray.length - 1)][0])}`;
    }
    return undefined;
  }

  validateLetter(letter: string): string {
    return letter === undefined ? '-' : letter;
  }
}
