import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of, tap} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {MessageService} from 'primeng/api';
import { AdminDecksManagerActions } from './admin-decks-manager.actions';
import {DeckApi} from '../../../core/deck/deck.api';

@Injectable()
export class AdminDecksManagerEffects {
  private actions$ = inject(Actions);
  private deckApi = inject(DeckApi);
  private messageService = inject(MessageService);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminDecksManagerActions.loadDecks),
      mergeMap(() =>
        this.deckApi.getAll().pipe(
          map(response =>
            {
              return AdminDecksManagerActions.loadDecksSuccess({
                decks: response.data
              });
            }
          ),
          catchError(error =>
            of(AdminDecksManagerActions.loadDecksFailure({ error: error.message || 'Users loading failed' }))
          )
        )
      )
    )
  )

  /*---------------- Toast ----------------*/

  showLoadUsersSuccessToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminDecksManagerActions.loadDecksSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Load Successful',
            detail: 'Users have been loaded successfully.'
          });
        })
      ),
    { dispatch: false }
  );

  showLoadUsersFailureToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminDecksManagerActions.loadDecksFailure),
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
