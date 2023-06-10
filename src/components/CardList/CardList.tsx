import { FC } from "react";
import { ICardList } from "./CardList.types";
import * as Styled from "./CardList.styles";
import { Card, ICard } from "../Card";

export const CardList: FC<ICardList> = ({
  cards,
  disableClicks,
  setCardsHandler,
}) => {
  return (
    <Styled.CardListWrapper>
      {cards &&
        Object.keys(cards).map((cardId: string) => {
          const { id, src, flipped, isGuessedCorrect } = cards[cardId]!;
          const isFlipped = isGuessedCorrect ?? flipped;
          return (
            <Card
              key={id}
              id={id}
              src={src}
              setCardsHandler={(card: ICard) => {
                if (disableClicks) {
                  return;
                }
                setCardsHandler(card);
              }}
              flipped={isFlipped}
            />
          );
        })}
    </Styled.CardListWrapper>
  );
};
