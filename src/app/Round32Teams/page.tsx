import React from 'react';

interface MatchProps {
    team1: string;
    team2: string;
    score1: number;
    score2: number;
}

const Match: React.FC<MatchProps> = ({ team1, team2, score1, score2 }) => (
    <div className="flex flex-col w-48 h-14 border border-gray-600 my-1 ">
        <div className="flex justify-between items-center h-1/2 px-2">
            <span className="text-sm truncate w-32">{team1}</span>
            <span className="text-sm font-bold">{score1}</span>
        </div>
        <div className="flex justify-between items-center h-1/2 px-2 bg-gray-800">
            <span className="text-sm truncate w-32">{team2}</span>
            <span className="text-sm font-bold">{score2}</span>
        </div>
    </div>
);

interface RoundProps {
    title: string;
    matches: MatchProps[];
    isLastRound?: boolean;
}

const Round: React.FC<RoundProps> = ({ title, matches, isLastRound = false }) => {
    const matchHeight = 64; // 14px * 4 (height of a match)
    const matchSpacing = 0; // Spacing between matches

    const getConnectionPath = (index: number, totalMatches: number) => {
        const startY = matchHeight / 2;
        let endY;

        if (totalMatches === 16) {
            endY = index % 2 === 0 ? startY + matchHeight / 2 + matchSpacing / 2 : startY - matchHeight / 2 - matchSpacing / 2;
        } else if (totalMatches === 8) {
            endY = index % 2 === 0 ? startY + matchHeight / 1 + matchSpacing / 2 : startY - matchHeight / 1 - matchSpacing / 2;
        } else if (totalMatches === 4) {
            endY = index % 2 === 0 ? startY + matchHeight / (1/2) + matchSpacing / 1 : startY - matchHeight / (1/2) - matchSpacing / 2;
        } else if (totalMatches === 2) {
            endY = index % 2 === 0 ? startY + matchHeight / (1/4) + matchSpacing / 1 : startY - matchHeight / (1/4) - matchSpacing / 2;
        } else {
            endY = startY;
        }

        return `M 0 ${startY} H 24 V ${endY} H 48`;
    };

    return (
        <div className="flex flex-col mr-11 relative">
            <h3 className="text-sm font-bold mb-2">{title}</h3>
            <div className="flex flex-col justify-around h-full">
                {matches.map((match, index) => (
                    <div key={index} className="relative" style={{ marginBottom: `${matchSpacing}px` }}>
                        <Match {...match} />
                        {!isLastRound && (
                            <svg className="absolute top-0 left-48 w-24 h-full" style={{ overflow: 'visible' }}>
                                <path
                                    d={getConnectionPath(index, matches.length)}
                                    fill="none"
                                    stroke="#FF0000"
                                    strokeWidth="4"
                                />
                            </svg>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

interface RoundData {
    title: string;
    matches: MatchProps[];
}

const TournamentBracket: React.FC = () => {
    const rounds: RoundData[] = [
        {
            title: "Round of 16",
            matches: [
                { team1: "Team 1", team2: "Team 2", score1: 0, score2: 0 },
                { team1: "Team 3", team2: "Team 4", score1: 0, score2: 0 },
                { team1: "Team 5", team2: "Team 6", score1: 0, score2: 0 },
                { team1: "Team 7", team2: "Team 8", score1: 0, score2: 0 },
                { team1: "Team 9", team2: "Team 10", score1: 0, score2: 0 },
                { team1: "Team 11", team2: "Team 12", score1: 0, score2: 0 },
                { team1: "Team 13", team2: "Team 14", score1: 0, score2: 0 },
                { team1: "Team 15", team2: "Team 16", score1: 0, score2: 0 },
                { team1: "Team 1", team2: "Team 2", score1: 0, score2: 0 },
                { team1: "Team 3", team2: "Team 4", score1: 0, score2: 0 },
                { team1: "Team 5", team2: "Team 6", score1: 0, score2: 0 },
                { team1: "Team 7", team2: "Team 8", score1: 0, score2: 0 },
                { team1: "Team 9", team2: "Team 10", score1: 0, score2: 0 },
                { team1: "Team 11", team2: "Team 12", score1: 0, score2: 0 },
                { team1: "Team 13", team2: "Team 14", score1: 0, score2: 0 },
                { team1: "Team 15", team2: "Team 16", score1: 0, score2: 0 },
            ]
        },
        {
            title: "Round of 16",
            matches: [
                { team1: "Team 1", team2: "Team 2", score1: 0, score2: 0 },
                { team1: "Team 3", team2: "Team 4", score1: 0, score2: 0 },
                { team1: "Team 5", team2: "Team 6", score1: 0, score2: 0 },
                { team1: "Team 7", team2: "Team 8", score1: 0, score2: 0 },
                { team1: "Team 9", team2: "Team 10", score1: 0, score2: 0 },
                { team1: "Team 11", team2: "Team 12", score1: 0, score2: 0 },
                { team1: "Team 13", team2: "Team 14", score1: 0, score2: 0 },
                { team1: "Team 15", team2: "Team 16", score1: 0, score2: 0 },
            ]
        },
        {
            title: "Upper Bracket Quarterfinals",
            matches: [
                { team1: "FaZe Clan", team2: "Sangal Esports", score1: 1, score2: 2 },
                { team1: "FlyQuest", team2: "Eternal Fire", score1: 0, score2: 2 },
                { team1: "HEROIC", team2: "Ninjas in Pyjamas", score1: 1, score2: 2 },
                { team1: "Lynn Vision Gaming", team2: "Natus Vincere", score1: 0, score2: 2 },
            ]
        },
        {
            title: "Upper Bracket Semifinals",
            matches: [
                { team1: "Sangal Esports", team2: "Eternal Fire", score1: 0, score2: 2 },
                { team1: "Ninjas in Pyjamas", team2: "Natus Vincere", score1: 0, score2: 2 },
            ]
        },
        {
            title: "Upper Bracket Final",
            matches: [
                { team1: "Eternal Fire", team2: "Natus Vincere", score1: 0, score2: 2 },
            ]
        },
    ];

    return (
        <div className="bg-gray-900 text-white p-4">
            <h2 className="text-xl font-bold mb-4">Tournament Bracket</h2>
            <div className="flex">
                {rounds.map((round, index) => (
                    <Round key={index} {...round} isLastRound={index === rounds.length - 1}/>
                ))}
                <div className="flex flex-col">
                    <h3 className="text-sm font-bold mb-2">Qualified</h3>
                    <div className="w-48 h-14 border border-gray-600 flex items-center px-2">
                        <span className="text-sm">Natus Vincere</span>
                    </div>
                    <div className="w-48 h-14 border border-gray-600 mt-1 flex items-center px-2">
                        <span className="text-sm">Eternal Fire</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TournamentBracket;