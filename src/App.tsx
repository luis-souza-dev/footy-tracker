import React, { useEffect, useState } from 'react';
import CompetitionService from './services/competition/Competition';
import axiosInstance from './services/axios';
import { Competition } from './models/Competition/Competition.interface';
import { TableItem } from './models/Table';
import { Match } from './models/Match';
import MatchService from './services/matches/Match';

function App() {
    const competitionService = new CompetitionService();
    const matchService = new MatchService(axiosInstance);

    const [competitions, setCompetitions] = useState<Competition[]>([]);
    const [tableItems, setTableItems] = useState<TableItem[]>([]);
    const [matches, setMatches] = useState<Match[]>([]);

    useEffect(() => {
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

    return (
        <div className='App'>
            <header className='App-header'>
                {competitions.map((competition) => (
                    <div onClick={() => loadCompetitionDetails(competition.id)} key={competition.id}>
                        <img src={competition.image} className='App-logo' alt='logo' />
                        <p>title={competition.title}</p>
                        <p>itle={competition.id}</p>
                    </div>
                ))}
            </header>
            {tableItems.map((tableItem) => (
                <>
                    <p>
                        <img src={tableItem.clubImage} alt='logo' />
                        {tableItem.clubName}
                    </p>
                    <p> {tableItem.points}</p>
                    <p> {tableItem.wins}</p>
                    <p> {tableItem.draw}</p>
                    <p> {tableItem.losses}</p>
                    <p> {tableItem.goals}</p>
                    <p> {tableItem.goalsConceded}</p>
                    <p> {tableItem.goalsDifference}</p>
                </>
            ))}

            {matches.map((match) => (
                <>
                    <img src={match.homeClubImage} alt='logo' /> {match.homeClubName}{' '}
                    {match.result.split(':')[0]}
                    <br />
                    <img src={match.awayClubImage} alt='as' /> {match.awayClubName}{' '}
                    {match.result.split(':')[1]}
                </>
            ))}
        </div>
    );
}

export default App;
