import {Theme} from '../../../core/theme/theme.model';

export interface AdminThemesManagerState {
  themes: Theme[];
  loading: boolean;
  error: any;
}

export const initialAdminThemesManagerState: AdminThemesManagerState = {
  themes: [],
  loading: false,
  error: null,
}

