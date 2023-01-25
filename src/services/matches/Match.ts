import axiosInstance, { controller } from '../axios';
import { Match } from '../../models/Match';
import { MatchDTO } from './Match.dto';

export default class MatchService {

    async getGameDayMatches(competitionID: string, gameDay: number, season: number = new Date().getFullYear() - 1): Promise<Match[]> {
        const response = await axiosInstance.get<MatchDTO>('matches/list-by-game-plan', {
            params: {leagueID: competitionID, seasonID: season, dayID: gameDay}
        });
        return response.data.playDayMatches;
    }
}