import React from 'react';
import { TableItem } from '../../../models/Table';

export interface TableComponent {
    data: TableItem[]
}

export default function Table ({ data }: TableComponent) {
  return (
    <>
      {data.map((tableItem, index) => (
        <div key={tableItem.clubName} className="flex">
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
    </>
  );
}
