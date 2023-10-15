import { UserPosts } from './../service/model/student';
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StudentsService } from "../service/students.service";
import { catchError, map, Observable, of, switchMap } from "rxjs";
import { StudentActions } from ".";
import { Student } from "../service/model/student";

@Injectable()
export class StudentEffects {
  constructor(private actions$: Actions, private studentDataService: StudentsService) { }

  getStudents$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.studentsPageInit, StudentActions.userClickedResetUsers),
      switchMap(() => {
        return this.studentDataService.getStudents().pipe(
          map((response: Student[]) => {
            return StudentActions.getStudentsSuccess({ data: response });
          }),
          catchError(() => {
            return of(StudentActions.getStudentsFailure());
          })
        );
      })
    )
  );

  getUserPosts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.userClickedRetrieveUserPost),
      switchMap(action => {
        const userId = action.userId;
        return this.studentDataService.getUserPosts(userId).pipe(
          map((response: UserPosts[]) => {
            return StudentActions.getUserPostsSuccess({ userId: userId, data: response });
          }),
          catchError(() => {
            return of(StudentActions.getUserPostsFailure());
          })
        );
      })
    )
  );

  getSearchResults$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.userClickedSearchUsers),
      map(action => {
        // if real it would return like this
        // const searchInput = action.searchInput;
        //   return this.studentDataService.getSearchResults(searchInput).pipe(
        //     map((response: Student[]) => {
        //       return StudentActions.getSearchResultsSuccess({ data: response });
        //     }),
        //     catchError(() => {
        //       return of(StudentActions.getStudentsFailure());
        //     })
        //   );
        // })

        const fakeReturnObject: Student[] = [{
          id: '1',
          name: 'John Doe',
          username: 'johndoe',
          email: 'johndoe@example.com',
          address: {
            street: '123 Main St',
            suite: 'Apt 4B',
            city: 'Anytown',
            zipcode: '12345',
          },
          phone: '555-555-5555',
          website: 'www.johndoe.com',
          company: {
            name: 'ABC Inc',
            catchphrase: 'nothing',
            bs: 'Quality products',
          },
          posts: []
        }];

        return StudentActions.getSearchResultsSuccess({ data: fakeReturnObject });
      })
    )
  );
}
