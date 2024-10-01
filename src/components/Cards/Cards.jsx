import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default function Cards({ Icon, text, text2 }) {
  return (
    <Card sx={{ minWidth: "49%", height: 145 }}>
      <CardContent>
        {Icon}
        <Typography gutterBottom variant="h5" component="div">
          {text}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          sx={{ color: "#ccd1d1" }}
        >
          {text2}
        </Typography>
      </CardContent>
    </Card>
  );
}
