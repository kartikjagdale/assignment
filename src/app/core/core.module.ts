// Ngx Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './../shared/shared.module';

// Services
import { CaseStudyService } from './services/case_study.service'; 

// Containers 
import { AppComponent } from './containers/app/app.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CaseContentComponent } from './components/case_content/case_content.component';
import { QuestionContentComponent } from './components/question_content/question_content.component';

export const COMPONENTS = [
  AppComponent,
  HeaderComponent,
  SidebarComponent,
  CaseContentComponent,
  QuestionContentComponent
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [
    CaseStudyService
  ]
})
export class CoreModule { }
