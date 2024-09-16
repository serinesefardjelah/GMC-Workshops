import React, { useState } from "react";

function Card({ views, downloads, reactions = 0, onClickFunction }) {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("GMC");

  return (
    //card component styled with tailwind css
    <div className="max-w-sm rounded overflow-hidden shadow-lg border-solid border-2 border-purple-600 ">
      <img src="https://source.unsplash.com/random" alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by John Doe {name}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {downloads}
          </li>
          <li>
            <strong>Reactions: </strong>

            {reactions ? reactions : "No reactions yet"}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #tag3
        </span>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 px-4 rounded"
        onClick={() => onClickFunction(views)}
      >
        Button
      </button>
    </div>
  );
}

export default Card;
