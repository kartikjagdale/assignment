import { Input, Output, EventEmitter, Component,  } from '@angular/core';

@Component({
  selector: 'app-question-content',
  templateUrl: './question_content.component.html',
  styleUrls: ['./question_content.component.scss']
})
export class QuestionContentComponent {
  @Input() selectedQuestion: any;
  @Input() selectedIndex: number;
  @Output() nextPrevClick = new EventEmitter<any>();
  constructor() { }

  // trigger on click of either next or prev
  onNavigateClick(index) {
    this.nextPrevClick.emit({ index: index, isQuestionSelected: true });
  }
}
