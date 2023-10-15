import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StudentActions } from '../store';
import { selectStudentsPageViewModel, StudentsPageViewModel } from './students.selector';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  public vm$: Observable<StudentsPageViewModel> = this.store.select(selectStudentsPageViewModel);

  @ViewChild("searchInput",{static: true}) public searchInput: ElementRef<HTMLInputElement>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(StudentActions.studentsPageInit());
  }

  public retrieveUserPost(userId: string): void {
    this.store.dispatch(StudentActions.userClickedRetrieveUserPost({ userId }));
  }

  public removeUserPost(userId: string): void {
    this.store.dispatch(StudentActions.userClickedRemoveUserPost({ userId }));
  }

  public resetUsers(): void {
    this.store.dispatch(StudentActions.userClickedResetUsers());
  }

  public searchUsers(): void {
    const searchInput: number = parseInt(this.searchInput?.nativeElement?.value);
    if (searchInput) {
      this.store.dispatch(StudentActions.userClickedSearchUsers({ searchInput }));
    }
  }
}

