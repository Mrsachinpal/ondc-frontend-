import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function AddProductTwo() {
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
    const [instructions, setInstructions] = useState("");
    const [returnable, setReturnable] = useState("");
    const [cancellable, setCancellable] = useState("");
    const [availableOnCashOnDelivery, setAvailableOnCashOnDelivery] = useState("");
    const [manufacturerOrPackerName, setManufacturerOrPackerName] = useState("");
    const [manufacturerOrPackerAddress, setManufacturerOrPackerAddress] = useState("");
    const [commonOrGenericNameOfCommodity, setCommonOrGenericNameOfCommodity] = useState("");
    const [fulfilmentOption, setFulfilmentOption] = useState("");
    const [UOM, setUOM] = useState("");
    const [UOMvalue, setUOMvalue] = useState("");
    const [MRP, setMRP] = useState("");
    const [purchasePrice, setPurchasePrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [SKU, setSKU] = useState("");
    const [image, setImage] = useState([]);
    const [imageBack, setImageBack] = useState([]);

    const handleCountryOfOrigin = (e) => setCountryOfOrigin(e.target.value);
    const handleGstPercentage = (e) => setGstPercentage(e.target.value);

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
        console.log("Common Or Generic Name Of Commodity:", commonOrGenericNameOfCommodity);
        console.log("Fulfilment Option:", fulfilmentOption);
        console.log("UOM:", UOM);
        console.log("UOM Value:", UOMvalue);
        console.log("MRP:", MRP);
        console.log("Purchase Price:", purchasePrice);
        console.log("Quantity:", quantity);
        console.log("SKU:", SKU);
        console.log("Image:", image);
        console.log("Image Back:", imageBack);
    };

    return (
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ marginBottom: '16px' }}>
                <Button variant="contained" color="primary">Back</Button>
            </div>
            <div style={{ marginBottom: '16px' }}>
                <Typography variant="h6">Add Product</Typography>
            </div>
            <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    variant="outlined"
                    color="secondary"
                    style={{ marginRight: '16px' }}
                    onClick={() => setShowVitalInfo(false)}
                >
                    PRODUCT INFO
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleButtonClick}
                >
                    VITAL INFO
                </Button>
            </div>
            <form onSubmit={handleSubmit}>
                {!showVitalInfo ? (
                    <>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Product Code (EAN / ISBN / GTIN / HSN / Others)</Typography>
                            <TextField
                                label="Product Code"
                                fullWidth
                                variant="outlined"
                                value={productCode}
                                onChange={(e) => setProductCode(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Product Name</Typography>
                            <TextField
                                label="Product Name"
                                fullWidth
                                variant="outlined"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Short Description</Typography>
                            <TextField
                                label="Short Description"
                                fullWidth
                                variant="outlined"
                                value={shortDescription}
                                onChange={(e) => setShortDescription(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Long Description</Typography>
                            <TextField
                                label="Long Description"
                                fullWidth
                                variant="outlined"
                                value={longDescription}
                                onChange={(e) => setLongDescription(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Select
                                fullWidth
                                value={countryOfOrigin}
                                onChange={handleCountryOfOrigin}
                                displayEmpty
                                variant="outlined"
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            >
                                <MenuItem value="" disabled>Select Country</MenuItem>
                                <MenuItem value="AF">Afghanistan</MenuItem>
                                {/* Add all other countries here */}
                            </Select>
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Select
                                fullWidth
                                value={gstPercentage}
                                onChange={handleGstPercentage}
                                displayEmpty
                                variant="outlined"
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            >
                                <MenuItem value="" disabled>Select GST Percentage</MenuItem>
                                <MenuItem value={0}>0%</MenuItem>
                                <MenuItem value={5}>5%</MenuItem>
                                <MenuItem value={12}>12%</MenuItem>
                                <MenuItem value={18}>18%</MenuItem>
                                <MenuItem value={28}>28%</MenuItem>
                            </Select>
                        </div>
                    </>
                ) : (
                    <>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Max Allowed Quantity</Typography>
                            <TextField
                                placeholder="Max Allowed Quantity"
                                variant="outlined"
                                fullWidth
                                value={maxAllowedQuantity}
                                onChange={(e) => setMaxAllowedQuantity(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Length (cm)</Typography>
                            <TextField
                                label="Length"
                                fullWidth
                                variant="outlined"
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Breadth (cm)</Typography>
                            <TextField
                                label="Breadth"
                                fullWidth
                                variant="outlined"
                                value={breadth}
                                onChange={(e) => setBreadth(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Height (cm)</Typography>
                            <TextField
                                label="Height"
                                fullWidth
                                variant="outlined"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Weight</Typography>
                            <TextField
                                label="Weight"
                                fullWidth
                                variant="outlined"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Return Window (in hours)</Typography>
                            <TextField
                                label="Return Window"
                                fullWidth
                                variant="outlined"
                                value={returnWindow}
                                onChange={(e) => setReturnWindow(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Manufacturer Name</Typography>
                            <TextField
                                label="Manufacturer Name"
                                fullWidth
                                variant="outlined"
                                value={manufacturerName}
                                onChange={(e) => setManufacturerName(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Instructions</Typography>
                            <TextField
                                label="Instructions"
                                fullWidth
                                variant="outlined"
                                value={instructions}
                                onChange={(e) => setInstructions(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Returnable</FormLabel>
                                <RadioGroup
                                    row
                                    aria-label="returnable"
                                    name="returnable"
                                    value={returnable}
                                    onChange={(e) => setReturnable(e.target.value)}
                                    style={{ marginTop: '8px' }}
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Cancellable</FormLabel>
                                <RadioGroup
                                    row
                                    aria-label="cancellable"
                                    name="cancellable"
                                    value={cancellable}
                                    onChange={(e) => setCancellable(e.target.value)}
                                    style={{ marginTop: '8px' }}
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Available On Cash On Delivery</FormLabel>
                                <RadioGroup
                                    row
                                    aria-label="cash-on-delivery"
                                    name="cash-on-delivery"
                                    value={availableOnCashOnDelivery}
                                    onChange={(e) => setAvailableOnCashOnDelivery(e.target.value)}
                                    style={{ marginTop: '8px' }}
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Manufacturer Or Packer Name</Typography>
                            <TextField
                                label="Manufacturer Or Packer Name"
                                fullWidth
                                variant="outlined"
                                value={manufacturerOrPackerName}
                                onChange={(e) => setManufacturerOrPackerName(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Manufacturer Or Packer Address</Typography>
                            <TextField
                                label="Manufacturer Or Packer Address"
                                fullWidth
                                variant="outlined"
                                value={manufacturerOrPackerAddress}
                                onChange={(e) => setManufacturerOrPackerAddress(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Common Or Generic Name Of Commodity</Typography>
                            <TextField
                                label="Common Or Generic Name Of Commodity"
                                fullWidth
                                variant="outlined"
                                value={commonOrGenericNameOfCommodity}
                                onChange={(e) => setCommonOrGenericNameOfCommodity(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Fulfilment Option</Typography>
                            <TextField
                                label="Fulfilment Option"
                                fullWidth
                                variant="outlined"
                                value={fulfilmentOption}
                                onChange={(e) => setFulfilmentOption(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Unit of Measure (UOM)</Typography>
                            <TextField
                                label="UOM"
                                fullWidth
                                variant="outlined"
                                value={UOM}
                                onChange={(e) => setUOM(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>UOM Value</Typography>
                            <TextField
                                label="UOM Value"
                                fullWidth
                                variant="outlined"
                                value={UOMvalue}
                                onChange={(e) => setUOMvalue(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>MRP</Typography>
                            <TextField
                                label="MRP"
                                fullWidth
                                variant="outlined"
                                value={MRP}
                                onChange={(e) => setMRP(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Purchase Price</Typography>
                            <TextField
                                label="Purchase Price"
                                fullWidth
                                variant="outlined"
                                value={purchasePrice}
                                onChange={(e) => setPurchasePrice(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Quantity</Typography>
                            <TextField
                                label="Quantity"
                                fullWidth
                                variant="outlined"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>SKU</Typography>
                            <TextField
                                label="SKU"
                                fullWidth
                                variant="outlined"
                                value={SKU}
                                onChange={(e) => setSKU(e.target.value)}
                                style={{ marginTop: '8px', borderRadius: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Image</Typography>
                            <input
                                type="file"
                               
                                onChange={(e) => setImage(e.target.files[0].name)}
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Typography>Image Back</Typography>
                            <input
                                type="file"
                            
                                onChange={(e) => setImageBack(e.target.files[0].name)}
                            />
                        </div>
                    </>
                )}
                <div style={{ marginBottom: '16px' }}>
                    <Button variant="contained" color="primary" type="submit" style={{ borderRadius: '8px' }}>
                        Save
                    </Button>
                </div>
            </form>
        </div>
    );
}
