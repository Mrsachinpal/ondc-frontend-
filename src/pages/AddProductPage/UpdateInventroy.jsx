import React, { useState } from "react";
import { useEffect } from "react";
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
  Typography,
  // Card,
  // CardMedia,
  // IconButton,
  CircularProgress,
  Box,
} from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

import Cookies from "js-cookie";
import { useNavigate, useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import axios from "axios";
const UpdateInventroy = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    commonDetails: {
      productCode: "",
      productName: "",
      HSNCode: "",
      timing: [],
      fulfillmentId: "",
      fulfillmentOption: "", 
      GST_Percentage: "",
      productCategory: "",
      productSubcategory1: "",
      productSubcategory2: "",
      productSubcategory3: "",
      maxAllowedQty: "",
      countryOfOrigin: "",
      packQty: "",
      UOM: "",
      UOMValue: "",
      length: "",
      breadth: "",
      height: "",
      weight: "",
      isReturnable: false,
      returnWindow: "",  
      isVegetarian: false,
      manufactureName: "",
      manufactureDate: "",
      nutritionalInfo: "",
      additiveInfo: "",
      instructions: "",
      isCancellable: false,
      availableOnCOD: false,
      longDescription: "",
      description: "",
      manufactureOrPackerName: "",
      manufactureOrPackerAddress: "",
      commonOrGenericNameOfCommodity: "",
      monthYearOfManufacturePackingImport: "",
      importFSSAILicenseNo: "",
      brandOwnerFSSAILicenseNo: "",
      vegNonVeg:"",
    },
  });




  const navigate = useNavigate();

  // const [data, setData] = useState("");
 
  // const location = useLocation();
  // const { id } = location.state || {};
  const{id}= useParams()
  console.log("id is  ", id);
  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.get(
        `http://localhost:8080/product/getproduct/${id}`,
        {
          headers: {
            authorization: `${token}`,
          },
        }
      );
      const fetchedData = response.data;
      console.log("fetched data", fetchedData)

      // Update the formData state with the fetched data
      setFormData({
        commonDetails: {
          productCode: fetchedData.data.productCode || "",
          productName: fetchedData.data.productName || "",
          HSNCode: fetchedData.data.HSNCode || "",
          timing: fetchedData.data.timing || [],  // assuming timing is an array
          // images: fetchedData.images || [],  // assuming images is an array
          fulfillmentId: fetchedData.data.fulfillmentId|| "",
          fulfillmentOption:fetchedData.data.fulfillmentOption || "",
          GST_Percentage:fetchedData.data.GST_Percentage || "",
          productCategory: fetchedData.data.productCategory|| "",
          productSubcategory1: fetchedData.data.productSubcategory1 || "",
          productSubcategory2:fetchedData.data.productSubcategory2|| "",
          productSubcategory3: fetchedData.data.productSubcategory3 || "",
          maxAllowedQty: fetchedData.data.maxAllowedQty|| "",
          countryOfOrigin: fetchedData.data.countryOfOrigin || "",
          packQty: fetchedData.data.packQty|| "",
          UOM:fetchedData.data.UOM || "",
          UOMValue: fetchedData.data.UOMValue || "",
          length:fetchedData.data.length || "",
          breadth: fetchedData.data.breadth || "",
          height:fetchedData.data.height || "",
          weight: fetchedData.data.weight || "",
          isReturnable: fetchedData.data.isReturnable? "true":"false",
          returnWindow: fetchedData.data.returnWindow || "",
          isVegetarian: fetchedData.data.isVegetarian? "true":"false",
          manufactureName: fetchedData.data.manufactureName|| "",
          manufactureDate: fetchedData.data.manufactureDate || "",
          nutritionalInfo: fetchedData.data.nutritionalInfo || "",
          additiveInfo: fetchedData.data.additiveInfo || "",
          instructions: fetchedData.data.instructions || "",
          isCancellable: fetchedData.data.isCancellable? "true":"false",
          availableOnCOD: fetchedData.data.availableOnCOD? "true":"false",
          longDescription: fetchedData.data.longDescription|| "",
          description: fetchedData.data.description || "",
          manufactureOrPackerName: fetchedData.data.manufactureOrPackerName || "",
          manufactureOrPackerAddress: fetchedData.data.manufactureOrPackerAddress || "",
          commonOrGenericNameOfCommodity: fetchedData.data.commonOrGenericNameOfCommodity || "",
          monthYearOfManufacturePackingImport:fetchedData.data.monthYearOfManufacturePackingImport || "",
          importFSSAILicenseNo: fetchedData.data.importFSSAILicenseNo || "",
          brandOwnerFSSAILicenseNo: fetchedData.data.brandOwnerFSSAILicenseNo || "",
          // quantity: fetchedData.data.quantity || "",
          // MRP: fetchedData.data.MRP || "",
          // purchasePrice: fetchedData.data.purchasePrice || "",
          // barcode: fetchedData.data.barcode || "",
          vegNonVeg: fetchedData.data.vegNonVeg || "",
        },
      });
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id,]);

  console.log("formdata options line 156 ",formData);
  console.log("formdata id",formData.commonDetails.fulfillmentId);
  

  // console.log("product code ",data.data.productCode);
  // console.log(data);
  
 


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      commonDetails: {
        ...prevFormData.commonDetails,
        [name]: value,
      },
    }));
  };


  const handleChangeBool = (e) => {
    const { name, value } = e.target;
  
    // Convert the value to a boolean
    const newValue = value === 'true';
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      commonDetails: {
        ...prevFormData.commonDetails,
        [name]: newValue,
      },
    }));
  };



  const handleTimingChange = (index, event) => {
    const newTimings = [...formData.commonDetails.timing];
    newTimings[index] = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      commonDetails: {
        ...prevFormData.commonDetails,
        timing: newTimings,
      },
    }));
  };



  const addTimingField = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      commonDetails: {
        ...prevFormData.commonDetails,
        timing: [...prevFormData.commonDetails.timing, ""],
      },
    }));
  };





  const removeTimingField = (index) => {
    const newTimings = [...formData.commonDetails.timing];
    newTimings.splice(index, 1);
    setFormData((prevFormData) => ({
      ...prevFormData,
      commonDetails: {
        ...prevFormData.commonDetails,
        timing: newTimings,
      },
    }));
  };

  // const handleImageChange = (e) => {
  //   const files = Array.from(e.target.files); 
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     commonDetails: {
  //       ...prevFormData.commonDetails,
  //       images: [...prevFormData.commonDetails.images, ...files], // Append selected files to existing images array
  //     },
  //   }));
  // };

  // Remove image from the array
  // const removeImage = (index) => {
  //   const newImages = [...formData.commonDetails.images];
  //   newImages.splice(index, 1);
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     commonDetails: {
  //       ...prevFormData.commonDetails,
  //       images: newImages,
  //     },
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = Cookies.get("token");
      console.log(token);

      const response = await fetch(
         `http://localhost:8080/product/products/${id}`,
        {
          method: "put",
          headers: {
            "Content-Type": "application/json",
            authorization:`${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log("data ", data);

      if (data.message === "Successfully updated") {
        alert("Successfully added");
        console.log("Successfully added");
      }
      navigate("/inventory")
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
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
        <Button variant="outlined" onClick={() => navigate("/inventory")}>
          Back
        </Button>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <Typography variant="h6"> UPDATE  PRODUCT</Typography>
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
          color="primary"
          style={{ marginRight: "16px" }}
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
              value={formData.commonDetails.productCode}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Product Name"
              name="productName"
              value={formData.commonDetails.productName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="HSN Code"
              name="HSNCode"
              value={formData.commonDetails.HSNCode}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Fulfillment ID"
              name="fulfillmentId"
              value={formData.commonDetails.fulfillmentId}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>GST Percentage</InputLabel>
              <Select
                name="GST_Percentage"
                value={formData.commonDetails.GST_Percentage}
                onChange={handleChange}
                required
              >
                <MenuItem value={0}>0%</MenuItem>
                <MenuItem value={3}>3%</MenuItem>
                <MenuItem value={5}>5%</MenuItem>
                <MenuItem value={12}>12%</MenuItem>+
                <MenuItem value={18}>18%</MenuItem>
                <MenuItem value={28}>28%</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Product Category"
              name="productCategory"
              value={formData.commonDetails.productCategory}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Product Sub-Category 1"
              name="productSubcategory1"
              type="text"
              value={formData.commonDetails.productSubcategory1}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Product Sub-Category 2"
              name="productSubcategory2"
              type="text"
              value={formData.commonDetails.productSubcategory2}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Product Sub-Category 3"
              name="productSubcategory3"
              type="text"
              value={formData.commonDetails.productSubcategory3}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Country Of Origin</InputLabel>
              <Select
                name="countryOfOrigin"
                value={formData.commonDetails.countryOfOrigin}
                onChange={handleChange}
                required
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
              label="Max Allowed Qty"
              name="maxAllowedQty"
              type="number"
              value={formData.commonDetails.maxAllowedQty}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Pack Qty"
              name="packQty"
              type="number"
              value={formData.commonDetails.packQty}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="UOM"
              name="UOM"
              value={formData.commonDetails.UOM}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="UOM Value"
              name="UOMValue"
              value={formData.commonDetails.UOMValue}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Length"
              name="length"
              value={formData.commonDetails.length}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              label="timing"
              name="timing"
              type="array"
              value={formData.commonDetails.timing}
              onChange={handleChange}
              fullWidth
            />
          </Grid> */}

          <Grid item xs={12} sm={6}>
            <TextField
              label="Breadth"
              name="breadth"
              value={formData.commonDetails.breadth}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          
          <Grid item xs={12} sm={6}>
            <TextField
              label="Height"
              name="height"
              value={formData.commonDetails.height}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Weight"
              name="weight"
              value={formData.commonDetails.weight}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="full fillment Options "
              name="fulfillmentOption"
              value={formData.commonDetails.fulfillmentOption}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>


          <Grid item xs={12} sm={6}>
      <FormControl fullWidth required>
        <InputLabel id="return-window-label">Return Window</InputLabel>
        <Select
          labelId="return-window-label"
          name="returnWindow"
          value={formData.commonDetails.returnWindow}
          onChange={handleChange}
          label="Return Window"
        >
          <MenuItem value="P1D">P1D</MenuItem>
          <MenuItem value="P2D">P2D</MenuItem>
          <MenuItem value="P3D">P3D</MenuItem>
          <MenuItem value="P4D">P4D</MenuItem>
          <MenuItem value="P5D">P5D</MenuItem>
          <MenuItem value="P6D">P6D</MenuItem>
          <MenuItem value="P7D">P7D</MenuItem>
        </Select>
      </FormControl>
    </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Is Returnable</FormLabel>
              <RadioGroup
                name="isReturnable"
                value={formData.commonDetails.isReturnable}
                onChange={handleChangeBool}
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Timings</Typography>
            {formData.commonDetails.timing.map((time, index) => (
              <Grid
                container
                spacing={2}
                key={index}
                style={{ marginBottom: "15px" }}
              >
                <Grid item xs={10}>
                  <TextField
                    label={`Timing ${index + 1}`}
                    value={time}
                    type="time"
                    onChange={(e) => handleTimingChange(index, e)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => removeTimingField(index)}
                    disabled={formData.commonDetails.timing.length === 1}
                  >
                    Remove
                  </Button>
                </Grid>
              </Grid>
            ))}
            <Button
              variant="contained"
              color="primary"
              onClick={addTimingField}
              style={{ marginTop: "10px" }}
            >
              Add Timing
            </Button>
          </Grid>



          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Is Vegetarian</FormLabel>
              <RadioGroup
                name="isVegetarian"
                value={formData.commonDetails.isVegetarian}
                onChange={handleChangeBool}
                required
                type="boolian"
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false" 
               control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Veg/Non-Veg</FormLabel>
              <RadioGroup
                name="vegNonVeg"
                value={formData.commonDetails.vegNonVeg}
                onChange={handleChange}
                required
              >
                <FormControlLabel value="VEG" control={<Radio />} label="Veg" />
                <FormControlLabel
                  value="NONVEG"
                  control={<Radio />}
                  label="Non-Veg"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Manufacture Name"
              name="manufactureName"
              value={formData.commonDetails.manufactureName}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Manufacture Date"
              name="manufactureDate"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formData.commonDetails.manufactureDate}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>



          <Grid item xs={12} sm={6}>
            <TextField
              label="Nutritional Info"
              name="nutritionalInfo"
              value={formData.commonDetails.nutritionalInfo}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Additive Info"
              name="additiveInfo"
              value={formData.commonDetails.additiveInfo}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Instructions"
              name="instructions"
              value={formData.commonDetails.instructions}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Is Cancellable</FormLabel>
              <RadioGroup
                name="isCancellable"
                value={formData.commonDetails.isCancellable}
                onChange={handleChangeBool}
                required
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Available On COD</FormLabel>
              <RadioGroup
                name="availableOnCOD"
                value={formData.commonDetails.availableOnCOD}
                onChange={handleChangeBool}
                required
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Long Description"
              name="longDescription"
              multiline
              rows={2}
              value={formData.commonDetails.longDescription}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              name="description"
              multiline
              rows={2}
              value={formData.commonDetails.description}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Manufacture or Packer Name"
              name="manufactureOrPackerName"
              value={formData.commonDetails.manufactureOrPackerName}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Manufacture or Packer Address"
              name="manufactureOrPackerAddress"
              value={formData.commonDetails.manufactureOrPackerAddress}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Common or Generic Name of Commodity"
              name="commonOrGenericNameOfCommodity"
              value={formData.commonDetails.commonOrGenericNameOfCommodity}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Month/Year of Manufacture/Packing/Import"
              name="monthYearOfManufacturePackingImport"
              value={formData.commonDetails.monthYearOfManufacturePackingImport}
              onChange={handleChange}
              required
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
            value={formData.commonDetails.monthYearOfManufacturePackingImport}
            onChange={handleChange}
            required
            InputLabelProps={{ shrink: true }}
          />
        </Grid> */}

          <Grid item xs={12} sm={6}>
            <TextField
              label="Import FSSAI License No"
              name="importFSSAILicenseNo"
              value={formData.commonDetails.importFSSAILicenseNo}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Brand Owner FSSAI License No"
              name="brandOwnerFSSAILicenseNo"
              value={formData.commonDetails.brandOwnerFSSAILicenseNo}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
 

          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={24} color="warning" />
                ) : (
                  "Submit"
                )}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default UpdateInventroy;