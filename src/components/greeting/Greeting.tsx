import { CircularProgress, Grid, Link, Typography } from "@mui/material";

import Logo from "../../assets/icons/Logo";
import { useState } from "react";
import Availabilities from "./Availabilities";
import { Background, Content, StyledButton } from "./styled";
import Shortcuts from "./Shortcuts";
import Modal from "../modal";
import { Circle } from "../modal/styled";

export default function Greeting({ loading }: { loading: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  function onCloseHandler() {
    if (!loading) setIsOpen(false);
  }

  return (
    <Modal isOpen={isOpen}>
      <Background />
      <Content>
        <Typography component="h1" fontSize="3.9rem" fontWeight="bold">
          Spotify Clone
        </Typography>
        <Typography marginBottom={2}>
          A demo of our lovely Spotify made by{" "}
          <Link
            href="https://pyromatic.me/"
            target="_blank"
            color="black"
            fontWeight="bold"
          >
            @pyromatic
          </Link>
        </Typography>
        <Typography mb={2}>
          Unfortunately some functions do not work due to the fact this is
          <b> a demo application</b>.
        </Typography>

        <Grid container mb={3} spacing={3}>
          <Availabilities />
          <Shortcuts />
        </Grid>

        <Logo size="1.6em" sx={{ display: "block", marginBottom: 3 }} />

        <StyledButton
          disableRipple
          onClick={() => onCloseHandler()}
          disabled={loading}
        >
          <Typography mr={1.5} fontWeight="bold" fontSize="0.9rem">
            Okay, got it!
          </Typography>
          {loading && (
            <CircularProgress
              sx={{ color: "black", position: "absolute", right: "13px" }}
              size={20}
            />
          )}
        </StyledButton>
      </Content>
      <Circle bottom="-20px" right="-40px" size="180px" filled />
      <Circle top="40px" right="-40px" size="150px" />
      <Circle bottom="70px" right="calc(40% - 120px)" size="100px" filled />
    </Modal>
  );
}
