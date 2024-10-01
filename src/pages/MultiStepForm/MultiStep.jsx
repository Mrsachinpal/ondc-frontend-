import React, { useState } from 'react';
import {
  Container,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Grid,
} from '@mui/material';
import axios from 'axios';
const steps = ['Provider Details', 'KYC Details', 'KYC URLs', 'Bank Details'];
const MultiStep = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    detailsOfProvider: {
      email: '',
      mobileNumber: '',
      Orgname: '',
      password: '',
      role: '',
      accessStatus: false,
      isApprovedByAdmin: false,
    },
    KYCdetails: {
      providerName: '',
      registeredAdd: '',
      storeEmail: '',
      mobileNo: '',
      PANNo: '',
      GSTIN: '',
      FSSAINo: '',
    },
    KYCurl: {
      address: '',
      idProof: '',
      pan: '',
      gst: '',
    },
    bankDetails: {
      accountHolderName: '',
      accountNo: '',
      bankName: '',
      branchName: '',
      ifscCode: '',
      cancelledChequeURL: '',
    }
  });

  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const stepErrors = validateStep(activeStep);
    if (Object.keys(stepErrors).length === 0) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      setErrors(stepErrors);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const [section, field] = name.split('.');

    if (type === 'file') {
      const fileName = files[0] ? files[0].name : null;
      setFormData(prevData => ({
        ...prevData,
        [section]: {
          ...prevData[section],
          [field]: fileName, 
        },
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [section]: {
          ...prevData[section],
          [field]: type === 'checkbox' ? checked : value,
        },
      }));
    }

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '', 
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};
    switch (step) {
      case 0:
        if (!formData.detailsOfProvider.email) newErrors['detailsOfProvider.email'] = 'Email is required';
        if (!formData.detailsOfProvider.mobileNumber) newErrors['detailsOfProvider.mobileNumber'] = 'Mobile Number is required';
        if (!formData.detailsOfProvider.Orgname) newErrors['detailsOfProvider.Orgname'] = 'Organization Name is required';
        if (!formData.detailsOfProvider.password) newErrors['detailsOfProvider.password'] = 'Password is required';
        if (!formData.detailsOfProvider.role) newErrors['detailsOfProvider.role'] = 'Role is required';
        break;
      case 1:
        if (!formData.KYCdetails.providerName) newErrors['KYCdetails.providerName'] = 'Provider Name is required';
        if (!formData.KYCdetails.registeredAdd) newErrors['KYCdetails.registeredAdd'] = 'Registered Address is required';
        if (!formData.KYCdetails.storeEmail) newErrors['KYCdetails.storeEmail'] = 'Store Email is required';
        if (!formData.KYCdetails.mobileNo) newErrors['KYCdetails.mobileNo'] = 'Mobile Number is required';
        if (!formData.KYCdetails.PANNo) newErrors['KYCdetails.PANNo'] = 'PAN Number is required';
        if (!formData.KYCdetails.GSTIN) newErrors['KYCdetails.GSTIN'] = 'GSTIN is required';
        if (!formData.KYCdetails.FSSAINo) newErrors['KYCdetails.FSSAINo'] = 'FSSAI Number is required';
        break;
      case 2:
        if (!formData.KYCurl.address) newErrors['KYCurl.address'] = 'Address Proof URL is required';
        if (!formData.KYCurl.idProof) newErrors['KYCurl.idProof'] = 'ID Proof URL is required';
        if (!formData.KYCurl.pan) newErrors['KYCurl.pan'] = 'PAN Proof URL is required';
        if (!formData.KYCurl.gst) newErrors['KYCurl.gst'] = 'GST Proof URL is required';
        break;
      case 3:
        if (!formData.bankDetails.accountHolderName) newErrors['bankDetails.accountHolderName'] = 'Account Holder Name is required';
        if (!formData.bankDetails.accountNo) newErrors['bankDetails.accountNo'] = 'Account Number is required';
        if (!formData.bankDetails.bankName) newErrors['bankDetails.bankName'] = 'Bank Name is required';
        if (!formData.bankDetails.branchName) newErrors['bankDetails.branchName'] = 'Branch Name is required';
        if (!formData.bankDetails.ifscCode) newErrors['bankDetails.ifscCode'] = 'IFSC Code is required';
        if (!formData.bankDetails.cancelledChequeURL) newErrors['bankDetails.cancelledChequeURL'] = 'Cancelled Cheque URL is required';
        break;
      default:
        break;
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    const stepErrors = validateStep(activeStep);
    if (Object.keys(stepErrors).length === 0) {
      try {
        const formDataToSend = new FormData();
        for (const key in formData) {
          for (const subKey in formData[key]) {
            formDataToSend.append(`${key}[${subKey}]`, formData[key][subKey]);
          }
        }
   
        const response = await axios.post(
            "https://stage.ramonize.com/dashboard/adminRegister",
            formData,
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          );
          alert(response.message)
          if (response.message === "Seller added successfully") {
            console.log(response.data);  
            const token = response.token
            const message = response.data.message
            console.log(token);          
            console.log(message);       
              console.log("success"); 
              setFormData({
                detailsOfProvider: {
                  email: '',
                  mobileNumber: '',
                  Orgname: '',
                  password: '',
                  role: '',
                  accessStatus: false,
                  isApprovedByAdmin: false,
                },
                KYCdetails: {
                  providerName: '',
                  registeredAdd: '',
                  storeEmail: '',
                  mobileNo: '',
                  PANNo: '',
                  GSTIN: '',
                  FSSAINo: '',
                },
                KYCurl: {
                  address: '',
                  idProof: '',
                  pan: '',
                  gst: '',
                },
                bankDetails: {
                  accountHolderName: '',
                  accountNo: '',
                  bankName: '',
                  branchName: '',
                  ifscCode: '',
                  cancelledChequeURL: '',
                }
              });
          }
    
      } catch (error) {
        console.error("Error submitting data:", error);
        alert("An error occurred while submitting the form.");
      }
    } else {
      setErrors(stepErrors);
    }
  };

  const renderStepContent = (step) => {
    return (
      <form onSubmit={handleSubmit} style={{ fontFamily: 'Lato' }}>
        <Grid container spacing={3}>
          {step === 0 && (
            <>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  name="detailsOfProvider.email"
                  fullWidth
                  value={formData.detailsOfProvider.email}
                  onChange={handleChange}
                  error={!!errors['detailsOfProvider.email']}
                  helperText={errors['detailsOfProvider.email']}
                  InputProps={{ style: { fontFamily: 'Lato' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Mobile Number"
                  name="detailsOfProvider.mobileNumber"
                  fullWidth
                  value={formData.detailsOfProvider.mobileNumber}
                  onChange={handleChange}
                  error={!!errors['detailsOfProvider.mobileNumber']}
                  helperText={errors['detailsOfProvider.mobileNumber']}
                  InputProps={{ style: { fontFamily: 'Lato' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Organization Name"
                  name="detailsOfProvider.Orgname"
                  fullWidth
                  value={formData.detailsOfProvider.Orgname}
                  onChange={handleChange}
                  error={!!errors['detailsOfProvider.Orgname']}
                  helperText={errors['detailsOfProvider.Orgname']}
                  InputProps={{ style: { fontFamily: 'Lato' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  name="detailsOfProvider.password"
                  type="password"
                  fullWidth
                  value={formData.detailsOfProvider.password}
                  onChange={handleChange}
                  error={!!errors['detailsOfProvider.password']}
                  helperText={errors['detailsOfProvider.password']}
                  InputProps={{ style: { fontFamily: 'Lato' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Role"
                  name="detailsOfProvider.role"
                  fullWidth
                  value={formData.detailsOfProvider.role}
                  onChange={handleChange}
                  error={!!errors['detailsOfProvider.role']}
                  helperText={errors['detailsOfProvider.role']}
                  InputProps={{ style: { fontFamily: 'Lato' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="detailsOfProvider.accessStatus"
                      checked={formData.detailsOfProvider.accessStatus}
                      onChange={handleChange}
                    />
                  }
                  label="Access Status"
                  sx={{ fontFamily: 'Lato' }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="detailsOfProvider.isApprovedByAdmin"
                      checked={formData.detailsOfProvider.isApprovedByAdmin}
                      onChange={handleChange}
                    />
                  }
                  label="Approved by Admin"
                  sx={{ fontFamily: 'Lato' }}
                />
              </Grid>
            </>
          )}
          {step === 1 && (
            <>
              <Grid item xs={12}>
                <TextField
                  label="Provider Name"
                  name="KYCdetails.providerName"
                  fullWidth
                  value={formData.KYCdetails.providerName}
                  onChange={handleChange}
                  error={!!errors['KYCdetails.providerName']}
                  helperText={errors['KYCdetails.providerName']}
                  InputProps={{ style: { fontFamily: 'Lato' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Registered Address"
                  name="KYCdetails.registeredAdd"
                  fullWidth
                  value={formData.KYCdetails.registeredAdd}
                  onChange={handleChange}
                  error={!!errors['KYCdetails.registeredAdd']}
                  helperText={errors['KYCdetails.registeredAdd']}
                  InputProps={{ style: { fontFamily: 'Lato' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Store Email"
                  name="KYCdetails.storeEmail"
                  fullWidth
                  value={formData.KYCdetails.storeEmail}
                  onChange={handleChange}
                  error={!!errors['KYCdetails.storeEmail']}
                  helperText={errors['KYCdetails.storeEmail']}
                  InputProps={{ style: { fontFamily: 'Lato' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Mobile Number"
                  name="KYCdetails.mobileNo"
                  fullWidth
                  value={formData.KYCdetails.mobileNo}
                  onChange={handleChange}
                  error={!!errors['KYCdetails.mobileNo']}
                  helperText={errors['KYCdetails.mobileNo']}
                  InputProps={{ style: { fontFamily: 'Lato' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="PAN Number"
                  name="KYCdetails.PANNo"
                  fullWidth
                  value={formData.KYCdetails.PANNo}
                  onChange={handleChange}
                  error={!!errors['KYCdetails.PANNo']}
                  helperText={errors['KYCdetails.PANNo']}
                  InputProps={{ style: { fontFamily: 'Lato' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="GSTIN"
                  name="KYCdetails.GSTIN"
                  fullWidth
                  value={formData.KYCdetails.GSTIN}
                  onChange={handleChange}
                  error={!!errors['KYCdetails.GSTIN']}
                  helperText={errors['KYCdetails.GSTIN']}
                  InputProps={{ style: { fontFamily: 'Lato' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="FSSAI Number"
                  name="KYCdetails.FSSAINo"
                  fullWidth
                  value={formData.KYCdetails.FSSAINo}
                  onChange={handleChange}
                  error={!!errors['KYCdetails.FSSAINo']}
                  helperText={errors['KYCdetails.FSSAINo']}
                  InputProps={{ style: { fontFamily: 'Lato' } }}
                />
              </Grid>
            </>
          )}
          {step === 2 && (
            <Grid container spacing={5} sx={{ marginTop: 4 }}>
              <Grid item xs={12}>
                <p style={{ fontFamily: 'Lato' }}>Address Proof</p>
                <input
                  type="file"
                  name="KYCurl.address"
                  onChange={handleChange}
                  style={{ fontFamily: 'Lato' }}
                />
              </Grid>
              <Grid item xs={12}>
                <p style={{ fontFamily: 'Lato' }}>ID Proof</p>
                <input
                  type="file"
                  name="KYCurl.idProof"
                  onChange={handleChange}
                  style={{ fontFamily: 'Lato' }}
                />
              </Grid>
              <Grid item xs={12}>
                <p style={{ fontFamily: 'Lato' }}>Pan Card Image</p>
                <input
                  type="file"
                  name="KYCurl.pan"
                  onChange={handleChange}
                  style={{ fontFamily: 'Lato' }}
                />
              </Grid>
              <Grid item xs={12}>
                <p style={{ fontFamily: 'Lato' }}>GST Proof</p>
                <input
                  type="file"
                  name="KYCurl.gst"
                  onChange={handleChange}
                  style={{ fontFamily: 'Lato' }}
                />
              </Grid>
            </Grid>
          )}
          {step === 3 && (
            <>
              <Grid item xs={12}>
                <TextField
                  label="Account Holder Name"
                  name="bankDetails.accountHolderName"
                  fullWidth
                  value={formData.bankDetails.accountHolderName}
                  onChange={handleChange}
                  error={!!errors['bankDetails.accountHolderName']}
                  helperText={errors['bankDetails.accountHolderName']}
                  InputProps={{ style: { fontFamily: 'Lato' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Account Number"
                  name="bankDetails.accountNo"
                  fullWidth
                  value={formData.bankDetails.accountNo}
                  onChange={handleChange}
                  error={!!errors['bankDetails.accountNo']}
                  helperText={errors['bankDetails.accountNo']}
                  InputProps={{ style: { fontFamily: 'Lato' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Bank Name"
                  name="bankDetails.bankName"
                  fullWidth
                  value={formData.bankDetails.bankName}
                  onChange={handleChange}
                  error={!!errors['bankDetails.bankName']}
                  helperText={errors['bankDetails.bankName']}
                  InputProps={{ style: { fontFamily: 'Lato' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Branch Name"
                  name="bankDetails.branchName"
                  fullWidth
                  value={formData.bankDetails.branchName}
                  onChange={handleChange}
                  error={!!errors['bankDetails.branchName']}
                  helperText={errors['bankDetails.branchName']}
                  InputProps={{ style: { fontFamily: 'Lato' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="IFSC Code"
                  name="bankDetails.ifscCode"
                  fullWidth
                  value={formData.bankDetails.ifscCode}
                  onChange={handleChange}
                  error={!!errors['bankDetails.ifscCode']}
                  helperText={errors['bankDetails.ifscCode']}
                  InputProps={{ style: { fontFamily: 'Lato' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <p style={{ fontFamily: 'Lato' }}>Cancelled Cheque</p>
                <input
                  type="file"
                  name="bankDetails.cancelledChequeURL"
                  onChange={handleChange}
                  style={{ fontFamily: 'Lato' }}
                />
              </Grid>
            </>
          )}
        </Grid>
      </form>
    );
  };

  return (
    <Container>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel sx={{ fontWeight: 'bold' }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div style={{ marginTop: 40 }}>
        {renderStepContent(activeStep)}
        <div style={{ marginTop: 20 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            style={{ marginRight: 8 }}
          >
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default MultiStep;
