import {User} from '../user/user.model';
import {Card} from '../card/card.model';

export interface Deck {
  id: number;
  name: string;
  timestamp: number;
  user: User;
  cards: Card[];
}
