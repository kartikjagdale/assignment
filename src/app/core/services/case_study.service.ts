import { Injectable }  from '@angular/core';
import { Observable, of } from 'rxjs';
import { DUMMY_CASE_STUDIES } from './../dummy_data/dummy_case_studies';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class CaseStudyService {
  baseUrl =  'https://simulationapi.ur-nl.com';
  constructor(private http: HttpClient) { }
  

  getAccessToken(): Observable<any> {
    const tokenRequest = new HttpParams()
      .set('grant_type', 'password')
      .set('scope', 'user')
      .set('client_id', 'e4206e1c793f5502c1098bcd8dd46844298a6f910859008090b79a01e89e5b77')
      .set('client_secret', '094943a54580324ad3398d3d9d44d8ba048212d75de8f8243e3ed5d99e0dffdc')
      .set('auth_token', 'tFPY1X83rxwrV4s3n57c');

    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    return this.http.post(`${this.baseUrl}/oauth/token.json`, tokenRequest.toString(), { headers: headers });
  }

  /**
    Gets Case Studies of a authenticated User;
    Note: For now using dummy data;
  **/ 
  getUserCasteStudies(): Observable<any> {
    const headers = this.getTokenHeader();
    const caseUrl = '/case_study/companies/5963213a88cd6b8b181c9e42/company_case_studies/59632b1c88cd6beb941c9e78/user_company_case_studies/596c50a088cd6b055141e186?include[company_case_study][include]=questions';
    return this.http.get(`${this.baseUrl + caseUrl}`, { headers: headers })
  }

  getTokenHeader(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    const authString = `Bearer ${token}`;
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded', 
      'Authorization': authString
    });
  }

}
