import { CompetitionInput } from "../../models/Competition";

export interface CompetitionDTO {
    defaultCompetitions: CompetitionInput[]
}

export interface GamePlanDTO {
    seasonId: string;
    leagueId: string;
    currentPlayDayId: number;
}
