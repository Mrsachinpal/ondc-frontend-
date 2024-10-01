import { Card } from "@mui/material";
import React from "react";

import { CircularProgressbar } from 'react-circular-progressbar';

export default function ReactCircular({ value, text }) {
  return (
    <>
      <Card sx={{ minWidth: "49%", height: 145 }}>
        <div style={{ width: 100, height: 100, margin: 20 }}>
          <CircularProgressbar value={value} text={`${text}%`} />
        </div>
      </Card>
    </>
  );
}
