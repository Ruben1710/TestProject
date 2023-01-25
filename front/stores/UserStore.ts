import { IUser } from "@/types/user";
import axios from "axios";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { RootStore } from "./RootStore";

export type UserHydration = {
  users: IUser[] | any;
};

export class UserStore {
  root: RootStore;
  users: IUser[] | null = null;

  constructor(root: RootStore) {
    this.root = root;
    this.users = []
    makeObservable(this, {
      // getUsers: action,
      hydrate: action,
      users: observable,
    });
  }
  hydrate(data?: UserHydration) {
    if (data) {
      this.users = data.users;
      
    }
  }
}