import { UserHydration, UserStore } from "./UserStore";

export type RootStoreHydration = {
    stopwatchStore?: UserHydration;
};
export class RootStore {
  userStore: UserStore;

  constructor() {
    this.userStore = new UserStore(this);
  }

  hydrate(data: RootStoreHydration) {    
    if (data.stopwatchStore) {
        this.userStore.hydrate(data.stopwatchStore);
      }
  }
}