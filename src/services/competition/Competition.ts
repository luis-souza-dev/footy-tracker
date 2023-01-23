import { AxiosInstance } from 'axios';
import { Competition, CompetitionBase } from '../../models/Competition';
import { CompetitionDTO, GamePlanDTO } from './Competition.dto';

const COMPETITIONS = ['L1', 'CL', 'GB1', 'ES1', 'IT1', 'FR1'];
export default class CompetitionService {
    axiosInstance: AxiosInstance;

    constructor(instance: AxiosInstance) {
        this.axiosInstance = instance;
    }

    async getCompetitionsList(): Promise<Competition[]> {
        const response = await this.axiosInstance.get<CompetitionDTO>('competitions/list-default');
        return response
                .data
                .defaultCompetitions
                .filter((competition) => COMPETITIONS.includes(competition.id))
                .map((competition) => new CompetitionBase(competition))
    }

    async getCompetitionGamePlan(competitionId: string, season: number = new Date().getFullYear() - 1){
        const response = await this.axiosInstance.get<GamePlanDTO>('competitions/get-game-plan', {
            params: {id: competitionId, seasonID: season}
        });
        return response.data.currentPlayDayId;
    }

    async getCompetitionTable(competitionId: string, season: number = new Date().getFullYear() - 1) {
        const response = await this.axiosInstance.get<GamePlanDTO>('competitions/get-table', {
            params: {id: competitionId, seasonID: season}
        });
        return response.data.currentPlayDayId;
    }
}