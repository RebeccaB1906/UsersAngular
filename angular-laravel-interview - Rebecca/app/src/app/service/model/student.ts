export interface Student {
  id: string;
  name: string;
  username: string;
  email: string;
  address: StudentAddress;
  phone: string;
  website: string;
  company: StudentCompany;
  posts: UserPosts[];
}

export interface StudentAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface StudentCompany {
  name: string;
  catchphrase: string;
  bs: string;
}

export interface UserPosts {
  userId: string;
  id: number;
  title: string;
  body: string;
}
