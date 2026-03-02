import {User} from '../user/user.model';
import {Card} from '../card/card.model';
import {Theme} from '../theme/theme.model';
import {Language} from '../language/language.model';

export interface Deck {
  id: number;
  name: string;
  timestamp: number;
  theme: Theme;
  language: Language;
  user: User;
  cards: Card[];
}
