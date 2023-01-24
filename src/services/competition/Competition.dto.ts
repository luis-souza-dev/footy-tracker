import { CompetitionInput } from "../../models/Competition/Competition.interface";
import { TableItem } from "../../models/Table";

export interface CompetitionDTO {
    defaultCompetitions: CompetitionInput[]
}

export interface GamePlanDTO {
    seasonId: string;
    leagueId: string;
    currentPlayDayId: number;
}

export interface TableDTO {
    table: TableItem[]
}
