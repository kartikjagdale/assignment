import { Injectable }  from '@angular/core';
import { Observable, of } from 'rxjs';
import { DUMMY_CASE_STUDIES } from './../dummy_data/dummy_case_studies';

@Injectable()
export class CaseStudyService {
    constructor() { }
  
  /**
    Gets Case Studies of a authenticated User;
    Note: For now using dummy data;
  **/  
  getUserCasteStudies(): Observable<any> {
    return of(DUMMY_CASE_STUDIES);
  }
}
