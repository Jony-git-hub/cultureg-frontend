import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of, tap} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {MessageService} from 'primeng/api';
import { DecksManagerActions } from './decks-manager.actions';
import {DeckApi} from '../../../core/deck/deck.api';

@Injectable()
export class DecksManagerEffects {
  private actions$ = inject(Actions);
  private deckApi = inject(DeckApi);
  private messageService = inject(MessageService);

  loadDecks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DecksManagerActions.loadDecks),
      mergeMap(() =>
        this.deckApi.getAll().pipe(
          map(response =>
            {
              return DecksManagerActions.loadDecksSuccess({
                decks: response.data
              });
            }
          ),
          catchError(error =>
            of(DecksManagerActions.loadDecksFailure({ error: error.message || 'Decks loading failed' }))
          )
        )
      )
    )
  )

  /*---------------- Toast ----------------*/

  showLoadDecksSuccessToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(DecksManagerActions.loadDecksSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Load Successful',
            detail: 'Decks have been loaded successfully.'
          });
        })
      ),
    { dispatch: false }
  );

  showLoadDecksFailureToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(DecksManagerActions.loadDecksFailure),
        tap(({ error }) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Load Failed',
            detail: error
          });
        })
      ),
    { dispatch: false }
  );

}
