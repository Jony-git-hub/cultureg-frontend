import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of, tap} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {MessageService} from 'primeng/api';
import {UserApi} from '../../../core/user/user.api';
import { AdminUsersManagerActions } from './admin-users-manager.actions';

@Injectable()
export class AdminUsersManagerEffects {
  private actions$ = inject(Actions);
  private userApi = inject(UserApi);
  private messageService = inject(MessageService);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminUsersManagerActions.loadUsers),
      mergeMap(() =>
        this.userApi.getAll().pipe(
          map(response =>
            {
              return AdminUsersManagerActions.loadUsersSuccess({
                users: response.data
              });
            }
          ),
          catchError(error =>
            of(AdminUsersManagerActions.loadUsersFailure({ error: error.message || 'Users loading failed' }))
          )
        )
      )
    )
  )

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminUsersManagerActions.deleteUser),
      mergeMap((action) =>
        this.userApi.deleteById(action.id).pipe(
          map(response =>
            {
              return AdminUsersManagerActions.deleteUserSuccess({
                user: response.data
              });
            }
          ),
          catchError(error =>
            of(AdminUsersManagerActions.deleteUserFailure({ error: error.message || 'User deleting failed' }))
          )
        )
      )
    )
  )

  /*---------------- Toast ----------------*/

  showLoadUsersSuccessToast$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AdminUsersManagerActions.loadUsersSuccess),
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
        ofType(AdminUsersManagerActions.loadUsersFailure),
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
