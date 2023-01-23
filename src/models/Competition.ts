export interface Competition {
    id: string;
    title: string;
    image: string;
}

export type CompetitionInput = Pick<Competition, 'id' | 'image' | 'title'>;

export class CompetitionBase implements Competition {
    id: string;

    title: string;

    image: string;

    constructor(
        { id, title, image }: CompetitionInput,
    ){
        this.id = id;
        this.title = title;
        this.image = image;
    }
}