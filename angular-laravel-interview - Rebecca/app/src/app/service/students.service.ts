import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Student, UserPosts } from "./model/student";

@Injectable({ providedIn: 'root' })

export class StudentsService {
  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`https://jsonplaceholder.typicode.com/users/`);
  }

  getUserPosts(userId: string): Observable<UserPosts[]> {
    return this.httpClient.get<UserPosts[]>(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
  }

  // if this was real it would be like this
  // getSearchResults(searchInput: number): Observable<Student[]> {
  //   // return this.httpClient.get<Student[]>(`https://jsonplaceholder.typicode.com/users/?userid=${searchInput}`);
  // }

}
