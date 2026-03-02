import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of, tap} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {MessageService} from 'primeng/api';
import { AdminThemesManagerActions } from './admin-themes-manager.actions';
import {ThemeApi} from '../../../core/theme/theme.api';

@Injectable()
export class AdminThemesManagerEffects {
  private actions$ = inject(Actions);
  private themeApi = inject(ThemeApi);
  private messageService = inject(MessageService);

  addTheme$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminThemesManagerActions.addTheme),
      mergeMap((action) =>
        this.themeApi.add(action.theme).pipe(
          map(response =>
            {
              return AdminThemesManagerActions.addThemeSuccess({
                theme: response.data
              });
            }
          ),
          catchError(error =>
            of(AdminThemesManagerActions.addThemeFailure({ error: error.message || 'Theme adding failed' }))
          )
        )
      )
    )
  )

  loadThemes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminThemesManagerActions.loadThemes),
      mergeMap(() =>
        this.themeApi.getAll().pipe(
          map(response =>
            {
              return AdminThemesManagerActions.loadThemesSuccess({
                themes: response.data
              });
            }
          ),
          catchError(error =>
            of(AdminThemesManagerActions.loadThemesFailure({ error: error.message || 'Themes loading failed' }))
          )
        )
      )
    )
  )

  updateTheme$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminThemesManagerActions.updateTheme),
      mergeMap((action) =>
        this.themeApi.updateById(action.theme.id, action.theme).pipe(
          map(response =>
            {
              return AdminThemesManagerActions.updateThemeSuccess({
                theme: response.data
              });
            }
          ),
          catchError(error =>
            of(AdminThemesManagerActions.updateThemeFailure({ error: error.message || 'Themes loading failed' }))
          )
        )
      )
    )
  )

  deleteTheme$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminThemesManagerActions.deleteTheme),
      mergeMap((action) =>
        this.themeApi.deleteById(action.theme.id).pipe(
          map(response =>
            {
              return AdminThemesManagerActions.deleteThemeSuccess({
                theme: response.data
              });
            }
          ),
          catchError(error =>
            of(AdminThemesManagerActions.deleteThemeFailure({ error: error.message || 'Themes loading failed' }))
          )
        )
      )
    )
  )
  /*---------------- Toast ----------------*/
  showAddThemeSuccessToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminThemesManagerActions.addThemeSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Add Successful',
            detail: 'Theme has been added successfully.'
          });
        })
      ),
    { dispatch: false }
  );
  showAddThemeFailureToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminThemesManagerActions.addThemeFailure),
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
        ofType(AdminThemesManagerActions.loadThemesSuccess),
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
        ofType(AdminThemesManagerActions.loadThemesFailure),
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

  showUpdateThemesSuccessToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminThemesManagerActions.updateThemeSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Load Successful',
            detail: 'Theme has been updated successfully.'
          });
        })
      ),
    { dispatch: false }
  );
  showUpdateThemesFailureToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminThemesManagerActions.updateThemeFailure),
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

  showDeleteThemesSuccessToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminThemesManagerActions.deleteThemeSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Load Successful',
            detail: 'Theme has been deleted successfully.'
          });
        })
      ),
    { dispatch: false }
  );
  showDeleteThemesFailureToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminThemesManagerActions.deleteThemeFailure),
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
