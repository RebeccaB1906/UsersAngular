import { Student } from "../service/model/student";

export interface StudentPageState {
  students: Student[];
  loadingUsers: boolean;
}
