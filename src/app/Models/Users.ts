export class Users{
    id: string | undefined; 
    name:string | undefined; 
    lastName :string | undefined; 
    email :string | undefined; 
    department :string | undefined;
    supervisorId :string | undefined;
    isDeleted: boolean | undefined;
    isSuperUser:boolean | undefined; 
    isSupervisor:boolean | undefined; 
    isNormalUser:boolean | undefined; 
}