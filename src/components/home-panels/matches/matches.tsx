import React from 'react';
import { Match } from '../../../models/Match';

interface MatchesComponent {
    data: Match[];
}

export function Matches({ data }: MatchesComponent) {
    
    return (
        <div className='flex flex-col gap-y-2'>
            {data.map((match) => (
                <div key={match.id} className='flex border border-[#e4e4eb] flex-wrap px-3 py-3 bg-white bg-opacity-[0.58] backdrop-blur-lg rounded drop-shadow-lg'>
                    <span className='flex basis-full justify-between items-center grow-1'>
                        <span className='flex items-center gap-x-1'>
                            <img src={match.homeClubImage} alt={match.homeClubName} className="h-8 w-8"/>
                            {match.homeClubName}
                        </span>
                        <span className='text-2xl font-normal self-center flex items-center'>
                            {match.result.split(':')[0]}
                        </span>
                    </span>
                    <span className='flex basis-full justify-between items-center  grow-1'>
                        <span className='flex items-center gap-x-1'>
                            <img src={match.awayClubImage} alt={match.awayClubName} className="h-8 w-8"/>
                             {match.awayClubName}
                        </span>
                        <span className='text-2xl font-normal self-center flex items-center'> 
                            {match.result.split(':')[1]}
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
}
