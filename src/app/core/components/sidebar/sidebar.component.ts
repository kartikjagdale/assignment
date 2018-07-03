import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-sidedbar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() cases: any;
  @Input() questions: any;

  constructor() { }

}
