import React, { useEffect, useState } from 'react';
import './App.css';
import CompetitionService from './services/competition/Competition';
import axiosInstance from './services/axios';
import { Competition } from './models/Competition';
import TableService from './services/table/Table';
import { Table } from './models/Table';
import { Match } from './models/Match';
import MatchService from './services/matches/Match';

function App() {

  const competitionService = new CompetitionService(axiosInstance);
  const tableService = new TableService(axiosInstance);
  const matchService = new MatchService(axiosInstance);

  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [tables, setTables] = useState<Table[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    competitionService
      .getCompetitionsList()
      .then(data => setCompetitions(data))
  }, []);

  const loadCompetitionDetails = async (compID: string) => {
    const compTable = await tableService.getCompetitionTable(compID);
    setTables(compTable);
    const gameDay = await competitionService.getCompetitionGamePlan(compID);
    const gameDayMatches = await matchService.getGameDayMatches(compID, gameDay);
    setMatches(gameDayMatches);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        { competitions
          .map((competition) => (
              <div onClick={()=>loadCompetitionDetails(competition.id)}>
                <img src={competition.image} className="App-logo" alt="logo" />
                <p>
                  title={competition.title}
                </p>
                <p>
                  itle={competition.id}
                </p>
              </div>
          ))
        }
      </header>
      { tables.map((table) => (
        <>
          <p>
          <img src={table.clubImage} alt="logo" />
             {table.clubName }</p>
          <p> {table.points }</p>
          <p> {table.wins }</p>
          <p> {table.draw }</p>
          <p> {table.losses }</p>
          <p> {table.goals }</p>
          <p> {table.goalsConceded }</p>
          <p> {table.goalsDifference }</p>
        </>
      ))}

      {
        matches.map((match) => (
          <>
              <img src={match.homeClubImage} alt="logo" /> {match.homeClubName} {match.result.split(':')[0]}
              <br />
              <img src={match.awayClubImage} alt="as" /> {match.awayClubName} {match.result.split(':')[1]}
          </>
        ))
      }
    </div>
  );
}

export default App;
