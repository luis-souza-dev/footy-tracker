import { Competition, CompetitionInput } from "./Competition.interface";
import { TableItem } from "../Table";
import axiosInstance, { controller } from "../../services/axios";
import { GamePlanDTO, TableDTO } from "../../services/competition/Competition.dto";

export class CompetitionObject implements Competition {
    public id: string;

    public title: string;

    public image: string;

    public gameDay = 0;

    public currentSeason = new Date().getFullYear() - 1;

    constructor({ id, title, image }: CompetitionInput){
        this.id = id;
        this.title = title;
        this.image = image;
    }

    public async getGameDay(){
        const response = await axiosInstance.get<GamePlanDTO>('competitions/get-game-plan', {
            params: {id: this.id, seasonID: this.currentSeason}
        });
        return response.data.currentPlayDayId;
    }

    public async getTable(): Promise<TableItem[]> {
        const response = await axiosInstance.get<TableDTO>('competitions/get-table', {
            params: {id: this.id, seasonID: this.currentSeason}
        });
        return response.data.table;
    }

}