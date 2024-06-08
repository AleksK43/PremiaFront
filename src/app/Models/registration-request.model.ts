export interface RegistrationRequest {
    id: number;
    name: string;
    lastName: string;
    department: string;
    supervisorId: number;
    email: string;
    passwordHash: string;
  }