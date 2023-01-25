import { IUser } from "@/types/user";
import {
  Face4Rounded,
  Face4Sharp,
  Face6Outlined,
  Face6Rounded,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import axios from "axios";
import moment from "moment";
import React from "react";

export default function UserItem({ user }: { user: IUser }) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <Box display="flex" justifyContent="center" padding={2}>
          {user.gender === 0 ? (
            <Face6Rounded sx={{ fontSize: "100px" }} />
          ) : (
            <Face4Rounded sx={{ fontSize: "100px" }} />
          )}
        </Box>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
          >
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            {moment(user.created_at).format("YYYY-MM-DD")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const res = await axios.get(`http://localhost:8087/user/${id}`);
  const user = res.data;

  return {
    props: { user },
  };
}
