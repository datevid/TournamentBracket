import React, { useMemo } from 'react';

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

const generateConnections = (matches: MatchData[]): ConnectionProps[] => {
    const connections: ConnectionProps[] = [];
    const roundMatches: MatchData[][] = [];

    // Agrupar partidos por ronda
    matches.forEach(match => {
        if (!roundMatches[match.round]) {
            roundMatches[match.round] = [];
        }
        roundMatches[match.round].push(match);
    });

    // Generar conexiones entre rondas
    for (let round = 0; round < roundMatches.length - 1; round++) {
        const currentRound = roundMatches[round];
        const nextRound = roundMatches[round + 1];

        for (let i = 0; i < currentRound.length; i += 2) {
            const match1 = currentRound[i];
            const match2 = currentRound[i + 1];
            const nextMatch = nextRound[i / 2];

            if (match1 && match2 && nextMatch) {
                connections.push({
                    startX: match1.x + 192, // Ajustar basado en el ancho del partido
                    startY: match1.y + 32, // Centro del primer partido
                    endX: nextMatch.x,
                    endY: nextMatch.y + 32, // Centro del siguiente partido
                });
                connections.push({
                    startX: match2.x + 192, // Ajustar basado en el ancho del partido
                    startY: match2.y + 32, // Centro del segundo partido
                    endX: nextMatch.x,
                    endY: nextMatch.y + 32, // Centro del siguiente partido
                });
            }
        }
    }

    return connections;
};

const TournamentBracket: React.FC = () => {
    const matches: MatchData[] = [
        // Ronda 1 (Octavos de final)
        { round: 0, match: 0, team1: "Team 1", score1: 1, team2: "Team 2", score2: 2, x: 10, y: 20 },
        { round: 0, match: 1, team1: "Team 3", score1: 0, team2: "Team 4", score2: 2, x: 10, y: 90 },
        { round: 0, match: 2, team1: "Team 5", score1: 1, team2: "Team 6", score2: 2, x: 10, y: 160 },
        { round: 0, match: 3, team1: "Team 7", score1: 0, team2: "Team 8", score2: 2, x: 10, y: 230 },
        { round: 0, match: 4, team1: "Team 9", score1: 1, team2: "Team 10", score2: 2, x: 10, y: 300 },
        { round: 0, match: 5, team1: "Team 11", score1: 0, team2: "Team 12", score2: 2, x: 10, y: 370 },
        { round: 0, match: 6, team1: "Team 13", score1: 1, team2: "Team 14", score2: 2, x: 10, y: 440 },
        { round: 0, match: 7, team1: "Team 15", score1: 0, team2: "Team 16", score2: 2, x: 10, y: 510 },

        // Ronda 2 (Cuartos de final)
        { round: 1, match: 0, team1: "Team 2", score1: 1, team2: "Team 4", score2: 2, x: 270, y: 55 },
        { round: 1, match: 1, team1: "Team 6", score1: 0, team2: "Team 8", score2: 2, x: 270, y: 185 },
        { round: 1, match: 2, team1: "Team 10", score1: 1, team2: "Team 12", score2: 2, x: 270, y: 315 },
        { round: 1, match: 3, team1: "Team 14", score1: 0, team2: "Team 16", score2: 2, x: 270, y: 445 },

        // Ronda 3 (Semifinales)
        { round: 2, match: 0, team1: "Team 4", score1: 1, team2: "Team 8", score2: 2, x: 530, y: 120 },
        { round: 2, match: 1, team1: "Team 12", score1: 0, team2: "Team 16", score2: 2, x: 530, y: 350 },

        // Ronda 4 (Final)
        { round: 3, match: 0, team1: "Team 8", score1: 0, team2: "Team 16", score2: 2, x: 790, y: 235 },
    ];

    const connections = useMemo(() => generateConnections(matches), [matches]);

    return (
        <div className="relative w-[1000px] h-[600px] bg-gray-900 p-4">
            <h2 className="text-xl text-white mb-4 absolute top-2 left-4">Torneo de 16 Equipos</h2>
            {matches.map((match, index) => (
                <Match key={index} {...match} />
            ))}
            {connections.map((connection, index) => (
                <Connection key={index} {...connection} />
            ))}
            <div className="absolute" style={{left: 980, top: 195}}>
                <div className="text-white mb-2">Ganador</div>
                <div className="w-48 bg-gray-800 text-white p-2">Team 16</div>
            </div>
        </div>
    );
};

export default TournamentBracket;
