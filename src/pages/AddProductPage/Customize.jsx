import React, { useState } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
} from '@mui/material';

const AddCustomization = () => {
  const [open, setOpen] = useState(false);
  const [customization, setCustomization] = useState({
    name: '',
    price: 0,
    uom: '',
    uomValue: '',
    availableQuantity: '',
    maxQuantity: '',
  });

  const uomOptions = ['Unit', 'Kilogram', 'Liter']; // Example UOM options

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomization({
      ...customization,
      [name]: value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log(customization); // Submit logic here
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Customization
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Customization</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            name="name"
            fullWidth
            value={customization.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Price"
            name="price"
            type="number"
            fullWidth
            value={customization.price}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="UOM"
            name="uom"
            select
            fullWidth
            value={customization.uom}
            onChange={handleChange}
          >
            {uomOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            margin="dense"
            label="UOM Value"
            name="uomValue"
            fullWidth
            value={customization.uomValue}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Available Quantity"
            name="availableQuantity"
            fullWidth
            value={customization.availableQuantity}
            onChange={handleChange}
          />
          
          <TextField
            margin="dense"
            label="Maximum Quantity"
            name="maxQuantity"
            fullWidth
            value={customization.maxQuantity}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      
    </div>
  );
};

export default AddCustomization;
