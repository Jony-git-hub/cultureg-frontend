import {Language} from '../../../core/language/language.model';

export interface AdminLanguagesManagerState {
  languages: Language[];
  loading: boolean;
  error: any;
}

export const initialAdminLanguagesManagerState: AdminLanguagesManagerState = {
  languages: [],
  loading: false,
  error: null,
}

