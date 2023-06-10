import { CardsObject, ICard } from "../Card/Card.types";

export interface ICardList {
  cards: CardsObject | null;
  disableClicks: boolean;
  setCardsHandler: (card: ICard) => void;
}
