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
            additionalClass = 'basis-2/6';
        break;
        
        case 'table':
            component = <Table data={data as TableItem[]} />;
            additionalClass = 'basis-2/5';
        break;
        default:
            component = <News data={data as []} />;
            additionalClass = 'basis-1/3';

        break;
    }
  return (
    <div className={'p-4 ' + additionalClass}>
      <div className='scrollbar-none scrollbar'>
        {component}
      </div>
    </div>
  );
}
