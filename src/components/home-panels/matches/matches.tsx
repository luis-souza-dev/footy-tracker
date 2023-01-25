import React from 'react';
import { Match } from '../../../models/Match';

interface MatchesComponent {
    data: Match[];
}

export function Matches({ data }: MatchesComponent) {
    return (
        <>
            {data.map((match) => (
                <div key={match.id} className='flex justify-between'>
                    <span className='basis-1/6'>
                        <img src={match.homeClubImage} alt={match.homeClubName} />
                        {match.homeClubName}
                    </span>
                    <span className=' text-3xl font-bold basis-1/6'>
                        {match.result.split(':')[0]}
                    </span>
                    <span className=' text-lg font-bold basis-1/6'> X </span>
                    <span className=' text-3xl font-bold basis-1/6'> 
                        {match.result.split(':')[1]}
                    </span>
                    <span className='basis-1/6'>
                        <img src={match.awayClubImage} alt={match.awayClubName} />
                        {match.awayClubName}
                    </span>
                </div>
            ))}
        </>
    );
}
