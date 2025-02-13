
export interface IUserService {
  getAllUsers(): Promise<any[]>;
  updateUserAdminRole(uid: string, isAdmin: boolean):Promise<any>;
  setUserRoles(uid: string, data: { email: string; roles: { admin: boolean } }):Promise<void>
}
