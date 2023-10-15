import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentPageState } from './students.state';
import { featureKey } from './students.reducer';
import { Student } from '../service/model/student';

const selector = <T>(mapping: (state: StudentPageState) => T) => createSelector(selectStudentFeature, mapping);

export const selectStudentFeature = createFeatureSelector<StudentPageState>(featureKey);

export const getStudentState = selector((state: StudentPageState): StudentPageState => state);

export const getStudents = selector((state: StudentPageState): Student[] => state.students);

export const getLoadingUsersState = selector((state: StudentPageState): boolean => state.loadingUsers);
