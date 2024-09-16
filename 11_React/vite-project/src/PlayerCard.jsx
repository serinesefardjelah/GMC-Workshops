import React from "react";

function PlayerCard({ name, team, nationality, jerseyNumber, age, image }) {
  return (
    <>
      <div className="bg-gray-200 p-4 m-4 w-96 rounded-lg">
        <h1 className="text-2xl font-bold my-4">{name}</h1>
        <p className="text-lg">
          <span className="font-bold">team : </span>
          {team}
        </p>
        <p className="text-lg">
          <span className="font-bold">nationality : </span>
          {nationality}
        </p>
        <p className="text-lg">
          <span className="font-bold">jerseyNumber : </span>
          {jerseyNumber}
        </p>
        <p className="text-lg">
          <span className="font-bold">age : </span>
          {age}
        </p>
        
        <img src={image} alt="img" />
      </div>
    </>
  );
}

export default PlayerCard;
