import { useState } from "react";
import React from "react";

import {
  Container,
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Typography,
  Button,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import StoreTiming from "../../components/StoreTiming/StoreTiming";
export default function TextStore() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [locationAvailability, setLocationAvailability] = useState("");
  const [cancel, setCancel] = useState("");
  const [returnable, setReturnable] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [building, setBuilding] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [locality, setLocality] = useState("");
  const [logo, setLogo] = useState("");
  const [networkLogistics, setNetworkLogistics] = useState("");
  const [logisticsBppId, setLogisticsBppId] = useState("");
  const [logisticsDeliveryType, setLogisticsDeliveryType] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [deliveryChecked, setDeliveryChecked] = useState(false);
  const [selfPickupChecked, setSelfPickupChecked] = useState(false);
  const [deliveryEmail, setDeliveryEmail] = useState("");
  const [deliveryContactNumber, setDeliveryContactNumber] = useState("");
  const [selfPickupEmail, setSelfPickupEmail] = useState("");
  const [selfPickupContactNumber, setSelfPickupContactNumber] = useState("");
  const [cites, setCites] = useState("");
  const [serviceableRadius, setServiceableRadius] = useState("");

  const handleNetworkLogistics = (event) => {
    setNetworkLogistics(event.target.value);
  };

  const handleCancelChange = (event) => {
    setCancel(event.target.value);
  };

  const handleReturnChange = (event) => {
    setReturnable(event.target.value);
  };
  const handleDeliveryChange = (event) => {
    setDeliveryChecked(event.target.checked);
  };

  const handleSelfPickupChange = (event) => {
    setSelfPickupChecked(event.target.checked);
  };
  const handleLocationChange = (e) => {
    setLocationAvailability(e.target.value);
  };

  return (
    <>
      <Container>
        <Typography variant="h4" gutterBottom>
          Store Details
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <FormLabel>Product</FormLabel>
                <select
                  placeholder="Choose your Product"
                  onChange={(e) => setProduct(e.target.value)}
                  value={product}
                  style={{ width: "100%", padding: "10px" }}
                >
                  <option value="">Select a product</option>
                  <option value="Grocery">Grocery</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Food">Food</option>
                  <option value="Logistic">Logistic</option>
                </select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Location Availability</FormLabel>
                <RadioGroup
                  row
                  aria-label="location-availability"
                  name="location-availability"
                  value={locationAvailability}
                  onChange={handleLocationChange}
                >
                  <FormControlLabel
                    value="PAN india"
                    control={<Radio />}
                    label="PAN India"
                  />
                  <FormControlLabel
                    value="City"
                    control={<Radio />}
                    label="City"
                  />
                  <FormControlLabel
                    value="Radius"
                    control={<Radio />}
                    label="Radius"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            {locationAvailability === "City" && (
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <FormLabel>Select Cities </FormLabel>
                  <select
                    placeholder="Choose your city"
                    onChange={(e) => setCites(e.target.value)}
                    value={cites}
                    style={{ width: "100%", padding: "10px" }}
                  >
                    <option value="">Select a City</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Pune">Pune</option>
                    <option value="Noida">Noida</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Bengaluru">Bengaluru</option>
                  </select>
                </FormControl>
              </Grid>
            )}
            {locationAvailability === "Radius" && (
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Serviceable Radius/Circle (in Kilometer)"
                  name="serviceableRadius"
                  value={serviceableRadius}
                  onChange={(e) => setServiceableRadius(e.target.value)}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Default Cancellable Setting
                </FormLabel>
                <RadioGroup
                  row
                  aria-label="cancel"
                  name="cancel"
                  value={cancel}
                  onChange={handleCancelChange}
                >
                  <FormControlLabel
                    value="Cancellable"
                    control={<Radio />}
                    label="Cancellable"
                  />
                  <FormControlLabel
                    value="Non-Cancellable"
                    control={<Radio />}
                    label="Non-Cancellable"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Default Returnable Setting
                </FormLabel>
                <RadioGroup
                  row
                  aria-label="returnable"
                  name="returnable"
                  value={returnable}
                  onChange={handleReturnChange}
                >
                  <FormControlLabel
                    value="Returnable"
                    control={<Radio />}
                    label="Returnable"
                  />
                  <FormControlLabel
                    value="Non-Returnable"
                    control={<Radio />}
                    label="Non-Returnable"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Country"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="State"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="City"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Building"
                name="building"
                value={building}
                onChange={(e) => setBuilding(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Pin Code"
                name="pinCode"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Locality"
                name="locality"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="file"
                required
                label="Logo URL"
                name="logo"
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
              />
            </Grid>

            <Typography variant="h4" gutterBottom textAlign="center">
              Logistics Details
            </Typography>

            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Network Logistics</FormLabel>
                <RadioGroup
                  row
                  aria-label="Network Logistics"
                  name="networkLogistics"
                  value={networkLogistics}
                  onChange={handleNetworkLogistics}
                >
                  <FormControlLabel value="on" control={<Radio />} label="On" />
                  <FormControlLabel
                    value="off"
                    control={<Radio />}
                    label="Off"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <FormLabel>Logistics Delivery Type</FormLabel>
                <select
                  placeholder="Choose your Product"
                  onChange={(e) => setLogisticsDeliveryType(e.target.value)}
                  value={logisticsDeliveryType}
                  style={{ width: "100%", padding: "10px" }}
                >
                  <option value="">Select a delivery type</option>
                  <option value="Express">Express</option>
                  <option value="Standard">Standard</option>
                </select>
              </FormControl>
            </Grid>

            {networkLogistics === "on" ? (
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Logistics Bpp Id"
                  name="logisticsBppId"
                  value={logisticsBppId}
                  onChange={(e) => setLogisticsBppId(e.target.value)}
                />
              </Grid>
            ) : (
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Delivery Time"
                  name="deliveryTime"
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                />
              </Grid>
            )}

            <Typography variant="h4" gutterBottom textAlign="center">
              Supported Fulfillments
            </Typography>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={deliveryChecked}
                      onChange={handleDeliveryChange}
                    />
                  }
                  label="Delivery"
                  value="delivery"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selfPickupChecked}
                      onChange={handleSelfPickupChange}
                    />
                  }
                  label="Self Pickup"
                  value="selfPickup"
                />
              </FormGroup>

              {deliveryChecked ? (
                <>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Delivery Email"
                      name="deliveryEmail"
                      value={deliveryEmail}
                      onChange={(e) => setDeliveryEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Delivery Contact Number"
                      name="deliveryContactNumber"
                      value={deliveryContactNumber}
                      onChange={(e) => setDeliveryContactNumber(e.target.value)}
                    />
                  </Grid>
                </>
              ) : null}

              {selfPickupChecked ? (
                <>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Self Pickup Email"
                      name="selfPickupEmail"
                      value={selfPickupEmail}
                      onChange={(e) => setSelfPickupEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Self Pickup Contact Number"
                      name="selfPickupContactNumber"
                      value={selfPickupContactNumber}
                      onChange={(e) =>
                        setSelfPickupContactNumber(e.target.value)
                      }
                    />
                  </Grid>
                </>
              ) : null}
            </Grid>
            <Grid>
              <StoreTiming />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained">
            Update
          </Button>
        </form>
      </Container>
    </>
  );
}
