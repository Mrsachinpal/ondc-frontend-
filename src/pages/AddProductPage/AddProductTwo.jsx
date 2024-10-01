import React, { useState } from 'react';
import {
  TextField,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Button,
  Grid,
  InputLabel,
  Typography
} from '@mui/material';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

const AddProductTwo = () => {
  const [formData, setFormData] = useState({
    commonDetails:{
      productCode: '',
      productName: '',
      HSNCode: '',
      timing:[],
      fulfillmentId: '',
      fulfillmentOption: '',
      GST_Percentage: "",
      productCategory: '',
      productSubCategory1: '',
      productSubCategory2: '',
      productSubCategory3: '',
      maxAllowedQty: "",
      countryOfOrigin: '',
      packQty: "",
      UOM: '',
      UOMValue: '',
      length: '',
      breadth: '',
      height: '',
      weight: '',
      isReturnable: '',
      returnWindow: '',
      isVegetarian: '',
      manufactureName: '',
      manufactureDate: '',
      nutritionalInfo: '',
      additiveInfo: '',
      instructions: '',
      isCancellable: '',
      availableOnCOD: '',
      longDescription: '',
      description: '',
      manufactureOrPackerName: '',
      manufactureOrPackerAddress: '',
      commonOrGenericNameOfCommodity: '',
      monthYearOfManufacturePackingImport: '',
      importFSSAILicenseNo: '',
      brandOwnerFSSAILicenseNo: '',
      quantity: "",
      MRP: "",
      purchasePrice: "",
      barcode: "",
      images: "",  
      vegNonVeg: ''
    }  
  });

  const navigate = useNavigate('')
  const handleChange = (e) => {
  const { name, value, type, files } = e.target;
  
  if (type === 'file') {
   
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: files[0]?.name || null  
    }));
  } else {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
     console.log(formData);
     
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key] !== null && formData[key] !== '') {
        formDataToSend.append(key, formData[key]);
      }
    });
 
    try {
      const token = Cookies.get("token");
        console.log(token);
        
      const response = await fetch("http://localhost:8080/product/ProductCreate", {
        method: "POST",
        headers: {
          "authorization": `${token}`
        },
        body: formDataToSend
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        console.log("Successfully added");
      } else {
        console.log("Failed to add");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ marginBottom: '16px' }}>
        <Button variant='outlined'   onClick={()=>navigate('/inventory')}>Back</Button>
      </div>
      <div style={{ marginBottom: '16px' }}>
        <Typography variant="h6">Add Product</Typography>
      </div>
      <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button
          variant="outlined"
          color="primary"
          style={{ marginRight: '16px' }}
        >
          PRODUCT INFO
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Product Code"
              name="productCode"
              value={formData.productCode}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Product Name"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="HSN Code"
              name="HSNCode"
              value={formData.HSNCode}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Fulfillment ID"
              name="fulfillmentId"
              value={formData.fulfillmentId}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>GST Percentage</InputLabel>
              <Select
                name="GST_Percentage"
                value={formData.GST_Percentage}
                onChange={handleChange}
              >
                <MenuItem value={0}>0%</MenuItem>
                <MenuItem value={3}>3%</MenuItem>
                <MenuItem value={5}>5%</MenuItem>
                <MenuItem value={12}>12%</MenuItem>
                <MenuItem value={18}>18%</MenuItem>
                <MenuItem value={28}>28%</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Product Category"
              name="productCategory"
              value={formData.productCategory}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Product Sub-Category 1"
              name="productSubCategory1"
              value={formData.productSubCategory1}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Product Sub-Category 2"
              name="productSubCategory2"
              value={formData.productSubCategory2}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Product Sub-Category 3"
              name="productSubCategory3"
              value={formData.productSubCategory3}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Max Allowed Qty"
              name="maxAllowedQty"
              type="number"
              value={formData.maxAllowedQty}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Country Of Origin</InputLabel>
              <Select
                name="countryOfOrigin"
                value={formData.countryOfOrigin}
                onChange={handleChange}
              >
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
                <MenuItem value="IND">India</MenuItem>
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
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Pack Qty"
              name="packQty"
              type="number"
              value={formData.packQty}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="UOM"
              name="UOM"
              value={formData.UOM}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="UOM Value"
              name="UOMValue"
              value={formData.UOMValue}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Length"
              name="length"
              value={formData.length}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="timing"
              name="timing"
              value={formData.timing}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Breadth"
              name="breadth"
              value={formData.breadth}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="full fillment Options "
              name="fulfillmentOption"
              value={formData.fulfillmentOption}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Is Returnable</FormLabel>
              <RadioGroup
                name="isReturnable"
                value={formData.isReturnable}
                onChange={handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Return Window"
              name="returnWindow"
              value={formData.returnWindow}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Is Vegetarian</FormLabel>
              <RadioGroup
                name="isVegetarian"
                value={formData.isVegetarian}
                onChange={handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Manufacture Name"
              name="manufactureName"
              value={formData.manufactureName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Manufacture Date"
              name="manufactureDate"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formData.manufactureDate}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Nutritional Info"
              name="nutritionalInfo"
              value={formData.nutritionalInfo}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Additive Info"
              name="additiveInfo"
              value={formData.additiveInfo}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Instructions"
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Is Cancellable</FormLabel>
              <RadioGroup
                name="isCancellable"
                value={formData.isCancellable}
                onChange={handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Available On COD</FormLabel>
              <RadioGroup
                name="availableOnCOD"
                value={formData.availableOnCOD}
                onChange={handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Long Description"
              name="longDescription"
              multiline
              rows={2}
              value={formData.longDescription}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              name="description"
              multiline
              rows={2}
              value={formData.description}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Manufacture or Packer Name"
              name="manufactureOrPackerName"
              value={formData.manufactureOrPackerName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Manufacture or Packer Address"
              name="manufactureOrPackerAddress"
              value={formData.manufactureOrPackerAddress}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Common or Generic Name of Commodity"
              name="commonOrGenericNameOfCommodity"
              value={formData.commonOrGenericNameOfCommodity}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Month/Year of Manufacture/Packing/Import"
              name="monthYearOfManufacturePackingImport"
              value={formData.monthYearOfManufacturePackingImport}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
     
          {/* <Grid item xs={12}>
          <TextField
            fullWidth
            required
            name="monthYear"
            label="Month Year Of Manufacture Packing Import"
            placeholder="MM/YYYY"
            value={formData.monthYearOfManufacturePackingImport}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid> */}
          
          <Grid item xs={12}>
            <TextField
              label="Import FSSAI License No"
              name="importFSSAILicenseNo"
              value={formData.importFSSAILicenseNo}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Brand Owner FSSAI License No"
              name="brandOwnerFSSAILicenseNo"
              value={formData.brandOwnerFSSAILicenseNo}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Quantity"
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="MRP"
              name="MRP"
              type="number"
              value={formData.MRP}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Purchase Price"
              name="purchasePrice"
              type="number"
              value={formData.purchasePrice}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Barcode"
              name="barcode"
              value={formData.barcode}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Images"
              name="images"
              type="file"
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Veg/Non-Veg</FormLabel>
              <RadioGroup
                name="vegNonVeg"
                value={formData.vegNonVeg}
                onChange={handleChange}
              >
                <FormControlLabel value="VEG" control={<Radio />} label="Veg" />
                <FormControlLabel value="NON-VEG" control={<Radio />} label="Non-Veg" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddProductTwo;
