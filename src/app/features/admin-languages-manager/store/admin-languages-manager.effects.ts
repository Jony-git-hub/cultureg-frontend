import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of, tap} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {MessageService} from 'primeng/api';
import { AdminLanguagesManagerActions } from './admin-languages-manager.actions';
import { LanguageApi } from '../../../core/language/language.api';

@Injectable()
export class AdminLanguagesManagerEffects {
  private actions$ = inject(Actions);
  private languageApi = inject(LanguageApi);
  private messageService = inject(MessageService);

  addLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminLanguagesManagerActions.addLanguage),
      mergeMap((action) =>
        this.languageApi.add(action.language).pipe(
          map(response =>
            {
              return AdminLanguagesManagerActions.addLanguageSuccess({
                language: response.data
              });
            }
          ),
          catchError(error =>
            of(AdminLanguagesManagerActions.addLanguageFailure({ error: error.message || 'Language adding failed' }))
          )
        )
      )
    )
  )

  loadLanguages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminLanguagesManagerActions.loadLanguages),
      mergeMap(() =>
        this.languageApi.getAll().pipe(
          map(response =>
            {
              return AdminLanguagesManagerActions.loadLanguagesSuccess({
                languages: response.data
              });
            }
          ),
          catchError(error =>
            of(AdminLanguagesManagerActions.loadLanguagesFailure({ error: error.message || 'Languages loading failed' }))
          )
        )
      )
    )
  )

  updateLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminLanguagesManagerActions.updateLanguage),
      mergeMap((action) =>
        this.languageApi.updateById(action.language.id, action.language).pipe(
          map(response =>
            {
              return AdminLanguagesManagerActions.updateLanguageSuccess({
                language: response.data
              });
            }
          ),
          catchError(error =>
            of(AdminLanguagesManagerActions.updateLanguageFailure({ error: error.message || 'Language updating failed' }))
          )
        )
      )
    )
  )

  deleteLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminLanguagesManagerActions.deleteLanguage),
      mergeMap((action) =>
        this.languageApi.deleteById(action.language.id).pipe(
          map(response =>
            {
              return AdminLanguagesManagerActions.deleteLanguageSuccess({
                language: response.data
              });
            }
          ),
          catchError(error =>
            of(AdminLanguagesManagerActions.deleteLanguageFailure({ error: error.message || 'Language deleting failed' }))
          )
        )
      )
    )
  )
  /*---------------- Toast ----------------*/
  showAddLanguageSuccessToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminLanguagesManagerActions.addLanguageSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Add Successful',
            detail: 'Language' +
              ' has been added successfully.'
          });
        })
      ),
    { dispatch: false }
  );
  showAddLanguageFailureToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminLanguagesManagerActions.addLanguageFailure),
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
        ofType(AdminLanguagesManagerActions.loadLanguagesSuccess),
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
        ofType(AdminLanguagesManagerActions.loadLanguagesFailure),
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

  showUpdateLanguagesSuccessToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminLanguagesManagerActions.updateLanguageSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Load Successful',
            detail: 'Language has been updated successfully.'
          });
        })
      ),
    { dispatch: false }
  );
  showUpdateLanguagesFailureToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminLanguagesManagerActions.updateLanguageFailure),
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

  showDeleteLanguagesSuccessToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminLanguagesManagerActions.deleteLanguageSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Load Successful',
            detail: 'Language has been deleted successfully.'
          });
        })
      ),
    { dispatch: false }
  );
  showDeleteLanguagesFailureToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminLanguagesManagerActions.deleteLanguageFailure),
        tap(({ error }) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Delete Failed',
            detail: error
          });
        })
      ),
    { dispatch: false }
  );
}
