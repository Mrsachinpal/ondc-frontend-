import React, { useState } from 'react';
import {
    TextField,
    Button,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormControl,
    FormLabel,
    Grid,
    Select,
    MenuItem,
    IconButton,
    Box,
    InputLabel,
    Typography,
    Paper,
    Container
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

const StoreTiming = () => {
    const [storeStatus, setStoreStatus] = useState("");
    const [holidays, setHolidays] = useState([]);
    const [daysTimings, setDaysTimings] = useState([
        { daysRange: { from: 1, to: 5 }, timings: [{ from: '', to: '' }] },
    ]);
    const [closedDays, setClosedDays] = useState({ from: 1, to: 5 });
    const [closedTimings, setClosedTimings] = useState({ from: '00:00', to: '00:00' });

    // Handle store status
    const handleStoreStatus = (event) => {
        setStoreStatus(event.target.value);
        setHolidays([]);  // Clear holidays when status changes
    };

    // Add and remove timings for enabled status
    const handleDaysChange = (index, field, value) => {
        const newDaysTimings = [...daysTimings];
        newDaysTimings[index].daysRange[field] = value;
        setDaysTimings(newDaysTimings);
    };

    const handleTimingChange = (daysIndex, timingIndex, field, value) => {
        const newDaysTimings = [...daysTimings];
        newDaysTimings[daysIndex].timings[timingIndex][field] = value;
        setDaysTimings(newDaysTimings);
    };

    const addTiming = (index) => {
        const newDaysTimings = [...daysTimings];
        newDaysTimings[index].timings.push({ from: '', to: '' });
        setDaysTimings(newDaysTimings);
    };

    const removeTiming = (daysIndex, timingIndex) => {
        const newDaysTimings = [...daysTimings];
        newDaysTimings[daysIndex].timings = newDaysTimings[daysIndex].timings.filter((_, i) => i !== timingIndex);
        setDaysTimings(newDaysTimings);
    };

    const addDaysTimings = () => {
        setDaysTimings([...daysTimings, { daysRange: { from: 1, to: 5 }, timings: [{ from: '', to: '' }] }]);
    };

    const removeDaysTimings = (index) => {
        const newDaysTimings = daysTimings.filter((_, i) => i !== index);
        setDaysTimings(newDaysTimings);
    };

    // Handle closed timings and days
    const handleClosedDaysChange = (field, value) => {
        setClosedDays({ ...closedDays, [field]: value });
    };

    const handleClosedTimingsChange = (field, value) => {
        setClosedTimings({ ...closedTimings, [field]: value });
    };

    // Submit payload
    const handleSubmit = () => {
        const formattedHolidays = holidays.map((date) => {
            // Check if date is already in string format or an object and format it
            if (typeof date === 'string') {
                return date;  // Assuming it's already in 'YYYY-MM-DD' format
            } else if (date instanceof Date) {
                return date.toISOString().split('T')[0];  // Convert Date to 'YYYY-MM-DD'
            } else if (date.year && date.month && date.day) {
                // Handle multi-date-picker object format
                const year = date.year;
                const month = String(date.month).padStart(2, '0');
                const day = String(date.day).padStart(2, '0');
                return `${year}-${month}-${day}`;
            }
            return date;  // Fallback
        });
    
        const payload = {
            storeTimings: {
                status: storeStatus,
                holidays: formattedHolidays,
                enabled: storeStatus === "enabled" ? daysTimings : [],
                closed: storeStatus === "temporarilyClosed" ? closedTimings : {},
                closedDays: storeStatus === "temporarilyClosed" ? closedDays : {}
            }
        };
    
        console.log(payload);
    };
    
    const format = "MM/DD/YYYY";

    return (
        <Container>
            <Typography variant="h5" gutterBottom>
                Store Timing
            </Typography>

            <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                    <FormLabel component="legend" sx={{ fontWeight: 'bold' }}>Store Status</FormLabel>
                    <RadioGroup
                        row
                        aria-label="Store Status"
                        name="storeStatus"
                        value={storeStatus}
                        onChange={handleStoreStatus}
                    >
                        <FormControlLabel
                            value="enabled"
                            control={<Radio />}
                            label="Enabled"
                        />
                        <FormControlLabel
                            value="temporarilyClosed"
                            control={<Radio />}
                            label="Temporarily Closed"
                        />
                        <FormControlLabel
                            value="disabled"
                            control={<Radio />}
                            label="Disabled"
                        />
                    </RadioGroup>
                </FormControl>
            </Grid>

            {/* Enabled Status */}
            {storeStatus === "enabled" && (
                <>
                    <Grid item xs={12}>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend" sx={{ fontWeight: 'bold' }}>Holidays</FormLabel>
                            <Box sx={{ marginTop: 2, minWidth: '200px' }}>
                                <DatePicker
                                    label="Holidays"
                                    value={holidays}
                                    onChange={setHolidays}
                                    multiple
                                    sort
                                    format={format}
                                    calendarPosition="bottom-center"
                                    plugins={[<DatePanel key="date-panel" />]}
                                    style={{ width: "100%" }}
                                />
                            </Box>
                        </FormControl>
                    </Grid>

                    {daysTimings.map((dayTiming, daysIndex) => (
                        <Paper key={daysIndex} sx={{ p: 2, mb: 2 }}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={5}>
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel id={`days-from-label-${daysIndex}`}>Days From</InputLabel>
                                        <Select
                                            labelId={`days-from-label-${daysIndex}`}
                                            value={dayTiming.daysRange.from}
                                            onChange={(e) => handleDaysChange(daysIndex, 'from', e.target.value)}
                                        >
                                            <MenuItem value={1}>Monday</MenuItem>
                                            <MenuItem value={2}>Tuesday</MenuItem>
                                            <MenuItem value={3}>Wednesday</MenuItem>
                                            <MenuItem value={4}>Thursday</MenuItem>
                                            <MenuItem value={5}>Friday</MenuItem>
                                            <MenuItem value={6}>Saturday</MenuItem>
                                            <MenuItem value={7}>Sunday</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={5}>
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel id={`days-to-label-${daysIndex}`}>Days To</InputLabel>
                                        <Select
                                            labelId={`days-to-label-${daysIndex}`}
                                            value={dayTiming.daysRange.to}
                                            onChange={(e) => handleDaysChange(daysIndex, 'to', e.target.value)}
                                        >
                                            <MenuItem value={1}>Monday</MenuItem>
                                            <MenuItem value={2}>Tuesday</MenuItem>
                                            <MenuItem value={3}>Wednesday</MenuItem>
                                            <MenuItem value={4}>Thursday</MenuItem>
                                            <MenuItem value={5}>Friday</MenuItem>
                                            <MenuItem value={6}>Saturday</MenuItem>
                                            <MenuItem value={7}>Sunday</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={2}>
                                    <IconButton onClick={() => removeDaysTimings(daysIndex)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>

                            {dayTiming.timings.map((timing, timingIndex) => (
                                <Grid container spacing={2} alignItems="center" key={timingIndex}>
                                    <Grid item xs={5}>
                                        <TextField
                                            label="From"
                                            type="time"
                                            fullWidth
                                            value={timing.from}
                                            onChange={(e) => handleTimingChange(daysIndex, timingIndex, 'from', e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            sx={{ mt: 2 }}
                                        />
                                    </Grid>
                                    <Grid item xs={5}>
                                        <TextField
                                            label="To"
                                            type="time"
                                            fullWidth
                                            value={timing.to}
                                            onChange={(e) => handleTimingChange(daysIndex, timingIndex, 'to', e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            sx={{ mt: 2 }}
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton onClick={() => removeTiming(daysIndex, timingIndex)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            ))}

                            <Box textAlign="right">
                                <Button
                                    variant="contained"
                                    startIcon={<AddIcon />}
                                    onClick={() => addTiming(daysIndex)}
                                >
                                    Add Timing
                                </Button>
                            </Box>
                        </Paper>
                    ))}

                    <Box textAlign="right" mb={2}>
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            onClick={addDaysTimings}
                        >
                            Add Days Range
                        </Button>
                    </Box>
                </>
            )}

            {/* Temporarily Closed Status */}
            {storeStatus === "temporarilyClosed" && (
                <Paper sx={{ p: 2, mb: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="closed-days-from-label">Days From</InputLabel>
                                <Select
                                    labelId="closed-days-from-label"
                                    value={closedDays.from}
                                    onChange={(e) => handleClosedDaysChange('from', e.target.value)}
                                >
                                    <MenuItem value={1}>Monday</MenuItem>
                                    <MenuItem value={2}>Tuesday</MenuItem>
                                    <MenuItem value={3}>Wednesday</MenuItem>
                                    <MenuItem value={4}>Thursday</MenuItem>
                                    <MenuItem value={5}>Friday</MenuItem>
                                    <MenuItem value={6}>Saturday</MenuItem>
                                    <MenuItem value={7}>Sunday</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="closed-days-to-label">Days To</InputLabel>
                                <Select
                                    labelId="closed-days-to-label"
                                    value={closedDays.to}
                                    onChange={(e) => handleClosedDaysChange('to', e.target.value)}
                                >
                                    <MenuItem value={1}>Monday</MenuItem>
                                    <MenuItem value={2}>Tuesday</MenuItem>
                                    <MenuItem value={3}>Wednesday</MenuItem>
                                    <MenuItem value={4}>Thursday</MenuItem>
                                    <MenuItem value={5}>Friday</MenuItem>
                                    <MenuItem value={6}>Saturday</MenuItem>
                                    <MenuItem value={7}>Sunday</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Closed From"
                                type="time"
                                fullWidth
                                value={closedTimings.from}
                                onChange={(e) => handleClosedTimingsChange('from', e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{ mt: 2 }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Closed To"
                                type="time"
                                fullWidth
                                value={closedTimings.to}
                                onChange={(e) => handleClosedTimingsChange('to', e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{ mt: 2 }}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            )}

            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </Container>
    );
};

export default StoreTiming;
