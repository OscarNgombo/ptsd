export interface Service {
  id: number;
  name: string;
  description: string;
  access: boolean;
  user: number;
}

export interface User {
  id: number;
  username: string;
  email: string;
  is_staff: boolean;
  services: Service[];
}

export interface ResponseData {
  user: User;
}
