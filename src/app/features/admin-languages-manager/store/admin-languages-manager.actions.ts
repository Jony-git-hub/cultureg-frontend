import {createAction, props} from '@ngrx/store';
import {Language} from '../../../core/language/language.model';

export const AdminLanguagesManagerActions = {
  addLanguage: createAction(
    '[Admin Languages Manager] Add Language',
    props<{ language: Language }>()
  ),
  addLanguageSuccess: createAction(
    '[Admin Languages Manager] Add Language Success',
    props<{ language: Language }>()
  ),
  addLanguageFailure: createAction(
    '[Admin Languages Manager] Add Language Failure',
    props<{ error: string }>()
  ),

  loadLanguages: createAction(
    '[Admin Languages Manager] Load Languages'
  ),
  loadLanguagesSuccess: createAction(
    '[Admin Languages Manager] Load Languages Success',
    props<{ languages: Language[] }>()
  ),
  loadLanguagesFailure: createAction(
    '[Admin Languages Manager] Load Languages Failure',
    props<{ error: string }>()
  ),

  updateLanguage: createAction(
    '[Admin Languages Manager] Update Language',
    props<{ language: Language }>()
  ),
  updateLanguageSuccess: createAction(
    '[Admin Languages Manager] Update Language Success',
    props<{ language: Language }>()
  ),
  updateLanguageFailure: createAction(
    '[Admin Languages Manager] Update Language Failure',
    props<{ error: string }>()
  ),

  deleteLanguage: createAction(
    '[Admin Languages Manager] Delete Language',
    props<{ language: Language }>()
  ),
  deleteLanguageSuccess: createAction(
    '[Admin Languages Manager] Delete Language Success',
    props<{ language: Language }>()
  ),
  deleteLanguageFailure: createAction(
    '[Admin Languages Manager] Delete Language Failure',
    props<{ error: string }>()
  ),
};
