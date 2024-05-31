import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEdit((edit) => !edit);

    if (isEdit) {
      onChangeName(symbol, playerName);
    }
  }
  function handlePlayerName(e) {
    setPlayerName(e.target.value);
  }

  let editPlayerName = <span className="player-name">{playerName}</span>;

  if (isEdit) {
    editPlayerName = (
      <input
        type="text"
        value={playerName}
        required
        onChange={handlePlayerName}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEdit ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
