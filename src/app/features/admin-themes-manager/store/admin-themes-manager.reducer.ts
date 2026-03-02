import {createReducer, on} from '@ngrx/store';
import { AdminThemesManagerActions } from './admin-themes-manager.actions';
import {initialAdminThemesManagerState} from './admin-themes-manager.state';

export const adminThemesManagerReducer = createReducer(
  initialAdminThemesManagerState,

  //ADD
  on(AdminThemesManagerActions.addTheme, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AdminThemesManagerActions.addThemeSuccess, (state, { theme }) => ({
    ...state,
    themes: [...state.themes, theme],
    loading: false,
    error: null,
  })),
  on(AdminThemesManagerActions.addThemeFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  //LOAD
  on(AdminThemesManagerActions.loadThemes, (state) => ({
    ...state,
    themes: [],
    loading: true,
    error: null,
  })),
  on(AdminThemesManagerActions.loadThemesSuccess, (state, { themes }) => ({
    ...state,
    themes: themes,
    loading: false,
    error: null,
  })),
  on(AdminThemesManagerActions.loadThemesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  //LOAD
  on(AdminThemesManagerActions.updateTheme, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AdminThemesManagerActions.updateThemeSuccess, (state, { theme }) => ({
    ...state,
    themes: [...state.themes.filter(themeTmp => themeTmp.id !== theme.id), theme],
    loading: false,
    error: null,
  })),
  on(AdminThemesManagerActions.updateThemeFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  //DELETE
  on(AdminThemesManagerActions.deleteTheme, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AdminThemesManagerActions.deleteThemeSuccess, (state, { theme }) => ({
    ...state,
    themes: state.themes.filter(themeTmp => themeTmp.id !== theme.id),
    loading: false,
    error: null,
  })),
  on(AdminThemesManagerActions.deleteThemeFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
)
