import { Component, Input } from '@angular/core';
import { ProfileOptions } from '../types/profile-options';

@Component({
  selector: 'corebox-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() profileOptions?: ProfileOptions;
  @Input() showProfile: boolean = false;
  
  profileUpdateExists(): boolean {
      return (this.profileOptions?.profileLabel?.length ?? 0) > 0;
  }

  openMyProfile(): void {
    location.href = this.profileOptions?.profileUrl ?? '';
  }

  logout(): void {
    this.profileOptions?.lougoutEvent();
  }
}
