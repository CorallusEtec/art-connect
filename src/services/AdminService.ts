import { useQuery } from '@/hooks/useQuery';
import {config} from './config';
import { RelatorioResponse } from '@/models/response/RelatorioResponse';



export class AdminService {
    static async getRelatorios() {
        
            const response = await fetch(`${config.apiURL}/admin/relatorio`, {
                headers: {"Content-Type": "application/json"},
                credentials: 'include'
                });

            return response

        
    }
}