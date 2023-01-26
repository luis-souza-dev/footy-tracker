import React from 'react';
import { TableItem } from '../../../models/Table';

export interface TableComponent {
    data: TableItem[]
}

export default function Table ({ data }: TableComponent) {
  return (
    <div className='flex flex-col'>
      <div>
        table header
      </div>
      <div className='grow-1 flex flex-col'>
        {data.map((tableItem, index) => (
          <div key={tableItem.clubName} className="grid grid-cols-11 border border-[#e4e4eb] px-3 py-3 bg-white bg-opacity-[0.58] backdrop-blur-lg rounded drop-shadow-lg">
            <span>{index + 1}</span>
            <img src={tableItem.clubImage} alt={tableItem.clubName}/>
            <span>{tableItem.clubName}</span>
            <span>{tableItem.points}</span>
            <span>{tableItem.matches}</span>
            <span>{tableItem.wins}</span>
            <span>{tableItem.draw}</span>
            <span>{tableItem.losses}</span>
            <span>{tableItem.goals}</span>
            <span>{tableItem.goalsConceded}</span>
            <span>{tableItem.goalsDifference}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
