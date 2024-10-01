// import * as React from 'react';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs'; 
// import { Grid, TextField } from '@mui/material'; 

// export default function Datee() {
//   const [date, setDate] = React.useState(null); 

//   const handleDateChange = (newDate) => {
//     const formattedDate = newDate ? dayjs(newDate).format('MM/DD/YYYY') : '';
//     setDate(formattedDate);
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12}>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <DatePicker
//             label="Select a date"
//             value={date ? dayjs(date, 'MM/DD/YYYY') : null}
//             onChange={(newDate) => handleDateChange(newDate)}
//             renderInput={(params) => (
//               <TextField
//                 {...params}
//                 helperText="Format: MM/DD/YYYY"
//                 fullWidth
//               />
//             )}
//             sx={{ width: '100%' }} 
//           />
//         </LocalizationProvider>
//       </Grid>
//       <Grid item xs={12}>
//         <h1>{date}</h1>
//       </Grid>
//     </Grid>
//   );
// }

import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs'; 
import { Grid, TextField, Typography } from '@mui/material'; 

export default function Datee() {
   const [monthYearOfManufacturePackingImpor, setMonthYearOfManufacturePackingImpor  ] = React.useState("");


  const handleDateChange = (newDate) => {
   
    const formattedDate = newDate ? dayjs(newDate).format('MMMM YYYY') : '';
    setMonthYearOfManufacturePackingImpor(formattedDate);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>Month Year Of Manufacture Packing Import *</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            views={['month', 'year']} // Show only month and year views
            label="Select Month and Year"
            value={monthYearOfManufacturePackingImpor ? dayjs(monthYearOfManufacturePackingImpor, 'MMMM YYYY') : null}
            onChange={(newDate) => handleDateChange(newDate)}
            renderInput={(params) => (
              <TextField
                {...params}
                helperText="Format: Month YYYY"
                fullWidth
              />
            )}
            sx={{ width: '100%' }} 
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12}>
        <Typography>Selected Date: {monthYearOfManufacturePackingImpor}</Typography>
      </Grid>
    </Grid>
  );
}

