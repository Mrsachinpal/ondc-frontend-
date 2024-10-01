import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Stepper, Step, StepLabel } from '@mui/material';

const steps = [
  'Personal Information',
  'KYC Information',
  'Upload Documents',
  'Bank Details',
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    password: '',
    providerStoreName: '',
    registerAddress: '',
    emailKYC: '',
    mobileNumberKYC: '',
    pan: '',
    gstin: '',
    profilePicture: null,
    idProof: null,
    panCardImage: null,
    gstinCertificate: null,
    accountHolderName: '',
    accountNumber: '',
    bankName: '',
    branchName: '',
    ifscCode: ''
  });

  const [formErrors, setFormErrors] = useState({
    email: false,
    phone: false,
    name: false,
    password: false,
    providerStoreName: false,
    registerAddress: false,
    emailKYC: false,
    mobileNumberKYC: false,
    pan: false,
    gstin: false,
    profilePicture: false,
    idProof: false,
    panCardImage: false,
    gstinCertificate: false,
    accountHolderName: false,
    accountNumber: false,
    bankName: false,
    branchName: false,
    ifscCode: false
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setFormData(prevState => ({
        ...prevState,
        [name]: files[0]
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const errors = {};
    let hasErrors = false;
    Object.keys(formData).forEach(key => {
      if (!formData[key] && key !== 'profilePicture' && key !== 'idProof' && key !== 'panCardImage' && key !== 'gstinCertificate') {
        errors[key] = true;
        hasErrors = true;   
      }
    });
    if (hasErrors) {
      setFormErrors(errors);
    } else {   
      console.log(formData);
      try {
        const response = await fetch("http://localhost:8080/adminRegister",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({formData})
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
  
        if (data.success === true) {
           console.log("data successfully send");
          
        } else {
      alert(" some thing wrong")
        }
      } catch (error) {
       console.log(error);
      }
      setCurrentStep(0);
      setFormData({
        email: '',
        phone: '',
        name: '',
        password: '',
        providerStoreName: '',
        registerAddress: '',
        emailKYC: '',
        mobileNumberKYC: '',
        pan: '',
        gstin: '',
        profilePicture: null,
        idProof: null,
        panCardImage: null,
        gstinCertificate: null,
        accountHolderName: '',
        accountNumber: '',
        bankName: '',
        branchName: '',
        ifscCode: ''
      });
      setFormErrors({
        email: false,
        phone: false,
        name: false,
        password: false,
        providerStoreName: false,
        registerAddress: false,
        emailKYC: false,
        mobileNumberKYC: false,
        pan: false,
        gstin: false,
        profilePicture: false,
        idProof: false,
        panCardImage: false,
        gstinCertificate: false,
        accountHolderName: false,
        accountNumber: false,
        bankName: false,
        branchName: false,
        ifscCode: false
      });
    }
  };

  const nextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };
  return (
    <Container maxWidth="md">
      <Stepper activeStep={currentStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form onSubmit={handleSubmit}>
        {currentStep === 0 && (
          <Grid container spacing={2}>
            <Grid item xs={12}>       
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={formErrors.email}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="Mobile Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={formErrors.phone}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              required
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={formErrors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              required
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={formErrors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={nextStep}>
                Next
              </Button>
            </Grid>
          </Grid>
        )}
        {currentStep === 1 && (
          <Grid container spacing={2}>
            <Grid item xs={12}>      
            </Grid>
            <Grid item xs={12}>
              <TextField
              required
                fullWidth
                label="Provider Store Name"
                name="providerStoreName"
                value={formData.providerStoreName}
                onChange={handleChange}
                error={formErrors.providerStoreName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              required
                fullWidth
                label="Register Address"
                name="registerAddress"
                value={formData.registerAddress}
                onChange={handleChange}
                error={formErrors.registerAddress}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              required
                fullWidth
                label="Email"
                type="email"
                name="emailKYC"
                value={formData.emailKYC}
                onChange={handleChange}
                error={formErrors.emailKYC}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              required
                fullWidth
                label="Mobile Number"
                name="mobileNumberKYC"
                value={formData.mobileNumberKYC}
                onChange={handleChange}
                error={formErrors.mobileNumberKYC}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              required
                fullWidth
                label="PAN"
                name="pan"
                value={formData.pan}
                onChange={handleChange}
                error={formErrors.pan}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              required
                fullWidth
                label="GSTIN"
                name="gstin"
                value={formData.gstin}
                onChange={handleChange}
                error={formErrors.gstin}
              />
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={prevStep}>
                Previous
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="primary" onClick={nextStep}>
                Next
              </Button>
            </Grid>
          </Grid>
        )}

        {currentStep === 2 && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
            
            </Grid>
            <Grid item xs={12}>
            <p>Address Proof</p>
              <TextField
              required
                fullWidth
                type="file"
                name="profilePicture"
                onChange={handleChange}
                error={formErrors.profilePicture}
              />
            </Grid>
            <Grid item xs={12}>
            <p>ID Proof</p>
              <TextField
              required
                fullWidth
                type="file"
                name="idProof"
                onChange={handleChange}
                error={formErrors.idProof}
              />
            </Grid>
            <Grid item xs={12}>
            <p>Pan Card Image</p>

              <TextField
              required
                fullWidth
                type="file"
                name="panCardImage"
                onChange={handleChange}
                error={formErrors.panCardImage}
              />
            </Grid>
            <Grid item xs={12}>
            <p>GST Proof</p>

              <TextField
              required
                fullWidth
                type="file"
                name="gstinCertificate"
                onChange={handleChange}
                error={formErrors.gstinCertificate}
              />
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={prevStep}>
                Previous
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="primary" onClick={nextStep}>
                Next
              </Button>
            </Grid>
          </Grid>
        )}

        {currentStep === 3 && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
            
            </Grid>
            <Grid item xs={12}>
              <TextField
              required
                fullWidth
                label="Account Holder Name"
                name="accountHolderName"
                value={formData.accountHolderName}
                onChange={handleChange}
                error={formErrors.accountHolderName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              required
                fullWidth
                label="Account Number"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                error={formErrors.accountNumber}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              required
                fullWidth
                label="Bank Name"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                error={formErrors.bankName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              required
                fullWidth
                label="Branch Name"
                name="branchName"
                value={formData.branchName}
                onChange={handleChange}
                error={formErrors.branchName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              required
                fullWidth
                label="IFSC Code"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleChange}
                error={formErrors.ifscCode}
              />
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={prevStep}>
                Previous
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        )}
      </form>
    </Container>

  );
};

export default MultiStepForm;
