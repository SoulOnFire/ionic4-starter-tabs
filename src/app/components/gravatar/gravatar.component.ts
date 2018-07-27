import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gravatar',
  templateUrl: './gravatar.component.html',
  styleUrls: ['./gravatar.component.scss']
})
export class GravatarComponent {
  @Input() public email: string;
}
