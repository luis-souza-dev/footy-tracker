import { AxiosInstance } from 'axios';
import { Table } from '../../models/Table';
import { TableDTO } from './Table.dto';

export default class TableService {
    axiosInstance: AxiosInstance;

    constructor(instance: AxiosInstance) {
        this.axiosInstance = instance;
    }

    async getCompetitionTable(competitionID: string, season: number = new Date().getFullYear() - 1): Promise<Table[]> {
        const response = await this.axiosInstance.get<TableDTO>('competitions/get-table', {
            params: {id: competitionID, seasonID: season}
        });
        return response.data.table;
    }
}