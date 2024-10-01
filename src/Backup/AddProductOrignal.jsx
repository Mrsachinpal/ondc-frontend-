import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function AddProductOrignal() {
  const [showVitalInfo, setShowVitalInfo] = useState(false);

  const [productCode, setProductCode] = useState("");
  const [productName, setProductName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [gstPercentage, setGstPercentage] = useState("");
  const [maxAllowedQuantity, setMaxAllowedQuantity] = useState("");
  const [length, setLength] = useState("");
  const [breadth, setBreadth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [returnWindow, setReturnWindow] = useState("");
  const [manufacturerName, setManufacturerName] = useState("");
  const [manufacturedDate, setManufacturedDate] = useState("");
  const [instructions, setInstructions] = useState("");
  const [returnable, setReturnable] = useState("");
  const [cancellable, setCancellable] = useState("");
  const [availableOnCashOnDelivery, setAvailableOnCashOnDelivery] =
    useState("");
  const [manufacturerOrPackerName, setManufacturerOrPackerName] = useState("");
  const [manufacturerOrPackerAddress, setManufacturerOrPackerAddress] =
    useState("");
  const [commonOrGenericNameOfCommodity, setCommonOrGenericNameOfCommodity] =
    useState("");
  const [
    monthYearOfManufacturePackingImpor,
    setMonthYearOfManufacturePackingImpor,
  ] = useState("");
  const [fulfilmentOption, setFulfilmentOption] = useState("");
  const [UOM, setUOM] = useState("");
  const [UOMvalue, setUOMvalue] = useState("");
  const [MRP, setMRP] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [SKU, setSKU] = useState("");
  const [image, setImage] = useState("");
  const [imageBack, setImageBack] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [colorName, setColorName] = useState("");
  const [material, setMaterial] = useState("");
  const [size, setSize] = useState("");
  const [vitalWeight, setVitalWeight] = useState("");
  const [vitalLength, setVitalLength] = useState("");
  const [vitalBreadth, setvitalBreadth] = useState("");
  const [vitalHeight, setvitalHeight] = useState("");
  const [model, setModel] = useState("");
  const [assembly, setAssembly] = useState("");
  const [care, setCare] = useState("");
  const [special, setSpecial] = useState("");
  const handleDateChange = (newDate) => {
    const formattedDate = newDate ? dayjs(newDate).format("MM/DD/YYYY") : "";
    setManufacturedDate(formattedDate);
  };

  const MonthAndyearhandleChange = (newDate) => {
    const formattedDate = newDate ? dayjs(newDate).format("MMMM YYYY") : "";
    setMonthYearOfManufacturePackingImpor(formattedDate);
  };

  const handleCountryOfOrigin = (e) => setCountryOfOrigin(e.target.value);

  const handleButtonClick = () => setShowVitalInfo(!showVitalInfo);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Product Code:", productCode);
    console.log("Product Name:", productName);
    console.log("Short Description:", shortDescription);
    console.log("Long Description:", longDescription);
    console.log("Country Of Origin:", countryOfOrigin);
    console.log("GST Percentage:", gstPercentage);
    console.log("Max Allowed Quantity:", maxAllowedQuantity);
    console.log("Length:", length);
    console.log("Breadth:", breadth);
    console.log("Height:", height);
    console.log("Weight:", weight);
    console.log("Return Window:", returnWindow);
    console.log("Manufacturer Name:", manufacturerName);
    console.log("Instructions:", instructions);
    console.log("Returnable:", returnable);
    console.log("Cancellable:", cancellable);
    console.log("Available On Cash On Delivery:", availableOnCashOnDelivery);
    console.log("Manufacturer Or Packer Name:", manufacturerOrPackerName);
    console.log("Manufacturer Or Packer Address:", manufacturerOrPackerAddress);
    console.log(
      "Common Or Generic Name Of Commodity:",
      commonOrGenericNameOfCommodity
    );
    console.log("Fulfilment Option:", fulfilmentOption);
    console.log("UOM:", UOM);
    console.log("UOM Value:", UOMvalue);
    console.log("MRP:", MRP);
    console.log("Purchase Price:", purchasePrice);
    console.log("Quantity:", quantity);
    console.log("SKU:", SKU);
    console.log("Image:", image);
    console.log("Image Back:", imageBack);
    console.log("brand:", brand);
    console.log("color:", color);
    console.log("colorName:", colorName);
    console.log("material:", material);
    console.log("size:", size);
    console.log("vitalWeight:", vitalWeight);
    console.log("vitalLength:", vitalLength);
    console.log("vitalBreadth:", vitalBreadth);
    console.log("vitalHeight:", vitalHeight);
    console.log("model:", model);
    console.log("assembly:", assembly);
    console.log("care:", care);
    console.log("special:", special);
  };

  return (
    <div
      style={{
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <Button variant="contained" color="primary">
          Back
        </Button>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <Typography variant="h6">Add Product</Typography>
      </div>
      <div
        style={{
          marginBottom: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          style={{ marginRight: "16px" }}
          onClick={() => setShowVitalInfo(false)}
        >
          PRODUCT INFO
        </Button>
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          VITAL INFO
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        {!showVitalInfo ? (
          <>
            <Grid item xs={12}>
              <Typography>
                Product Code (EAN / ISBN / GTIN / HSN / Others)
              </Typography>
              <TextField
                label="Product code"
                fullWidth
                variant="outlined"
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Product Name</Typography>
              <TextField
                label="Product Name"
                fullWidth
                variant="outlined"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Short Description</Typography>
              <TextField
                label="Short Discription"
                fullWidth
                variant="outlined"
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Long Description</Typography>
              <TextField
                label="Long Description "
                fullWidth
                variant="outlined"
                value={longDescription}
                onChange={(e) => setLongDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Country Of Origin</Typography>
              <Select
                fullWidth
                value={countryOfOrigin}
                onChange={handleCountryOfOrigin}
                displayEmpty
                variant="outlined"
              >
                <MenuItem value="" disabled>
                  Select Country
                </MenuItem>
                <MenuItem value="AF">Afghanistan</MenuItem>
                <MenuItem value="AL">Albania</MenuItem>
                <MenuItem value="DZ">Algeria</MenuItem>
                <MenuItem value="AS">American Samoa</MenuItem>
                <MenuItem value="AD">Andorra</MenuItem>
                <MenuItem value="AO">Angola</MenuItem>
                <MenuItem value="AI">Anguilla</MenuItem>
                <MenuItem value="AG">Antigua and Barbuda</MenuItem>
                <MenuItem value="AR">Argentina</MenuItem>
                <MenuItem value="AM">Armenia</MenuItem>
                <MenuItem value="AW">Aruba</MenuItem>
                <MenuItem value="AU">Australia</MenuItem>
                <MenuItem value="AT">Austria</MenuItem>
                <MenuItem value="AZ">Azerbaijan</MenuItem>
                <MenuItem value="BS">Bahamas</MenuItem>
                <MenuItem value="BH">Bahrain</MenuItem>
                <MenuItem value="BD">Bangladesh</MenuItem>
                <MenuItem value="BB">Barbados</MenuItem>
                <MenuItem value="BY">Belarus</MenuItem>
                <MenuItem value="BE">Belgium</MenuItem>
                <MenuItem value="BZ">Belize</MenuItem>
                <MenuItem value="BJ">Benin</MenuItem>
                <MenuItem value="BM">Bermuda</MenuItem>
                <MenuItem value="BT">Bhutan</MenuItem>
                <MenuItem value="BO">Bolivia</MenuItem>
                <MenuItem value="BQ">Bonaire, Sint Eustatius and Saba</MenuItem>
                <MenuItem value="BA">Bosnia and Herzegovina</MenuItem>
                <MenuItem value="BW">Botswana</MenuItem>
                <MenuItem value="BV">Bouvet Island</MenuItem>
                <MenuItem value="BR">Brazil</MenuItem>
                <MenuItem value="IO">British Indian Ocean Territory</MenuItem>
                <MenuItem value="BN">Brunei Darussalam</MenuItem>
                <MenuItem value="BG">Bulgaria</MenuItem>
                <MenuItem value="BF">Burkina Faso</MenuItem>
                <MenuItem value="BI">Burundi</MenuItem>
                <MenuItem value="CV">Cabo Verde</MenuItem>
                <MenuItem value="KH">Cambodia</MenuItem>
                <MenuItem value="CM">Cameroon</MenuItem>
                <MenuItem value="CA">Canada</MenuItem>
                <MenuItem value="KY">Cayman Islands</MenuItem>
                <MenuItem value="CF">Central African Republic</MenuItem>
                <MenuItem value="TD">Chad</MenuItem>
                <MenuItem value="CL">Chile</MenuItem>
                <MenuItem value="CN">China</MenuItem>
                <MenuItem value="CX">Christmas Island</MenuItem>
                <MenuItem value="CC">Cocos (Keeling) Islands</MenuItem>
                <MenuItem value="CO">Colombia</MenuItem>
                <MenuItem value="KM">Comoros</MenuItem>
                <MenuItem value="CG">Congo</MenuItem>
                <MenuItem value="CD">
                  Congo, Democratic Republic of the
                </MenuItem>
                <MenuItem value="CK">Cook Islands</MenuItem>
                <MenuItem value="CR">Costa Rica</MenuItem>
                <MenuItem value="CI">Côte dIvoire</MenuItem>
                <MenuItem value="HR">Croatia</MenuItem>
                <MenuItem value="CU">Cuba</MenuItem>
                <MenuItem value="CW">Curaçao</MenuItem>
                <MenuItem value="CY">Cyprus</MenuItem>
                <MenuItem value="CZ">Czech Republic</MenuItem>
                <MenuItem value="DK">Denmark</MenuItem>
                <MenuItem value="DJ">Djibouti</MenuItem>
                <MenuItem value="DM">Dominica</MenuItem>
                <MenuItem value="DO">Dominican Republic</MenuItem>
                <MenuItem value="EC">Ecuador</MenuItem>
                <MenuItem value="EG">Egypt</MenuItem>
                <MenuItem value="SV">El Salvador</MenuItem>
                <MenuItem value="GQ">Equatorial Guinea</MenuItem>
                <MenuItem value="ER">Eritrea</MenuItem>
                <MenuItem value="EE">Estonia</MenuItem>
                <MenuItem value="SZ">Eswatini</MenuItem>
                <MenuItem value="ET">Ethiopia</MenuItem>
                <MenuItem value="FK">Falkland Islands (Malvinas)</MenuItem>
                <MenuItem value="FO">Faroe Islands</MenuItem>
                <MenuItem value="FJ">Fiji</MenuItem>
                <MenuItem value="FI">Finland</MenuItem>
                <MenuItem value="FR">France</MenuItem>
                <MenuItem value="GF">French Guiana</MenuItem>
                <MenuItem value="PF">French Polynesia</MenuItem>
                <MenuItem value="TF">French Southern Territories</MenuItem>
                <MenuItem value="GA">Gabon</MenuItem>
                <MenuItem value="GM">Gambia</MenuItem>
                <MenuItem value="GE">Georgia</MenuItem>
                <MenuItem value="DE">Germany</MenuItem>
                <MenuItem value="GH">Ghana</MenuItem>
                <MenuItem value="GI">Gibraltar</MenuItem>
                <MenuItem value="GR">Greece</MenuItem>
                <MenuItem value="GL">Greenland</MenuItem>
                <MenuItem value="GD">Grenada</MenuItem>
                <MenuItem value="GP">Guadeloupe</MenuItem>
                <MenuItem value="GU">Guam</MenuItem>
                <MenuItem value="GT">Guatemala</MenuItem>
                <MenuItem value="GG">Guernsey</MenuItem>
                <MenuItem value="GN">Guinea</MenuItem>
                <MenuItem value="GW">Guinea-Bissau</MenuItem>
                <MenuItem value="GY">Guyana</MenuItem>
                <MenuItem value="HT">Haiti</MenuItem>
                <MenuItem value="HM">
                  Heard Island and McDonald Islands
                </MenuItem>
                <MenuItem value="VA">Holy See</MenuItem>
                <MenuItem value="HN">Honduras</MenuItem>
                <MenuItem value="HK">Hong Kong</MenuItem>
                <MenuItem value="HU">Hungary</MenuItem>
                <MenuItem value="IS">Iceland</MenuItem>
                <MenuItem value="IN">India</MenuItem>
                <MenuItem value="ID">Indonesia</MenuItem>
                <MenuItem value="IR">Iran</MenuItem>
                <MenuItem value="IQ">Iraq</MenuItem>
                <MenuItem value="IE">Ireland</MenuItem>
                <MenuItem value="IM">Isle of Man</MenuItem>
                <MenuItem value="IL">Israel</MenuItem>
                <MenuItem value="IT">Italy</MenuItem>
                <MenuItem value="JE">Jersey</MenuItem>
                <MenuItem value="JO">Jordan</MenuItem>
                <MenuItem value="KZ">Kazakhstan</MenuItem>
                <MenuItem value="KE">Kenya</MenuItem>
                <MenuItem value="KI">Kiribati</MenuItem>
                <MenuItem value="KP">
                  Korea, Democratic People s Republic of
                </MenuItem>
                <MenuItem value="KR">Korea, Republic of</MenuItem>
                <MenuItem value="KW">Kuwait</MenuItem>
                <MenuItem value="KG">Kyrgyzstan</MenuItem>
                <MenuItem value="LA">Lao People s Democratic Republic</MenuItem>
                <MenuItem value="LV">Latvia</MenuItem>
                <MenuItem value="LB">Lebanon</MenuItem>
                <MenuItem value="LS">Lesotho</MenuItem>
                <MenuItem value="LR">Liberia</MenuItem>
                <MenuItem value="LY">Libya</MenuItem>
                <MenuItem value="LI">Liechtenstein</MenuItem>
                <MenuItem value="LT">Lithuania</MenuItem>
                <MenuItem value="LU">Luxembourg</MenuItem>
                <MenuItem value="MO">Macao</MenuItem>
                <MenuItem value="MG">Madagascar</MenuItem>
                <MenuItem value="MW">Malawi</MenuItem>
                <MenuItem value="MY">Malaysia</MenuItem>
                <MenuItem value="MV">Maldives</MenuItem>
                <MenuItem value="ML">Mali</MenuItem>
                <MenuItem value="MT">Malta</MenuItem>
                <MenuItem value="MH">Marshall Islands</MenuItem>
                <MenuItem value="MQ">Martinique</MenuItem>
                <MenuItem value="MR">Mauritania</MenuItem>
                <MenuItem value="MU">Mauritius</MenuItem>
                <MenuItem value="YT">Mayotte</MenuItem>
                <MenuItem value="MX">Mexico</MenuItem>
                <MenuItem value="FM">Micronesia (Federated States of)</MenuItem>
                <MenuItem value="MD">Moldova</MenuItem>
                <MenuItem value="MC">Monaco</MenuItem>
                <MenuItem value="MN">Mongolia</MenuItem>
                <MenuItem value="ME">Montenegro</MenuItem>
                <MenuItem value="MS">Montserrat</MenuItem>
                <MenuItem value="MA">Morocco</MenuItem>
                <MenuItem value="MZ">Mozambique</MenuItem>
                <MenuItem value="MM">Myanmar</MenuItem>
                <MenuItem value="NA">Namibia</MenuItem>
                <MenuItem value="NR">Nauru</MenuItem>
                <MenuItem value="NP">Nepal</MenuItem>
                <MenuItem value="NL">Netherlands</MenuItem>
                <MenuItem value="NC">New Caledonia</MenuItem>
                <MenuItem value="NZ">New Zealand</MenuItem>
                <MenuItem value="NI">Nicaragua</MenuItem>
                <MenuItem value="NE">Niger</MenuItem>
                <MenuItem value="NG">Nigeria</MenuItem>
                <MenuItem value="NU">Niue</MenuItem>
                <MenuItem value="NF">Norfolk Island</MenuItem>
                <MenuItem value="MP">Northern Mariana Islands</MenuItem>
                <MenuItem value="NO">Norway</MenuItem>
                <MenuItem value="OM">Oman</MenuItem>
                <MenuItem value="PK">Pakistan</MenuItem>
                <MenuItem value="PW">Palau</MenuItem>
                <MenuItem value="PS">Palestine, State of</MenuItem>
                <MenuItem value="PA">Panama</MenuItem>
                <MenuItem value="PG">Papua New Guinea</MenuItem>
                <MenuItem value="PY">Paraguay</MenuItem>
                <MenuItem value="PE">Peru</MenuItem>
                <MenuItem value="PH">Philippines</MenuItem>
                <MenuItem value="PN">Pitcairn</MenuItem>
                <MenuItem value="PL">Poland</MenuItem>
                <MenuItem value="PT">Portugal</MenuItem>
                <MenuItem value="PR">Puerto Rico</MenuItem>
                <MenuItem value="QA">Qatar</MenuItem>
                <MenuItem value="RE">Réunion</MenuItem>
                <MenuItem value="RO">Romania</MenuItem>
                <MenuItem value="RU">Russian Federation</MenuItem>
                <MenuItem value="RW">Rwanda</MenuItem>
                <MenuItem value="BL">Saint Barthélemy</MenuItem>
                <MenuItem value="SH">
                  Saint Helena, Ascension and Tristan da Cunha
                </MenuItem>
                <MenuItem value="KN">Saint Kitts and Nevis</MenuItem>
                <MenuItem value="LC">Saint Lucia</MenuItem>
                <MenuItem value="MF">Saint Martin</MenuItem>
                <MenuItem value="PM">Saint Pierre and Miquelon</MenuItem>
                <MenuItem value="VC">Saint Vincent and the Grenadines</MenuItem>
                <MenuItem value="WS">Samoa</MenuItem>
                <MenuItem value="SM">San Marino</MenuItem>
                <MenuItem value="SA">Saudi Arabia</MenuItem>
                <MenuItem value="SN">Senegal</MenuItem>
                <MenuItem value="RS">Serbia</MenuItem>
                <MenuItem value="SC">Seychelles</MenuItem>
                <MenuItem value="SL">Sierra Leone</MenuItem>
                <MenuItem value="SG">Singapore</MenuItem>
                <MenuItem value="SX">Sint Maarten (Dutch part)</MenuItem>
                <MenuItem value="SK">Slovakia</MenuItem>
                <MenuItem value="SI">Slovenia</MenuItem>
                <MenuItem value="SB">Solomon Islands</MenuItem>
                <MenuItem value="SO">Somalia</MenuItem>
                <MenuItem value="ZA">South Africa</MenuItem>
                <MenuItem value="GS">
                  South Georgia and the South Sandwich Islands
                </MenuItem>
                <MenuItem value="SS">South Sudan</MenuItem>
                <MenuItem value="ES">Spain</MenuItem>
                <MenuItem value="LK">Sri Lanka</MenuItem>
                <MenuItem value="SD">Sudan</MenuItem>
                <MenuItem value="SR">Suriname</MenuItem>
                <MenuItem value="SJ">Svalbard and Jan Mayen</MenuItem>
                <MenuItem value="SZ">Eswatini</MenuItem>
                <MenuItem value="SE">Sweden</MenuItem>
                <MenuItem value="CH">Switzerland</MenuItem>
                <MenuItem value="SY">Syrian Arab Republic</MenuItem>
                <MenuItem value="TW">Taiwan</MenuItem>
                <MenuItem value="TJ">Tajikistan</MenuItem>
                <MenuItem value="TZ">Tanzania</MenuItem>
                <MenuItem value="TH">Thailand</MenuItem>
                <MenuItem value="TL">Timor-Leste</MenuItem>
                <MenuItem value="TG">Togo</MenuItem>
                <MenuItem value="TK">Tokelau</MenuItem>
                <MenuItem value="TO">Tonga</MenuItem>
                <MenuItem value="TT">Trinidad and Tobago</MenuItem>
                <MenuItem value="TN">Tunisia</MenuItem>
                <MenuItem value="TR">Turkey</MenuItem>
                <MenuItem value="TM">Turkmenistan</MenuItem>
                <MenuItem value="TC">Turks and Caicos Islands</MenuItem>
                <MenuItem value="TV">Tuvalu</MenuItem>
                <MenuItem value="UG">Uganda</MenuItem>
                <MenuItem value="UA">Ukraine</MenuItem>
                <MenuItem value="AE">United Arab Emirates</MenuItem>
                <MenuItem value="GB">United Kingdom</MenuItem>
                <MenuItem value="US">United States</MenuItem>
                <MenuItem value="UM">
                  United States Minor Outlying Islands
                </MenuItem>
                <MenuItem value="UY">Uruguay</MenuItem>
                <MenuItem value="UZ">Uzbekistan</MenuItem>
                <MenuItem value="VU">Vanuatu</MenuItem>
                <MenuItem value="VE">Venezuela</MenuItem>
                <MenuItem value="VN">Viet Nam</MenuItem>
                <MenuItem value="VG">Virgin Islands, British</MenuItem>
                <MenuItem value="VI">Virgin Islands, U.S.</MenuItem>
                <MenuItem value="WF">Wallis and Futuna</MenuItem>
                <MenuItem value="EH">Western Sahara</MenuItem>
                <MenuItem value="YE">Yemen</MenuItem>
                <MenuItem value="ZM">Zambia</MenuItem>
                <MenuItem value="ZW">Zimbabwe</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Select
                fullWidth
                value={gstPercentage}
                onChange={(e) => setGstPercentage(e.target.value)}
                displayEmpty
                variant="outlined"
              >
                <MenuItem value="" disabled>
                  Select GST Percentage
                </MenuItem>
                <MenuItem value={0}>0%</MenuItem>
                <MenuItem value={5}>5%</MenuItem>
                <MenuItem value={12}>12%</MenuItem>
                <MenuItem value={18}>18%</MenuItem>
                <MenuItem value={28}>28%</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Typography>Max Allowed Quantity</Typography>
              <TextField
                placeholder="Max Allowed Quantity"
                variant="outlined"
                fullWidth
                value={maxAllowedQuantity}
                onChange={(e) => setMaxAllowedQuantity(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Length(cm)</Typography>
              <TextField
                label="Length  "
                fullWidth
                variant="outlined"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Breadth(cm)</Typography>
              <TextField
                label="Breadth "
                fullWidth
                variant="outlined"
                value={breadth}
                onChange={(e) => setBreadth(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Height(cm)</Typography>
              <TextField
                label="Height "
                fullWidth
                variant="outlined"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Weight</Typography>
              <TextField
                label="Weight"
                fullWidth
                variant="outlined"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Return Window (in hours)</Typography>
              <TextField
                label="Return Window  "
                fullWidth
                variant="outlined"
                value={returnWindow}
                onChange={(e) => setReturnWindow(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Manufacturer Name</Typography>
              <TextField
                label="Manufacturer Name  "
                fullWidth
                variant="outlined"
                value={manufacturerName}
                onChange={(e) => setManufacturerName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography>Manufactured Date </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Select a date"
                  value={
                    manufacturedDate
                      ? dayjs(manufacturedDate, "MM/DD/YYYY")
                      : null
                  }
                  onChange={(newDate) => handleDateChange(newDate)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      helperText="Format: MM/DD/YYYY"
                      fullWidth
                    />
                  )}
                  sx={{ width: "100%" }}
                />
              </LocalizationProvider>

              <Grid item xs={12}></Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography>Instructions</Typography>
              <TextField
                label="Instructions "
                fullWidth
                variant="outlined"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Returnable</FormLabel>
                <RadioGroup
                  row
                  aria-label=""
                  name="returnable"
                  value={returnable}
                  onChange={(e) => setReturnable(e.target.value)}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="NO" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Cancellable</FormLabel>
                <RadioGroup
                  row
                  aria-label=""
                  name="cancellable"
                  value={cancellable}
                  onChange={(e) => setCancellable(e.target.value)}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="NO" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Available On Cash On Delivery{" "}
                </FormLabel>
                <RadioGroup
                  row
                  aria-label=""
                  name="availableOnCashOnDelivery "
                  value={availableOnCashOnDelivery}
                  onChange={(e) => setAvailableOnCashOnDelivery(e.target.value)}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="NO" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography>Manufacturer Or Packer Name</Typography>
              <TextField
                placeholder="Manufacturer Or Packer Name"
                fullWidth
                variant="outlined"
                value={manufacturerOrPackerName}
                onChange={(e) => setManufacturerOrPackerName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Manufacturer Or Packer Address </Typography>
              <TextField
                placeholder="Manufacturer Or Packer Address "
                fullWidth
                variant="outlined"
                value={manufacturerOrPackerAddress}
                onChange={(e) => setManufacturerOrPackerAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Common Or Generic Name Of Commodity </Typography>
              <TextField
                placeholder="Common Or Generic Name Of Commodity  "
                fullWidth
                variant="outlined"
                value={commonOrGenericNameOfCommodity}
                onChange={(e) =>
                  setCommonOrGenericNameOfCommodity(e.target.value)
                }
              />
            </Grid>

            <Grid >
              <Grid item xs={12}>
                <Typography>
                  Month Year Of Manufacture Packing Import *
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    views={["month", "year"]}
                    label="Select Month and Year"
                    value={
                      monthYearOfManufacturePackingImpor
                        ? dayjs(monthYearOfManufacturePackingImpor, "MMMM YYYY")
                        : null
                    }
                    onChange={(newDate) => MonthAndyearhandleChange(newDate)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        helperText="Format: Month YYYY"
                        fullWidth
                      />
                    )}
                    sx={{ width: "100%" }}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography>Fulfilment Option</Typography>
              <Select
                fullWidth
                value={fulfilmentOption}
                onChange={(e) => setFulfilmentOption(e.target.value)}
                displayEmpty
                variant="outlined"
              >
                <MenuItem value="" disabled>
                  FulfilmentOption
                </MenuItem>
                <MenuItem value="delivery">Delivery</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12}>
              <Typography>UOM</Typography>
              <Select
                fullWidth
                value={UOM}
                onChange={(e) => setUOM(e.target.value)}
                displayEmpty
                variant="outlined"
              >
                <MenuItem value="" disabled>
                  UOM
                </MenuItem>
                <MenuItem value="unit">unit</MenuItem>
                <MenuItem value="dozen">dozen</MenuItem>
                <MenuItem value="gram">gram</MenuItem>
                <MenuItem value="kilogram">kilogram</MenuItem>
                <MenuItem value="tonne">tonne</MenuItem>
                <MenuItem value="litre">litre</MenuItem>
                <MenuItem value="  millilitre"> millilitre</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12}>
              <Typography>UOM value</Typography>
              <TextField
                placeholder="UOM value "
                fullWidth
                variant="outlined"
                value={UOMvalue}
                onChange={(e) => setUOMvalue(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>MRP</Typography>
              <TextField
                placeholder="MRP "
                fullWidth
                variant="outlined"
                value={MRP}
                onChange={(e) => setMRP(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Purchase Price </Typography>
              <TextField
                placeholder="Purchase Price  "
                fullWidth
                variant="outlined"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Quantity </Typography>
              <TextField
                placeholder="0  "
                fullWidth
                variant="outlined"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography> SKU</Typography>
              <TextField
                placeholder="SKU  "
                fullWidth
                variant="outlined"
                value={SKU}
                onChange={(e) => setSKU(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Images (Select minimum 3 files with maximum size of 2Mb for each
                file){" "}
              </Typography>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0].name)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Image of back of the product *</Typography>
              <input
                type="file"
                onChange={(e) => setImageBack(e.target.files[0].name)}
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <Typography>Brand</Typography>
              <TextField
                placeholder="Brand  "
                fullWidth
                variant="outlined"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Colour</Typography>
              <TextField
                placeholder="Colour  "
                fullWidth
                variant="outlined"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Colour Name</Typography>
              <TextField
                placeholder="Colour Name "
                fullWidth
                variant="outlined"
                value={colorName}
                onChange={(e) => setColorName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Material </Typography>
              <TextField
                placeholder="Material "
                fullWidth
                variant="outlined"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Size </Typography>
              <TextField
                placeholder="Size "
                fullWidth
                variant="outlined"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Weight </Typography>
              <TextField
                placeholder="Weight "
                fullWidth
                variant="outlined"
                value={vitalWeight}
                onChange={(e) => setVitalWeight(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Length</Typography>
              <TextField
                placeholder="Length"
                fullWidth
                variant="outlined"
                value={vitalLength}
                onChange={(e) => setVitalLength(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Breadth</Typography>
              <TextField
                placeholder="Breadth"
                fullWidth
                variant="outlined"
                value={vitalBreadth}
                onChange={(e) => setvitalBreadth(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Height</Typography>
              <TextField
                placeholder="Height"
                fullWidth
                variant="outlined"
                value={vitalHeight}
                onChange={(e) => setvitalHeight(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Model</Typography>
              <TextField
                placeholder="Model"
                fullWidth
                variant="outlined"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Assembly Required</Typography>
              <TextField
                placeholder="Assembly "
                fullWidth
                variant="outlined"
                value={assembly}
                onChange={(e) => setAssembly(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography>Care Instructions</Typography>
              <TextField
                placeholder="Care Instructions "
                fullWidth
                variant="outlined"
                value={care}
                onChange={(e) => setCare(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Special Features</Typography>
              <TextField
                placeholder="Special Features"
                fullWidth
                variant="outlined"
                value={special}
                onChange={(e) => setSpecial(e.target.value)}
              />
            </Grid>
          </>
        )}

        {/* This is footer section  */}
        <Grid
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
          variant="contained"
          style={{ minHeight: "20vh" }}
         
        >
           <Button variant="contained" color="primary" type="submit" style={{ borderRadius: '8px' }}>
                        Save
                    </Button>
        </Grid>
        <Grid
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
          variant="contained"
          style={{ minHeight: "10vh" }}
        >
          <Grid>
            <Button variant="outlined">Cancel</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
