export interface IUserState {
  email: string;
  password: number;
}

export interface ReturnUser extends IUserState {}

export interface PropsUserAsyncThunk extends IUserState {}

export interface InitialUserStore {
  user: IUserState | null;
  isLoading: boolean;
  errorMessage: string;
}
