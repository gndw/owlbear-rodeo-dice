import { useState } from "react";

import Stack from "@mui/material/Stack";

import { DiceBar } from "./DiceBar";
import { DiceSet } from "../types/DiceSet";
import { diceSets } from "../sets/diceSets";
import { PartyTrays } from "../plugin/PartyTrays";
import { PluginGate } from "../plugin/PluginGate";
import { DiceRollSync } from "../plugin/DiceRollSync";
import { ResizeObserver as PluginResizeObserver } from "../plugin/ResizeObserver";

export function Sidebar({
  onDiceSetOpen,
}: {
  onDiceSetOpen: (set: DiceSet) => void;
}) {
  // Keep track of sidebar player count so we can collapse the UI when
  // other players are active
  const [playerCount, setPlayerCount] = useState(0);

  return (
    <Stack
      maxHeight="100vh"
      width="60px"
      sx={{ overflowY: "auto", overflowX: "hidden" }}
    >
      <Stack p={1} gap={2}>
        <DiceBar
          diceSets={diceSets}
          onOpen={onDiceSetOpen}
          expandable={playerCount > 0}
        />
        <PluginGate>
          <DiceRollSync />
          <PartyTrays onPlayerCountChange={setPlayerCount} />
          <PluginResizeObserver />
        </PluginGate>
      </Stack>
    </Stack>
  );
}
