import React from 'react';
import TournamentBracket from './TournamentBracket16';

const App: React.FC = () => {
    const tournamentData = {
        tournamentName: "16-Team Tournament",
        matches: [
            // Round 1 (Octavos de final)
            { round: 0, match: 0, team1: "Team 1", score1: 2, team2: "Team 2", score2: 1, x: 10, y: 20 },
            { round: 0, match: 1, team1: "Team 3", score1: 0, team2: "Team 4", score2: 2, x: 10, y: 100 },
            { round: 0, match: 2, team1: "Team 5", score1: 1, team2: "Team 6", score2: 2, x: 10, y: 180 },
            { round: 0, match: 3, team1: "Team 7", score1: 2, team2: "Team 8", score2: 0, x: 10, y: 260 },
            { round: 0, match: 4, team1: "Team 9", score1: 2, team2: "Team 10", score2: 1, x: 10, y: 340 },
            { round: 0, match: 5, team1: "Team 11", score1: 1, team2: "Team 12", score2: 2, x: 10, y: 420 },
            { round: 0, match: 6, team1: "Team 13", score1: 0, team2: "Team 14", score2: 2, x: 10, y: 500 },
            { round: 0, match: 7, team1: "Team 15", score1: 2, team2: "Team 16", score2: 1, x: 10, y: 580 },

            // Round 2 (Cuartos de final)
            { round: 1, match: 0, team1: "Team 1", score1: 1, team2: "Team 4", score2: 2, x: 200, y: 60 },
            { round: 1, match: 1, team1: "Team 6", score1: 0, team2: "Team 7", score2: 2, x: 200, y: 220 },
            { round: 1, match: 2, team1: "Team 9", score1: 2, team2: "Team 12", score2: 1, x: 200, y: 380 },
            { round: 1, match: 3, team1: "Team 14", score1: 1, team2: "Team 15", score2: 2, x: 200, y: 540 },

            // Round 3 (Semifinales)
            { round: 2, match: 0, team1: "Team 4", score1: 2, team2: "Team 7", score2: 1, x: 390, y: 140 },
            { round: 2, match: 1, team1: "Team 9", score1: 0, team2: "Team 15", score2: 2, x: 390, y: 460 },

            // Round 4 (Final)
            { round: 3, match: 0, team1: "Team 4", score1: 2, team2: "Team 15", score2: 1, x: 580, y: 300 },
        ],
        connections: [
            // Round 1 to Round 2
            { startX: 160, startY: 40, endX: 200, endY: 80 },
            { startX: 160, startY: 120, endX: 200, endY: 80 },
            { startX: 160, startY: 200, endX: 200, endY: 240 },
            { startX: 160, startY: 280, endX: 200, endY: 240 },
            { startX: 160, startY: 360, endX: 200, endY: 400 },
            { startX: 160, startY: 440, endX: 200, endY: 400 },
            { startX: 160, startY: 520, endX: 200, endY: 560 },
            { startX: 160, startY: 600, endX: 200, endY: 560 },

            // Round 2 to Round 3
            { startX: 350, startY: 80, endX: 390, endY: 160 },
            { startX: 350, startY: 240, endX: 390, endY: 160 },
            { startX: 350, startY: 400, endX: 390, endY: 480 },
            { startX: 350, startY: 560, endX: 390, endY: 480 },

            // Round 3 to Final
            { startX: 540, startY: 160, endX: 580, endY: 320 },
            { startX: 540, startY: 480, endX: 580, endY: 320 },
        ],
        winner: "Team 4"
    };

    return (
        <div>
            <TournamentBracket {...tournamentData} />
        </div>
    );
};

export default App;