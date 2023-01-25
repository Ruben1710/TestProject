import UsersList from "@/components/UsersList";
import { useRootStore, useUserStore } from "@/providers/RootStoreProvider";
import { IUser } from "@/types/user";
import { ControlPoint } from "@mui/icons-material";
import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { observer } from "mobx-react-lite";
import { GetServerSideProps } from "next";
import React, { useCallback, useState } from "react";

export default observer(function Index() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [gender, setGender] = useState(1);
  const [name, setName] = useState("");

  const handleGenderChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setGender(Number((event.target as HTMLInputElement).value));
    },
    []
  );
  const handleNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName((event.target as HTMLInputElement).value);
    },
    []
  );

  const addNewUser = useCallback(() => {
    axios.post("http://localhost:8087/user", { name, gender }).then(() => {
      setName("");
      alert("user successfuly added");
    });
  }, []);
  const { userStore } = useRootStore();

  const users: IUser[] = userStore.users || [];

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#fff",
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Grid container justifyContent="center" className="users">
        <Card sx={{ width: "100%" }}>
          <Grid container justifyContent="space-between" p={3}>
            <Typography component="h2" fontSize={30}>
              Users
            </Typography>
            <IconButton onClick={handleOpen}>
              <ControlPoint color="primary" />
            </IconButton>
            <UsersList users={users} />
          </Grid>
        </Card>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modalContent">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New User
          </Typography>
          <TextField
            id="standard-basic"
            label="Enter Name"
            variant="standard"
            value={name}
            onChange={handleNameChange}
            autoFocus={true}
            fullWidth
            sx={{ my: 4 }}
          />
          <FormControl sx={{ display: "block", mb: 4 }}>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={gender}
              onChange={handleGenderChange}
            >
              <FormControlLabel value={1} control={<Radio />} label="Female" />
              <FormControlLabel value={0} control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <Button
            variant="outlined"
            disabled={!name.length}
            onClick={addNewUser}
            fullWidth
          >
            Create
          </Button>
        </Box>
      </Modal>
    </>
  );
});
export const getServerSideProps: GetServerSideProps =
  async function getUsers() {
    const { data }: any = await axios.get("http://localhost:8087/user");

    return {
      props: {
        hydrationData: {
          stopwatchStore: {
            users: data,
          },
        },
      },
    };
  };
