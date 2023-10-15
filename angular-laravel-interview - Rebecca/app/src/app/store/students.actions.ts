import { Student, UserPosts } from './../service/model/student';
import { createAction, props } from "@ngrx/store";

export const studentsPageInit = createAction('[Student Page] Students Page Init');

export const getStudentsSuccess = createAction('[Student Page] Get students success', props<{ data: Student[] }>());

export const getStudentsFailure = createAction('[Student Page] Get students failure');

export const userClickedRetrieveUserPost = createAction('[Student Page] Get user posts', props<{ userId: string }>());

export const getUserPostsSuccess = createAction('[Student Page] Get user posts success', props<{ userId: string, data: UserPosts[] }>());

export const getUserPostsFailure = createAction('[Student Page] Get user posts failure');

export const userClickedRemoveUserPost = createAction('[Student Page] Remove user posts', props<{ userId: string }>());

export const userClickedSearchUsers = createAction('[Student Page] Get search results', props<{ searchInput: number }>());

export const getSearchResultsSuccess = createAction('[Student Page] Get search results success', props<{ data: Student[] }>());

export const userClickedResetUsers = createAction('[Student Page] Reset Users');

