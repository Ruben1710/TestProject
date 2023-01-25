import { useRootStore, useUserStore } from "@/providers/RootStoreProvider";
import axios from "axios";
import { GetServerSideProps } from "next";
import React from "react";

export default function Index() {
 
  return (
    <div className="title">
      <h1>Welcome!</h1>
    </div>
  );
}

