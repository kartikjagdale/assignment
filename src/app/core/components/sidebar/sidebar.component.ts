import { Input, Output, EventEmitter, Component } from '@angular/core';

@Component({
  selector: 'app-sidedbar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() cases: any;
  @Input() questions: any;
  @Output() categoryClick = new EventEmitter<any>();
  constructor() { }

  onQuestionClicked(index=0){
    this.categoryClick.emit({ index: index, isQuestionSelected: true });
  }

  onCasesClicked() {
    this.categoryClick.emit({ index: 0, isQuestionSelected: false });
  }
}
