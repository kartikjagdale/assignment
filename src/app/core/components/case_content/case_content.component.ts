import { Input, Output, EventEmitter, Component,  } from '@angular/core';

@Component({
  selector: 'app-case-content',
  templateUrl: './case_content.component.html',
  styleUrls: ['./case_content.component.scss']
})
export class CaseContentComponent {
  @Input()selectedCase: any;
  @Input() selectedIndex: number;
  @Output() nextPrevClick = new EventEmitter<number>;
  constructor() {
  }

  // trigger on click of either next or prev
  onNavigateClick(index) {
    this.nextPrevClick.emit({ index: index, isQuestionSelected: false });
  }
}
