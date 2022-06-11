export interface User {
  avatar_url: string;
  login: string;
  type: string;
}

export interface IUserResponse {
  items: Array<User>
  total_count: number;
}