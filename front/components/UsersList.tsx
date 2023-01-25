import { IUser } from "@/types/user";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import User from "./User";

interface UsersListProps {
  users: IUser[];
}

export default function UsersList({ users }: UsersListProps) {

  const router = useRouter()
  return (
    <Grid container direction="column" p={2} className="userList">
      {users.map((user) => (
        <User key={user._id} user={user} onClick={()=>router.push(`/users/${user._id}`)} />
      ))}
    </Grid>
  );
}
