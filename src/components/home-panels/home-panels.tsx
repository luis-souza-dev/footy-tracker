import React from 'react';
import { Match } from '../../models/Match';
import { TableItem } from '../../models/Table';
import { Matches } from './matches/matches';
import News from './news/news';
import Table from './table/table';

export type PanelType = 'news' | 'matches' | 'table';
export interface HomePanelComponent {
    type: PanelType,
    data: Match[] | TableItem[]
}

export function HomePanel ({ type, data }: HomePanelComponent) {

    let component;
    let additionalClass = '';
    switch (type) {
        case 'matches':
            component = <Matches data={data as Match[]} />;
            additionalClass = ' rounded';
        break;
        
        case 'table':
            component = <Table data={data as TableItem[]} />;
            additionalClass = ' rounded-tl';
        break;
        default:
            component = <News data={data as []} />;
            additionalClass = ' rounded-tr';

        break;
    }
  return (
    <div className={'max-h-[600px] bg-gray-200 w-[30%] overflow-scroll p-4' + additionalClass}>
      {component}
    </div>
  );
}
