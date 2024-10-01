
import { Chart } from "react-google-charts";
import React from "react"
export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 600],
  ["2015", 1170, 460, 710],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

export default function BarChart() {
  return (
<>
<Chart
      chartType="Bar"
      width="100%"
      height="350px"
      data={data}
      options={options}
    />

</>
  );
}
