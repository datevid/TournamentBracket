import React from 'react';

interface MatchProps {
    team1: string;
    team2: string;
    score1: number;
    score2: number;
}

const Match: React.FC<MatchProps> = ({ team1, team2, score1, score2 }) => (
    <div className="flex flex-col w-48 h-14 border border-gray-600 my-1">
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
}

const Round: React.FC<RoundProps> = ({ title, matches }) => (
    <div className="flex flex-col mr-11">
        <h3 className="text-sm font-bold mb-2">{title}</h3>
        <div className="flex flex-col justify-around h-full">
            {matches.map((match, index) => (
                <div key={index} className="relative">
                    <Match {...match} />
                    {index < matches.length  && (
                        <div className="absolute top-3 left-48 w-5 h-10 border-r-2 border-t-2 border-b-2 border-gray-600" />
                    )}
                </div>
            ))}
        </div>
    </div>
);

interface RoundData {
    title: string;
    matches: MatchProps[];
}

const TournamentBracket: React.FC = () => {
    const rounds: RoundData[] = [
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
            <h2 className="text-xl font-bold mb-4">Group A</h2>
            <div className="flex">
                {rounds.map((round, index) => (
                    <Round key={index} {...round} />
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