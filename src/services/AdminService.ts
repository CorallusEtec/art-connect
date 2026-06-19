import axios from 'axios';
import {config} from './config';
import { RelatorioResponse } from '@/models/response/RelatorioResponse';
import { useQuery } from '@tanstack/react-query';


export function useRelatorio() {
    const query = useQuery({
        queryFn: AdminService.getRelatorios,
        queryKey: ["relatorio"]
    });

    return query;
}


class AdminService {
    static async getRelatorios(): Promise<RelatorioResponse> {
        const response = await fetch("/api/dados");

        return await response.json()

    }
}