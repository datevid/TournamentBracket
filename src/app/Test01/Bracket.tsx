import React from 'react';
import styled from 'styled-components';

const BracketWrapper = styled.div`
  .brkts-bracket {
    display: inline-flex;
    flex-direction: column;
    font-size: 13px;
    padding: 2px;
    position: relative;
  }

  .brkts-round-header {
    display: flex;
  }

  .brkts-round-body {
    display: inline-flex;
    align-items: flex-start;
  }

  .brkts-round-center {
    width: var(--match-width);
  }

  .brkts-match {
    background-color: var(--brackets-background-color, #f2f2f2);
    border-radius: 2px;
    border: 1px solid var(--brackets-border-color, #aaaaaa);
    position: relative;
    color: var(--clr-on-background);
  }

  .brkts-opponent-entry {
    align-items: stretch;
    border-bottom: 1px solid var(--brackets-border-color, #aaaaaa);
    border-top: 1px solid var(--brackets-border-color, #aaaaaa);
    display: flex;
    font-size: 11px;
    line-height: 1.55;
    position: relative;
  }

  .brkts-opponent-entry-left {
    align-items: center;
    display: flex;
    flex: 1 1;
    min-width: 0;
  }

  .brkts-opponent-score-outer {
    align-items: center;
    background-color: var(--brackets-score-background-color, #ebebeb);
    border-left: 1px solid var(--brackets-border-color, #aaaaaa);
    display: flex;
    width: var(--score-width);
  }

  .brkts-opponent-score-inner {
    flex: 1 1;
    text-align: center;
  }
`;

interface MatchProps {
    team1: string;
    team2: string;
    score1: number;
    score2: number;
}

const Match: React.FC<MatchProps> = ({ team1, team2, score1, score2 }) => (
    <div className="brkts-match">
        <div className="brkts-opponent-entry">
            <div className="brkts-opponent-entry-left">{team1}</div>
            <div className="brkts-opponent-score-outer">
                <div className="brkts-opponent-score-inner">{score1}</div>
            </div>
        </div>
        <div className="brkts-opponent-entry">
            <div className="brkts-opponent-entry-left">{team2}</div>
            <div className="brkts-opponent-score-outer">
                <div className="brkts-opponent-score-inner">{score2}</div>
            </div>
        </div>
    </div>
);

interface BracketProps {
    matches: MatchProps[];
}

const Bracket: React.FC<BracketProps> = ({ matches }) => (
    <BracketWrapper>
        <div className="brkts-bracket">
            <div className="brkts-round-header">
                {/* Add round headers here if needed */}
            </div>
            <div className="brkts-round-body">
                <div className="brkts-round-center">
                    {matches.map((match, index) => (
                        <Match key={index} {...match} />
                    ))}
                </div>
            </div>
        </div>
    </BracketWrapper>
);

export default Bracket;