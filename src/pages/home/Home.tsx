import React, { useState } from 'react';
import { Competition } from '../../models/Competition/Competition.interface';
import CompetitionService from '../../services/competition/Competition';
import MatchService from '../../services/matches/Match';
import CompetitionBanner from '../../components/competition-banner/competition-banner';
import { HomeContext, INITIAL_STATE } from './home-context';
import { HomeContextInterface } from '../../shared';
import { HomePanel } from '../../components/home-panels/home-panels';
import { controller } from '../../services/axios';

export default function Home() {

    const [state, setState] = useState<HomeContextInterface>(INITIAL_STATE);

    const competitionService = new CompetitionService();
    const matchService = new MatchService();

    const [competitions, setCompetitions] = useState<Competition[]>([]);

    React.useEffect(() => {
        competitionService.getCompetitionsList().then((data) => setCompetitions(data));
    }, []);

    React.useEffect(() => {
        if (state.selectedCompetition !== '') loadCompetitionDetails(state.selectedCompetition);
    }, [state.selectedCompetition]);

    const setSelectedCompetition = (selectedCompetition: string) => {
        setState((currentState) => ({ ...currentState, selectedCompetition }));
    };

    const loadCompetitionDetails = async (compID: string) => {
        
        const comp = competitions.find((competition) => competition.id === compID) as Competition;
        try {
            const competitionTable = await comp.getTable();
            const competitionMatches = await matchService.getGameDayMatches(
                compID,
                await comp.getGameDay(),
            );
            setState((currentState) => ({ ...currentState, competitionTable, competitionMatches }));
        } catch(e) {
            console.log(e);
        }

    };
    return (
        <HomeContext.Provider value={{ ...state, setSelectedCompetition }}>
            <section className='min-h-full flex flex-col gap-y-20'>
                <CompetitionBanner competitions={competitions}/>
                <div className='grow-1 h-[570px] flex justify-between'>
                    <HomePanel type='news' data={[]} />
                    <HomePanel type='matches' data={state.competitionMatches} />
                    <HomePanel type='table' data={state.competitionTable} />
                </div>
            </section>
        </HomeContext.Provider>
    );
}
