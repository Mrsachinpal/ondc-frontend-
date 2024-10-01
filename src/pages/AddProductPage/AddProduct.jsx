import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
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
  
  export default function AddProduct() {
    const [productCategory, setProductCategory] = useState("");
    const [productSubCategory, setProductSubCategory] = useState("");
    const [dataEntry, setDataEntry] = useState("");
    const [barCodeType, setBarCodeType] = useState("");
    const [barCodeValue, setBarCodeValue] = useState("");
    const [variation, setVariation] = useState("");
    const [variants, setVariants] = useState({}); 
  
    const handleVariationChange = (e) => {
      setVariation(e.target.value);
    };
  
    const handleCategoryChange = (event) => {
      setProductCategory(event.target.value);
    };
  
    const handleSubCategoryChange = (event) => {
      setProductSubCategory(event.target.value);
    };
  
    const handleDataEntryChange = (event) => {
      setDataEntry(event.target.value);
    };
  
    const handleBarCodeTypeChange = (event) => {
      setBarCodeType(event.target.value);
    };
  
    const handleBarCodeValueChange = (event) => {
      setBarCodeValue(event.target.value);
    };
  
    const handleBackClick = () => {
      console.log("Back button clicked");
    };
  
    const handleVariantChange = (event) => {
      setVariants({ ...variants, [event.target.name]: event.target.checked });
    };
  
    return (
      <>
         <div className="m-5">
         <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleBackClick}>
              Back
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Add Product</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Product Category*</Typography>
            <Select
              fullWidth
              value={productCategory}
              onChange={handleCategoryChange}
              displayEmpty
              variant="outlined"
            >
              <MenuItem value="" disabled>
                Select Category
              </MenuItem>
              <MenuItem value="home-kitchen">Home & Kitchen</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Product SubCategory*</Typography>
            <Select
              fullWidth
              value={productSubCategory}
              onChange={handleSubCategoryChange}
              displayEmpty
              variant="outlined"
              disabled={!productCategory}
            >
              <MenuItem value="" disabled>
                Select SubCategory
              </MenuItem>
              <MenuItem value="home-decor">Home Decor</MenuItem>
              <MenuItem value="furniture">Furniture</MenuItem>
              <MenuItem value="bedding-linen">
                Home Furnishing - Bedding and Linen
              </MenuItem>
              <MenuItem value="electricals">Electricals</MenuItem>
              <MenuItem value="bathroom-fixtures">
                Bathroom and Kitchen Fixtures
              </MenuItem>
              <MenuItem value="garden-outdoor">Garden & Outdoor</MenuItem>
              <MenuItem value="sports-fitness">
                Sports and Fitness Equipment
              </MenuItem>
              <MenuItem value="cookware">Cookware</MenuItem>
              <MenuItem value="serveware">Serveware</MenuItem>
              <MenuItem value="storage-containers">
                Kitchen Storage and Containers
              </MenuItem>
              <MenuItem value="kitchen-tools">Kitchen Tools</MenuItem>
              <MenuItem value="organization">
                Closet/Laundry/Shoe Organization
              </MenuItem>
              <MenuItem value="toys-games">Toys and Games</MenuItem>
              <MenuItem value="stationery">Stationery</MenuItem>
              <MenuItem value="gift-voucher">Gift Voucher</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Data Entry Mode *</FormLabel>
              <RadioGroup
                row
                aria-label="dataEntry"
                name="dataEntry"
                value={dataEntry}
                onChange={handleDataEntryChange}
              >
                <FormControlLabel
                 
                  value="manual"
                  control={<Radio />}
                  label="Manual"
                />
                <FormControlLabel
                  value="autofill-from-catalogue"
                  control={<Radio />}
                  label="Auto fill from Catalogue"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {dataEntry === "autofill-from-catalogue" ? (
            <>
              <Grid item xs={12}>
                <Select
                  fullWidth
                  value={barCodeType}
                  onChange={handleBarCodeTypeChange}
                  displayEmpty
                  variant="outlined"
                >
                  <MenuItem value="" disabled>
                    Select Barcode Type
                  </MenuItem>
                  <MenuItem value="upc">UPC</MenuItem>
                  <MenuItem value="gtin">GTIN</MenuItem>
                  <MenuItem value="hsn">HSN</MenuItem>
                  <MenuItem value="ean">EAN</MenuItem>
                  <MenuItem value="mpn">MPN</MenuItem>
                  <MenuItem value="isbn">ISBN</MenuItem>
                  <MenuItem value="barcode">Barcode</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Enter the barcode value"
                  fullWidth
                  variant="outlined"
                  value={barCodeValue}
                  onChange={handleBarCodeValueChange}
                />
              </Grid>
            </>
          ) : (
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Variation On</FormLabel>
                <RadioGroup
                  aria-label="Variation On"
                  name="variation"
                  value={variation}
                  onChange={handleVariationChange}
                >
                  <FormControlLabel
                    value="none"
                    control={<Radio />}
                    label="None"
                  />
                  <FormControlLabel
                    value="attribute"
                    control={<Radio />}
                    label="Attribute"
                  />
                  <FormControlLabel value="uom" control={<Radio />} label="UOM" />
                </RadioGroup>
              </FormControl>
            </Grid>
          )}
  
          {variation === "attribute" && (
            <Grid item xs={12}>
              <Typography variant="body1">Select Variants</Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="brand"
                      checked={variants.brand || false}
                      onChange={handleVariantChange}
                    />
                  }
                  label="Brand"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="color"
                      checked={variants.color || false}
                      onChange={handleVariantChange}
                    />
                  }
                  label="Color"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="material"
                      checked={variants.material || false}
                      onChange={handleVariantChange}
                    />
                  }
                  label="Material"
                />
              </FormGroup>
            </Grid>
          )}
  
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginRight: 16 }}
              >
                Cancel
              </Button>
              <Button variant="contained" color="primary">
                Next
              </Button>
            </Grid>
          </Grid>
        </Grid>
         </div>
    
      </>
    );
  }
  