import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import { useEffect, useState } from "react";

export default function BasicCard(props) {
  const handlleRedeemdVoucher = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8000/api/voucher_redeemed/${props.vID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            redeemed: true,
          }),
        }
      );

      if (response.ok) {
        props.getWallet();
        console.log("redeemed: sucsee " + response.status);
      } else {
        console.error("redeemed failed:" + error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        {props.voucher.storeType}
      </Typography>
      <Typography level="body2">
        {" "}
        {props.voucher.dateOfExpiry.slice(0, 10)}
      </Typography>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
      >
        <DeleteForeverIcon onClick={props.delete} />
      </IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: "flex" }}>
        <div>
          <Typography level="body3">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {props.voucher.ammount}$
          </Typography>
          <Typography fontSize="sm" fontWeight="sm">
            ID: {props.vID}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: "auto", fontWeight: 600 }}
          onClick={handlleRedeemdVoucher}
        >
          Redeemd
        </Button>
      </Box>
    </Card>
  );
}
