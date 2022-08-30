import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private EduUrl='https://argentinaback.herokuapp.com';

  constructor(private http:HttpClient) { }

  public getEducation():Observable<Education[]>{
    return this.http.get<Education[]>(`${this.EduUrl}/educacion/all`);}
    
  public addEducation(education:Education):Observable<Education>{
    return this.http.post<Education>(`${this.EduUrl}/educacion/add`,education);}
  
  public updateEducation(education:Education):Observable<Education>{
    return this.http.put<Education>(`${this.EduUrl}/educacion/update`,education);}
  
  public deleteEducation(educationId: number):Observable<void>{
    return this.http.delete<void>(`${this.EduUrl}/educacion/delete/${educationId}`);}
}
