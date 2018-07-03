import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-question-content',
  templateUrl: './question_content.component.html',
  styleUrls: ['./question_content.component.scss']
})
export class QuestionContentComponent {
  @Input() selectedQuestion: any;
  constructor() { }

}
