import { useRootStore, useUserStore } from "@/providers/RootStoreProvider";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";

export default observer(function Test() {
    const context = useRootStore();

    const {userStore} = useRootStore()

  return (
    <div >
        test
    </div>
  );
});