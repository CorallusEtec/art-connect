import { Status } from "../response/Status";

export interface UsuarioAdminEditRequest {
  nome: string;
  email: string;
  status: Status;
}
