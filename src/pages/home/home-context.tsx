import { createContext } from 'react';
import { HomeContextInterface } from '../../shared';

export const INITIAL_STATE: HomeContextInterface = {
    selectedCompetition: '',
    competitionMatches: [],
    competitionTable: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setSelectedCompetition: () => {},
};
export const HomeContext = createContext<HomeContextInterface>(INITIAL_STATE);
