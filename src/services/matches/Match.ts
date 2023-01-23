import { AxiosInstance } from 'axios';
import { Match } from '../../models/Match';
import { MatchDTO } from './Match.dto';

export default class MatchService {
    axiosInstance: AxiosInstance;

    constructor(instance: AxiosInstance) {
        this.axiosInstance = instance;
    }

    async getGameDayMatches(competitionID: string, gameDay: number, season: number = new Date().getFullYear() - 1): Promise<Match[]> {
        const response = await this.axiosInstance.get<MatchDTO>('matches/list-by-game-plan', {
            params: {leagueID: competitionID, seasonID: season, dayID: gameDay}
        });
        return response.data.playDayMatches;
    }
}