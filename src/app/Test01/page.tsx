"use client"

import React from 'react';

interface MatchProps {
    team1: string;
    team2: string;
    score1: number;
    score2: number;
    winner: 1 | 2;
}

const Match: React.FC<MatchProps> = ({ team1, team2, score1, score2, winner }) => (
    <div className="brkts-match brkts-match-popup-wrapper brkts-match-has-details">
        <div className={`brkts-opponent-entry brkts-opponent-hover ${winner === 1 ? 'brkts-opponent-win' : ''}`}>
            <div className="brkts-opponent-entry-left">
                <div className="block-team">
                    <span className="team-template-team-icon">{team1}</span>
                </div>
            </div>
            <div className="brkts-opponent-score-outer">
                <div className="brkts-opponent-score-inner">{score1}</div>
            </div>
        </div>
        <div className={`brkts-opponent-entry brkts-opponent-entry-last brkts-opponent-hover ${winner === 2 ? 'brkts-opponent-win' : ''}`}>
            <div className="brkts-opponent-entry-left">
                <div className="block-team">
                    <span className="team-template-team-icon">{team2}</span>
                </div>
            </div>
            <div className="brkts-opponent-score-outer">
                <div className="brkts-opponent-score-inner">{score2}</div>
            </div>
        </div>
    </div>
);

interface RoundProps {
    title: string;
    matches: MatchProps[];
}

const Round: React.FC<RoundProps> = ({ title, matches }) => (
    <div className="brkts-round-body" style={{"--skip-round": 0, "--qual-skip": 0} as React.CSSProperties}>
        <div className="brkts-round-header">
            <div className="brkts-header brkts-header-div">
                {title}
            </div>
        </div>
        <div className="brkts-round-center">
            {matches.map((match, index) => (
                <Match key={index} {...match} />
            ))}
        </div>
    </div>
);

const TournamentBracket: React.FC = () => {
    const rounds: RoundProps[] = [
        {
            title: "Upper Bracket Quarterfinals",
            matches: [
                { team1: "FaZe Clan", team2: "Sangal Esports", score1: 1, score2: 2, winner: 2 },
                { team1: "FlyQuest", team2: "Eternal Fire", score1: 0, score2: 2, winner: 2 },
                { team1: "HEROIC", team2: "Ninjas in Pyjamas", score1: 1, score2: 2, winner: 2 },
                { team1: "Lynn Vision Gaming", team2: "Natus Vincere", score1: 0, score2: 2, winner: 2 },
            ]
        },
        {
            title: "Upper Bracket Semifinals",
            matches: [
                { team1: "Sangal Esports", team2: "Eternal Fire", score1: 0, score2: 2, winner: 2 },
                { team1: "Ninjas in Pyjamas", team2: "Natus Vincere", score1: 0, score2: 2, winner: 2 },
            ]
        },
        {
            title: "Upper Bracket Final",
            matches: [
                { team1: "Eternal Fire", team2: "Natus Vincere", score1: 0, score2: 2, winner: 2 },
            ]
        },
    ];

    return (
        <div className="brkts-bracket">
            {rounds.map((round, index) => (
                <React.Fragment key={index}>
                    <Round {...round} />
                    {index < rounds.length - 1 && (
                        <div className="brkts-round-lower-connectors">
                            <div className="brkts-connector">
                                <div className="brkts-line" style={{height: "2px", width: "10px", left: 0, top: "31px"}}></div>
                                <div className="brkts-line" style={{height: "19px", width: "2px", top: "32px", left: "8px"}}></div>
                                <div className="brkts-line" style={{height: "2px", left: "8px", right: 0, top: "50px"}}></div>
                            </div>
                            <div className="brkts-connector">
                                <div className="brkts-line" style={{height: "2px", width: "10px", left: 0, top: "95px"}}></div>
                                <div className="brkts-line" style={{height: "19px", width: "2px", top: "77px", left: "8px"}}></div>
                                <div className="brkts-line" style={{height: "2px", left: "8px", right: 0, top: "76px"}}></div>
                            </div>
                        </div>
                    )}
                </React.Fragment>
            ))}
            <div className="brkts-round-qual">
                <div className="brkts-qualified">
                    <div className="brkts-opponent-entry brkts-opponent-entry-last brkts-opponent-hover">
                        <div className="brkts-opponent-entry-left">
                            <div className="block-team">
                                <span className="team-template-team-icon">Natus Vincere</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="brkts-qualified">
                    <div className="brkts-opponent-entry brkts-opponent-entry-last brkts-opponent-hover">
                        <div className="brkts-opponent-entry-left">
                            <div className="block-team">
                                <span className="team-template-team-icon">Eternal Fire</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = `
  .brkts-bracket {
    display: flex;
    background-color: #1e1e1e;
    color: white;
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  .brkts-round-body {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
  }
  .brkts-round-header {
    margin-bottom: 10px;
  }
  .brkts-header {
    font-weight: bold;
    font-size: 14px;
  }
  .brkts-match {
    width: 200px;
    border: 1px solid #444;
    margin-bottom: 10px;
  }
  .brkts-opponent-entry {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    height: 26px;
    align-items: center;
  }
  .brkts-opponent-win {
    background-color: #2a2a2a;
  }
  .brkts-opponent-score-outer {
    min-width: 20px;
    text-align: right;
  }
  .brkts-round-lower-connectors {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 20px;
  }
  .brkts-connector {
    position: relative;
    height: 100%;
  }
  .brkts-line {
    position: absolute;
    background-color: #444;
  }
  .brkts-qualified {
    width: 200px;
    border: 1px solid #444;
    padding: 5px;
    margin-bottom: 10px;
  }
  .brkts-round-qual {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const TournamentBracketWithStyles: React.FC = () => {
    return (
        <>
            <style>{styles}</style>
            <TournamentBracket />
        </>
    );
};

export default TournamentBracketWithStyles;