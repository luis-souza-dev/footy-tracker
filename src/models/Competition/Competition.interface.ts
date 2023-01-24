import { TableItem } from "../Table";

export interface Competition {
    id: string;
    title: string;
    image: string;
    currentSeason: number;
    gameDay: number;
    getGameDay: () => Promise<number>;
    getTable: () => Promise<TableItem[]>;
}

export type CompetitionInput = Pick<Competition, 'id' | 'image' | 'title'>;
