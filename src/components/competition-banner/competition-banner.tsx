import * as React from 'react';
import { Competition } from '../../models/Competition/Competition.interface';
import CompetitionItem from './competition-item';

interface CompetitionBannerProps {
    competitions: Competition[];
}

export default function CompetitionBanner({ competitions }: CompetitionBannerProps) {
    const className = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-[80%] mx-auto gap-2';
    return (
        <div className={className}>
            {competitions.map((competition) => (
                <CompetitionItem
                    id={competition.id}
                    image={competition.image}
                    title={competition.title}
                    key={competition.id}
                />
            ))}
        </div>
    );
}
