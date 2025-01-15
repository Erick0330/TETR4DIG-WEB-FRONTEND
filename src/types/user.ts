export interface User {
  id: number;
  name: string;
  email: string;
  rol: string;
}

export interface createUserDto {

  name: string;
  password: string;
  email: string;
  rol: string;
}

export interface updateUserDto {
  name: string;
  email: string;
  rol: string;
}
