import { Match } from "../../models/Match";
import { TableItem } from "../../models/Table";

export interface HomeContextInterface {
    selectedCompetition: string;
    competitionMatches: Match[];
    competitionTable: TableItem[];
    setSelectedCompetition: (competitionId: string) => void
}