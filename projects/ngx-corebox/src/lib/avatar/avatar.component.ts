import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'corebox-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() sessionName?: string;
  @Input() pathToAvatarImage?: string;
  @Input() size: string = 'sm';

  public letters?: string;

  ngOnInit(): void {
    if (this.pathToAvatarImage === undefined || this.pathToAvatarImage === '')
      this.letters = this.getFirstLetterOfEachName();
  }

  getFirstLetterOfEachName(): string | undefined {
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
