import { createSelector } from '@ngrx/store';
import { Student } from '../service/model/student';
import * as fromStudent from '../store/index'

export type StudentsPageViewModel = {
  students: Student[];
  loadingUsers: boolean;
};

export const selectStudentsPageViewModel = createSelector(
  fromStudent.getStudents,
  fromStudent.getLoadingUsersState,
  (
    students: Student[],
    loadingUsers: boolean
  ): StudentsPageViewModel => {

    return {
      students: students,
      loadingUsers: loadingUsers
    };
  }
);
