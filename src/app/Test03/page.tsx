import React from 'react';

interface Match {
    team1: string;
    team2: string;
    score1: number;
    score2: number;
}

interface Round {
    name: string;
    matches: Match[];
}

const TournamentBracket: React.FC = () => {
    const rounds: Round[] = [
        {
            name: "Upper Bracket Quarterfinals",
            matches: [
                { team1: "Team Vitality", team2: "ATOX Esports", score1: 2, score2: 0 },
                { team1: "FURIA Esports", team2: "Team Falcons", score1: 2, score2: 1 },
                { team1: "Team Liquid", team2: "ENCE", score1: 2, score2: 0 },
                { team1: "RED Canids", team2: "Virtus.pro", score1: 0, score2: 2 },
            ]
        },
        {
            name: "Upper Bracket Semifinals",
            matches: [
                { team1: "Team Vitality", team2: "FURIA Esports", score1: 2, score2: 0 },
                { team1: "Team Liquid", team2: "Virtus.pro", score1: 2, score2: 0 },
            ]
        },
        {
            name: "Upper Bracket Final",
            matches: [
                { team1: "Team Vitality", team2: "Team Liquid", score1: 2, score2: 1 },
            ]
        },
        {
            name: "Qualified",
            matches: [
                { team1: "Team Vitality", team2: "", score1: 0, score2: 0 },
                { team1: "Team Liquid", team2: "", score1: 0, score2: 0 },
            ]
        }
    ];

    return (
        <div className="flex flex-col items-center bg-[#1E2124] text-white p-4">
            <h1 className="text-2xl font-bold mb-4">Tournament Bracket</h1>
            <div className="flex justify-between w-full relative">
                {rounds.map((round, roundIndex) => (
                    <div key={round.name} className="flex flex-col items-center">
                        <h2 className="text-lg font-semibold mb-2 text-gray-400">{round.name}</h2>
                        <div className="flex flex-col space-y-4">
                            {round.matches.map((match, matchIndex) => (
                                <div key={`${round.name}-${matchIndex}`} className="relative">
                                    <div className="bg-[#2F3136] rounded p-2 w-48">
                                        <div className={`flex justify-between ${match.score1 > match.score2 ? 'font-bold text-green-500' : ''}`}>
                                            <span>{match.team1}</span>
                                            <span>{match.score1}</span>
                                        </div>
                                        <div className={`flex justify-between ${match.score2 > match.score1 ? 'font-bold text-green-500' : ''}`}>
                                            <span>{match.team2}</span>
                                            <span>{match.score2}</span>
                                        </div>
                                    </div>
                                    {roundIndex < rounds.length - 1 && (
                                        <div className="absolute top-3 -right-8 w-8 h-8 border-r-2 border-t-2 border-b-2 border-[#4A4D53]" style={{
                                            borderTopRightRadius: matchIndex % 2 === 0 ? '0.5rem' : '0',
                                            borderBottomRightRadius: matchIndex % 2 === 1 ? '0.5rem' : '0',
                                            transform: `translateY(${matchIndex % 2 === 0 ? '-50%' : '50%'})`
                                        }} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TournamentBracket;