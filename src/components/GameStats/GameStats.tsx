import { FC } from "react";
import * as Styled from "./GameStats.styles";
import { Typography } from "../Typography";
import { IGameStats } from "./GameStats.types";

export const GameStats: FC<IGameStats> = ({
  moves,
  score,
  time,
  scoreTotalAmount = 0,
}) => {
  return (
    <Styled.LeftSideText>
      <Typography>
        Score: {score}/{scoreTotalAmount}
      </Typography>
      <Typography>Time: {time}</Typography>
      <Typography>Moves: {moves}</Typography>
    </Styled.LeftSideText>
  );
};
