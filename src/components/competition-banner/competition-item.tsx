import React, { useContext } from 'react';
import { Competition } from '../../models/Competition/Competition.interface';
import { HomeContext } from '../../pages/home/home-context';
import { Container } from '../layout/container';

type CompetitionItem = Pick<Competition, 'id' | 'image' | 'title'>;


export default function CompetitionItem({ id, image, title }: CompetitionItem) {
    const { selectedCompetition, setSelectedCompetition} = useContext(HomeContext);
    let dinamicClasses = '';
    let imageClass = 'group-hover:grayscale-0 transition-[filter] ease-in';

    if (selectedCompetition === id) {
        imageClass = 'grayscale-0';
        dinamicClasses = 'bg-gray-200 border-zinc-300 shadow';
    } else {
        imageClass += ' grayscale';
    }
    
    return (
        <Container appendClasses={dinamicClasses} onClick={() => setSelectedCompetition(id)}>
            <img src={image} alt={title} className={imageClass} />
        </Container>
    );
}
