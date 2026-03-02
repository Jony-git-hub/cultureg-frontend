import {createAction, props} from '@ngrx/store';
import {Theme} from '../../../core/theme/theme.model';

export const AdminThemesManagerActions = {
  addTheme: createAction(
    '[Admin Themes Manager] Add Theme',
    props<{ theme: Theme }>()
  ),
  addThemeSuccess: createAction(
    '[Admin Themes Manager] Add Theme Success',
    props<{ theme: Theme }>()
  ),
  addThemeFailure: createAction(
    '[Admin Themes Manager] Add Theme Failure',
    props<{ error: string }>()
  ),

  loadThemes: createAction(
    '[Admin Themes Manager] Load Themes'
  ),
  loadThemesSuccess: createAction(
    '[Admin Themes Manager] Load Themes Success',
    props<{ themes: Theme[] }>()
  ),
  loadThemesFailure: createAction(
    '[Admin Themes Manager] Load Themes Failure',
    props<{ error: string }>()
  ),

  updateTheme: createAction(
    '[Admin Themes Manager] Update Theme',
    props<{ theme: Theme }>()
  ),
  updateThemeSuccess: createAction(
    '[Admin Themes Manager] Update Theme Success',
    props<{ theme: Theme }>()
  ),
  updateThemeFailure: createAction(
    '[Admin Themes Manager] Update Theme Failure',
    props<{ error: string }>()
  ),

  deleteTheme: createAction(
    '[Admin Themes Manager] Delete Theme',
    props<{ theme: Theme }>()
  ),
  deleteThemeSuccess: createAction(
    '[Admin Themes Manager] Delete Theme Success',
    props<{ theme: Theme }>()
  ),
  deleteThemeFailure: createAction(
    '[Admin Themes Manager] Delete Theme Failure',
    props<{ error: string }>()
  ),
};
