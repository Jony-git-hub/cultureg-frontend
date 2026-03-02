import {createReducer, on} from '@ngrx/store';
import { AdminLanguagesManagerActions } from './admin-languages-manager.actions';
import {initialAdminLanguagesManagerState} from './admin-languages-manager.state';

export const adminLanguagesManagerReducer = createReducer(
  initialAdminLanguagesManagerState,

  //ADD
  on(AdminLanguagesManagerActions.addLanguage, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AdminLanguagesManagerActions.addLanguageSuccess, (state, { language }) => ({
    ...state,
    languages: [...state.languages, language],
    loading: false,
    error: null,
  })),
  on(AdminLanguagesManagerActions.addLanguageFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  //LOAD
  on(AdminLanguagesManagerActions.loadLanguages, (state) => ({
    ...state,
    languages: [],
    loading: true,
    error: null,
  })),
  on(AdminLanguagesManagerActions.loadLanguagesSuccess, (state, { languages }) => ({
    ...state,
    languages: languages,
    loading: false,
    error: null,
  })),
  on(AdminLanguagesManagerActions.loadLanguagesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  //LOAD
  on(AdminLanguagesManagerActions.updateLanguage, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AdminLanguagesManagerActions.updateLanguageSuccess, (state, { language }) => ({
    ...state,
    languages: [...state.languages.filter(languageTmp => languageTmp.id !== language.id), language],
    loading: false,
    error: null,
  })),
  on(AdminLanguagesManagerActions.updateLanguageFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  //DELETE
  on(AdminLanguagesManagerActions.deleteLanguage, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AdminLanguagesManagerActions.deleteLanguageSuccess, (state, { language }) => ({
    ...state,
    languages: state.languages.filter(languageTmp => languageTmp.id !== language.id),
    loading: false,
    error: null,
  })),
  on(AdminLanguagesManagerActions.deleteLanguageFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
)
