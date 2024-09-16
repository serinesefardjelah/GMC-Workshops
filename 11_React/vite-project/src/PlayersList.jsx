// import React from "react";
// import PlayerCard from "./PlayerCard";
// import players from "./players";
// //import the players array from the players.js file in the same folder as this file

// //map on players array and render the PlayerCard component for each player

// //style it with flexbox

// function PlayersList() {
//   return (
//     <div className="flex flex-wrap justify-center">
//       {players.map((player) => (
//         <PlayerCard
//           name={player.name}
//           team={player.team}
//           age={player.age}
//           jerseyNumber={player.jerseyNumber}
//           nationality={player.nationality}
//         />
//       ))}
//     </div>
//   );
// }

// export default PlayersList;
import React, { memo } from "react";
import PlayerCard from "./PlayerCard";
import players from "./players";

function PlayersList() {
  return (
    <div className="flex flex-wrap justify-center">
      {players.map(
        ({ id, name, team, age, jerseyNumber, nationality, image }) => (
          <PlayerCard
            key={id}
            name={name}
            team={team}
            age={age}
            jerseyNumber={jerseyNumber}
            nationality={nationality}
            image={image}
          />
        )
      )}
    </div>
  );
}

export default PlayersList;
