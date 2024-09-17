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
        <div className="w-48 border border-gray-600 bg-gray-800 text-white">
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
            strokeWidth="3"
            fill="none"
        />
    </svg>
);

interface MatchData extends MatchProps {
    round: number;
    match: number;
}

const TournamentBracket: React.FC = () => {
    const matches: MatchData[] = [
        // Round 2 (Cuartos de final)
        { round: 0, match: 0, team1: "FaZe Clan", score1: 1, team2: "Sangal Esports", score2: 2, x: 10, y: 40 },
        { round: 0, match: 1, team1: "FlyQuest", score1: 0, team2: "Eternal Fire", score2: 2, x: 10, y: 110 },
        { round: 0, match: 2, team1: "HEROIC", score1: 1, team2: "Ninjas in Pyjamas", score2: 2, x: 10, y: 180 },
        { round: 0, match: 3, team1: "Lynn Vision Gaming", score1: 0, team2: "Natus Vincere", score2: 2, x: 10, y: 250 },

        // Round 3 (Semifinales)
        { round: 1, match: 0, team1: "Sangal Esports", score1: 0, team2: "Eternal Fire", score2: 2, x: 270, y: 75 },
        { round: 1, match: 1, team1: "Ninjas in Pyjamas", score1: 0, team2: "Natus Vincere", score2: 2, x: 270, y: 215 },

        // Round 4 (Final)
        { round: 2, match: 0, team1: "Eternal Fire", score1: 0, team2: "Natus Vincere", score2: 2, x: 530, y: 145 },
    ];

    const connections: ConnectionProps[] = [
        { startX: 202, startY: 60, endX: 270, endY: 95 },
        { startX: 202, startY: 130, endX: 270, endY: 95 },
        { startX: 202, startY: 200, endX: 270, endY: 235 },
        { startX: 202, startY: 270, endX: 270, endY: 235 },
        { startX: 462, startY: 95, endX: 530, endY: 165 },
        { startX: 462, startY: 235, endX: 530, endY: 165 },
    ];

    return (
        <div className="relative w-[800px] h-[320px] bg-gray-900 p-4">
            <h2 className="text-xl text-white mb-4 absolute top-2 left-4">Group A</h2>
            {matches.map((match, index) => (
                <Match key={index} {...match} />
            ))}
            {connections.map((connection, index) => (
                <Connection key={index} {...connection} />
            ))}
            <div className="absolute" style={{left: 790, top: 95}}>
                <div className="text-white mb-2">Qualified</div>
                <div className="w-48 bg-gray-800 text-white p-2 mb-2">Natus Vincere</div>
                <div className="w-48 bg-gray-800 text-white p-2">Eternal Fire</div>
            </div>
        </div>
    );
};

export default TournamentBracket;