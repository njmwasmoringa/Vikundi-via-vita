import React from "react";
import BotCard from "./BotCard";

function BotCollection( {bots, recruteBot} ) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
      { bots.map(bot=><BotCard key={bot.id} bot={bot} recruteBot={recruteBot} />) }
      </div>
    </div>
  );
}

export default BotCollection;
