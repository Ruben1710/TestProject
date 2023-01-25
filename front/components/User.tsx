import { IUser } from "@/types/user";
import { Face4Rounded, Face6Rounded } from "@mui/icons-material";
import { Card, Grid, Typography } from "@mui/material";
import moment from "moment";
import React from "react";

interface UserItemProps {
  user: IUser;
  onClick: () => void
}

export default function User({ user, onClick }: UserItemProps) {
  return (
    <Card sx={{ mb: 4 }} className="userItem" onClick={onClick}>
      <Grid container p={3} alignItems="center">
        <Grid item>
          {user.gender === 0 ? <Face6Rounded /> : <Face4Rounded />}
        </Grid>
        <Grid item>
          <Typography component="h3" fontSize={22} ml="40px">
            {user.name}
          </Typography>
        </Grid>
        <Grid item ml="auto">
          {moment(user.created_at).format('YYYY-MM-DD')}
        </Grid>
      </Grid>
    </Card>
  );
}
