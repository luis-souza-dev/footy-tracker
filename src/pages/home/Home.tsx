import * as React from 'react';
import { Competition } from '../../models/Competition/Competition.interface';
import { TableItem } from '../../models/Table';
import { Match } from '../../models/Match';
import axiosInstance from '../../services/axios';
import CompetitionService from '../../services/competition/Competition';
import MatchService from '../../services/matches/Match';

export default function Home() {
    const competitionService = new CompetitionService();
    const matchService = new MatchService(axiosInstance);

    const [competitions, setCompetitions] = React.useState<Competition[]>([]);
    const [tableItems, setTableItems] = React.useState<TableItem[]>([]);
    const [matches, setMatches] = React.useState<Match[]>([]);

    React.useEffect(() => {
        competitionService.getCompetitionsList().then((data) => setCompetitions(data));
    }, []);

    const loadCompetitionDetails = async (compID: string) => {
        const comp = competitions.find((competition) => competition.id === compID) as Competition;
        setTableItems(await comp.getTable());
        const gameDayMatches = await matchService.getGameDayMatches(
            compID,
            await comp.getGameDay(),
        );
        setMatches(gameDayMatches);
    };
    return <div></div>;
}
