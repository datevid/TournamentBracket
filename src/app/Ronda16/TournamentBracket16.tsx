import React from 'react';

interface MatchProps {
    team1: string;
    score1: number;
    team2: string;
    score2: number;
    x: number;
    y: number;
}

const Match: React.FC<MatchProps> = ({ team1, score1, team2, score2, x, y }) => (
    <div className="absolute" style={{ left: x, top: y }}>
        <div className="w-40 border border-gray-600 bg-gray-800 text-white text-sm">
            <div className={`flex justify-between items-center p-1 ${score1 > score2 ? 'bg-gray-700' : ''}`}>
                <span>{team1}</span>
                <span>{score1}</span>
            </div>
            <div className={`flex justify-between items-center p-1 ${score2 > score1 ? 'bg-gray-700' : ''}`}>
                <span>{team2}</span>
                <span>{score2}</span>
            </div>
        </div>
    </div>
);

interface ConnectionProps {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
}

const Connection: React.FC<ConnectionProps> = ({ startX, startY, endX, endY }) => (
    <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 0 }}>
        <path
            d={`M${startX} ${startY} H${(startX + endX) / 2} V${endY} H${endX}`}
            stroke="#60A5FA"
            strokeWidth="2"
            fill="none"
        />
    </svg>
);

interface MatchData extends MatchProps {
    round: number;
    match: number;
}

interface TournamentBracketProps {
    tournamentName: string;
    matches: MatchData[];
    connections: ConnectionProps[];
    winner: string;
}

const TournamentBracket: React.FC<TournamentBracketProps> = ({
                                                                 tournamentName,
                                                                 matches,
                                                                 connections,
                                                                 winner
                                                             }) => {
    return (
        <div className="relative w-[1200px] h-[680px] bg-gray-900 p-4">
            <h2 className="text-xl text-white mb-4 absolute top-2 left-4">{tournamentName}</h2>
            {matches.map((match, index) => (
                <Match key={index} {...match} />
            ))}
            {connections.map((connection, index) => (
                <Connection key={index} {...connection} />
            ))}
            <div className="absolute" style={{ right: 10, top: 320 }}>
                <div className="text-white mb-2">Winner</div>
                <div className="w-40 bg-gray-700 text-white p-2 mb-2">{winner}</div>
            </div>
        </div>
    );
};

export default TournamentBracket;