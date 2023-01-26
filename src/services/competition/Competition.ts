import { Competition } from '../../models/Competition/Competition.interface';
import { CompetitionDTO } from './Competition.dto';
import { CompetitionObject } from '../../models/Competition/CompetitionImpl';
import axiosInstance, { controller } from '../axios';

const COMPETITIONS = ['L1', 'GB1', 'ES1', 'IT1', 'FR1'];
export default class CompetitionService {
    
    public async getCompetitionsList(): Promise<Competition[]> {
        const response = await axiosInstance.get<CompetitionDTO>('competitions/list-default');
        return response
                .data
                .defaultCompetitions
                .filter((competition) => COMPETITIONS.includes(competition.id))
                .map((competition) => new CompetitionObject(competition));
    }
}
