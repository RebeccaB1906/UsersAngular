import { Action, ActionReducer, createReducer, on } from "@ngrx/store";
import { StudentPageState } from "./students.state";
import { initialState } from "./students.state.initial";
import * as Actions from './students.actions'

export const featureKey: 'proj.students' = 'proj.students';

const studentReducer: ActionReducer<StudentPageState> = createReducer<StudentPageState>(
  initialState,

  on(Actions.studentsPageInit, () => {
    return initialState;
  }),

  on(Actions.getStudentsSuccess, Actions.getSearchResultsSuccess, (state: StudentPageState, { data }) => {
    return {
      ...state,
      students: data,
      loadingUsers: false
    }
  }),

  on(Actions.getStudentsFailure, (state: StudentPageState) => {
    return {
      ...state,
      loadingUsers: false
    }
  }),

  on(Actions.getUserPostsSuccess, (state: StudentPageState, { userId, data }) => {
    return {
      ...state,
      students: state.students.map((student) => {
        if (student.id === userId) {
          return {
            ...student,
            posts: data
          }
        } else {
          return student
        }
      })
    }
  }),

  on(Actions.userClickedRemoveUserPost, (state: StudentPageState, { userId }) => {
    return {
      ...state,
      students: state.students.map((student) => {
        if (student.id === userId) {
          return {
            ...student,
            posts: []
          }
        } else {
          return student
        }
      })
    }
  }),

  on(Actions.userClickedSearchUsers, Actions.userClickedResetUsers, (state: StudentPageState) => {
    return {
      ...state,
      loadingUsers: true
    }
  })
)

export function reducer(state: StudentPageState, action: Action): StudentPageState {
  return studentReducer(state, action);
}
