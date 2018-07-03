import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-case-content',
  templateUrl: './case_content.component.html',
  styleUrls: ['./case_content.component.scss']
})
export class CaseContentComponent {
  @Input()selectedCase: any;
  constructor() {
  }
}
