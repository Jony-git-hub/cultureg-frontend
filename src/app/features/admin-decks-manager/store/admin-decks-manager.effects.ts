import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of, tap} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {MessageService} from 'primeng/api';
import { AdminDecksManagerActions } from './admin-decks-manager.actions';
import {DeckApi} from '../../../core/deck/deck.api';
import {ThemeApi} from '../../../core/theme/theme.api';
import {LanguageApi} from '../../../core/language/language.api';

@Injectable()
export class AdminDecksManagerEffects {
  private actions$ = inject(Actions);
  private deckApi = inject(DeckApi);
  private themeApi = inject(ThemeApi);
  private languageApi = inject(LanguageApi);
  private messageService = inject(MessageService);

  addDeck$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminDecksManagerActions.addDeck),
      mergeMap((action) =>
        this.deckApi.add(action.deck).pipe(
          map(response =>
            {
              return AdminDecksManagerActions.addDeckSuccess({
                deck: response.data
              });
            }
          ),
          catchError(error =>
            of(AdminDecksManagerActions.addDeckFailure({ error: error.message || 'Deck adding failed' }))
          )
        )
      )
    )
  )

  loadDecks$ = createEffect(() =>
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
            of(AdminDecksManagerActions.loadDecksFailure({ error: error.message || 'Decks loading failed' }))
          )
        )
      )
    )
  )

  loadThemes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminDecksManagerActions.loadThemes),
      mergeMap(() =>
        this.themeApi.getAll().pipe(
          map(response =>
            {
              return AdminDecksManagerActions.loadThemesSuccess({
                themes: response.data
              });
            }
          ),
          catchError(error =>
            of(AdminDecksManagerActions.loadThemesFailure({ error: error.message || 'Themes loading failed' }))
          )
        )
      )
    )
  )

  loadLanguages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminDecksManagerActions.loadLanguages),
      mergeMap(() =>
        this.languageApi.getAll().pipe(
          map(response =>
            {
              return AdminDecksManagerActions.loadLanguagesSuccess({
                languages: response.data
              });
            }
          ),
          catchError(error =>
            of(AdminDecksManagerActions.loadLanguagesFailure({ error: error.message || 'Languages loading failed' }))
          )
        )
      )
    )
  )

  updateDeck$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminDecksManagerActions.updateDeck),
      mergeMap((action) =>
        this.deckApi.updateById(action.deck.id, action.deck).pipe(
          map(response =>
            {
              return AdminDecksManagerActions.updateDeckSuccess({
                deck: response.data
              });
            }
          ),
          catchError(error =>
            of(AdminDecksManagerActions.updateDeckFailure({ error: error.message || 'Deck updating failed' }))
          )
        )
      )
    )
  )

  deleteDeck$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminDecksManagerActions.deleteDeck),
      mergeMap((action) =>
        this.deckApi.deleteById(action.deck.id).pipe(
          map(response =>
            {
              return AdminDecksManagerActions.deleteDeckSuccess({
                deck: response.data
              });
            }
          ),
          catchError(error =>
            of(AdminDecksManagerActions.deleteDeckFailure({ error: error.message || 'Deck deleting failed' }))
          )
        )
      )
    )
  )

  /*---------------- Toast ----------------*/

  showAddDeckSuccessToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminDecksManagerActions.addDeckSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Add Successful',
            detail: 'Deck has been added successfully.'
          });
        })
      ),
    { dispatch: false }
  );
  showAddDeckFailureToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminDecksManagerActions.addDeckFailure),
        tap(({ error }) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Add Failed',
            detail: error
          });
        })
      ),
    { dispatch: false }
  );

  showLoadDecksSuccessToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminDecksManagerActions.loadDecksSuccess),
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

  showLoadThemesSuccessToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminDecksManagerActions.loadThemesSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Load Successful',
            detail: 'Themes have been loaded successfully.'
          });
        })
      ),
    { dispatch: false }
  );
  showLoadThemesFailureToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminDecksManagerActions.loadThemesFailure),
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

  showLoadLanguagesSuccessToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminDecksManagerActions.loadLanguagesSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Load Successful',
            detail: 'Languages have been loaded successfully.'
          });
        })
      ),
    { dispatch: false }
  );
  showLoadLanguagesFailureToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminDecksManagerActions.loadLanguagesFailure),
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

  showUpdateDeckSuccessToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminDecksManagerActions.updateDeckSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Update Successful',
            detail: 'Deck has been updated successfully.'
          });
        })
      ),
    { dispatch: false }
  );
  showUpdateDeckFailureToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminDecksManagerActions.updateDeckFailure),
        tap(({ error }) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Update Failed',
            detail: error
          });
        })
      ),
    { dispatch: false }
  );

  showDeleteDeckSuccessToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminDecksManagerActions.deleteDeckSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Update Successful',
            detail: 'Deck has been deleted successfully.'
          });
        })
      ),
    { dispatch: false }
  );
  showDeleteDeckFailureToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminDecksManagerActions.deleteDeckFailure),
        tap(({ error }) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Update Failed',
            detail: error
          });
        })
      ),
    { dispatch: false }
  );
}
