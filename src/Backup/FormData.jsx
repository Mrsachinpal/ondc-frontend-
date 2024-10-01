// import React, { useState } from 'react';

// const FormData = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     mobileNo: '',
//     email: '',
//     profile: '',
//     state: '',
//     district: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #f5c6cb', borderRadius: '10px' }}>
//       <h2 style={{ textAlign: 'center' }}>Enquire Now</h2>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '10px' }}>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             placeholder="Full Name"
//             style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />
//         </div>
//         <div style={{ marginBottom: '10px' }}>
//           <input
//             type="text"
//             name="mobileNo"
//             value={formData.mobileNo}
//             onChange={handleChange}
//             placeholder="Mobile No."
//             style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />
//         </div>
//         <div style={{ marginBottom: '10px' }}>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />
//         </div>

//         <div style={{ marginBottom: '10px' }}>
//           <input
//             type="text"
//             name="profile"
//             value={formData.profile}
//             onChange={handleChange}
//             placeholder="Profile"
//             style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />
//         </div>


//         <div style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}>
//           <input
//             type="text"
//             name="state"
//             value={formData.state}
//             onChange={handleChange}
//             placeholder="Select State"
//             style={{ width: '50%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />
//           <input
//             type="text"
//             name="district"
//             value={formData.district}
//             onChange={handleChange}
//             placeholder="Select District"
//             style={{ width: '50%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />
//         </div>
//         <button
//           type="submit"
//           style={{
//             width: '100%',
//             padding: '10px',
//             backgroundColor: '#ff5733',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//           }}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FormData;




// import React, { useState } from 'react';

// const FormData = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     mobileNumber: '',
//     email: '',
//     course: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Handle form submission, e.g., send data to a server
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
//       <h2 style={{ textAlign: 'center', color: '#4a90e2' }}>Apply Now</h2>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px' }}>Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             placeholder="Full Name"
//             style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />
//         </div>

//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px' }}>Mobile Number</label>
//           <div style={{ display: 'flex', alignItems: 'center', borderRadius: '5px', border: '1px solid #ccc', padding: '0 10px' }}>
//             <span style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>
//               <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="India Flag" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
//               +91
//             </span>
//             <input
//               type="tel"
//               name="mobileNumber"
//               value={formData.mobileNumber}
//               onChange={handleChange}
//               placeholder="Mobile Number"
//               style={{ width: '100%', padding: '10px', border: 'none', outline: 'none' }}
//             />
//           </div>
//         </div>

//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px' }}>Email ID</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email ID"
//             style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />
//         </div>

//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px' }}>Course</label>
//           <input
//             type="text"
//             name="course"
//             value={formData.course}
//             onChange={handleChange}
//             placeholder="Course Name"
//             style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />
//         </div>

//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px' }}>Write your message</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Write your message"
//             style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', minHeight: '100px' }}
//           />
//         </div>

//         <button
//           type="submit"
//           style={{
//             width: '100%',
//             padding: '10px',
//             backgroundColor: '#007bff',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             fontSize: '16px',
//           }}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FormData;




// 


import React, { useState } from 'react';
import { TextField, MenuItem, Button, Grid } from '@mui/material';

const FormData = () => {
  const [formValues, setFormValues] = useState({
    monthYear: '',
    fulfillmentOption: '',
    uom: '',
    uomValue: '',
    mrp: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formValues);
  };

  const fulfillmentOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            name="monthYear"
            label="Month Year Of Manufacture Packing Import"
            placeholder="MM/YYYY"
            value={formValues.monthYear}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            required
            name="fulfillmentOption"
            label="Fulfillment Option"
            value={formValues.fulfillmentOption}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          >
            {fulfillmentOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            name="uom"
            label="UOM"
            value={formValues.uom}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            name="uomValue"
            label="UOM Value"
            value={formValues.uomValue}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            name="mrp"
            label="MRP"
            value={formValues.mrp}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};


export default FormData;
