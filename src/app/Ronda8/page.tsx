import React from 'react';
import TournamentBracket from './TournamentBracket';

const App: React.FC = () => {
    const groupAData = {
        groupName: "Group A",
        matches: [
            // Round 1 (Octavos de final)
            { round: 0, match: 0, team1: "FaZe Clan", score1: 1, team2: "Sangal Esports", score2: 2, x: 10, y: 40 },
            { round: 0, match: 1, team1: "FlyQuest", score1: 0, team2: "Eternal Fire", score2: 2, x: 10, y: 110 },
            { round: 0, match: 2, team1: "HEROIC", score1: 1, team2: "Ninjas in Pyjamas", score2: 2, x: 10, y: 180 },
            { round: 0, match: 3, team1: "Lynn Vision Gaming", score1: 0, team2: "Natus Vincere", score2: 2, x: 10, y: 250 },

            // Round 2 (Cuartos de final)
            { round: 1, match: 0, team1: "Sangal Esports", score1: 0, team2: "Eternal Fire", score2: 2, x: 270, y: 75 },
            { round: 1, match: 1, team1: "Ninjas in Pyjamas", score1: 0, team2: "Natus Vincere", score2: 2, x: 270, y: 215 },

            // Round 3 (Semifinales)
            { round: 2, match: 0, team1: "Eternal Fire", score1: 0, team2: "Natus Vincere", score2: 2, x: 530, y: 145 },
        ],
        connections: [
            { startX: 202, startY: 60, endX: 270, endY: 95 },
            { startX: 202, startY: 130, endX: 270, endY: 95 },
            { startX: 202, startY: 200, endX: 270, endY: 235 },
            { startX: 202, startY: 270, endX: 270, endY: 235 },
            { startX: 462, startY: 95, endX: 530, endY: 165 },
            { startX: 462, startY: 235, endX: 530, endY: 165 },
        ],
        qualifiedTeams: ["Natus Vincere", "Eternal Fire"]
    };

    return (
        <div>
            <TournamentBracket {...groupAData} />
        </div>
    );
};

export default App;