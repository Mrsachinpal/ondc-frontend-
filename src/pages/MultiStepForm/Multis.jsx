import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { toast } from 'react-toastify';

const steps = [
  "Personal Information",
  "KYC Information",
  "Upload Documents",
  "Bank Details",
];

const initialFormData = {
  detailsOfProvider: {
    email: "",
    mobileNumber: "",
    Orgname: "",
    password: "",
    role: "OrganizationAdmin",
    accessStatus: true,
    isApprovedByAdmin: true,
  },
  KYCdetails: {
    providerName: "",
    registeredAdd: "",
    storeEmail: "",
    mobileNo: "",
    PANNo: "",
    GSTIN: "",
    FSSAINo: "",
  },
  KYCurl: {
    address: null,
    idProof: null,
    pan: null,
    gst: null,
  },
  bankDetails: {
    accountHolderName: "",
    accountNo: "",
    bankName: "",
    branchName: "",
    ifscCode: "",
    cancelledChequeURL: null,
  },
};

const Multis= () => {
  const api = process.env.REACT_APP_API;
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const [step, field] = name.split(".");

    setFormData(prevState => ({
      ...prevState,
      [step]: {
        ...prevState[step],
        [field]: type === "file" ? files[0]?.name : value
      }
    }));
  };

  const validateForm = () => {
    const errors = {};
    let hasErrors = false;

    for (const [key, fields] of Object.entries(formData)) {
      if (typeof fields === "object") {
        for (const [subKey, value] of Object.entries(fields)) {
          if (!value && !["cancelledChequeURL", "address", "idProof", "pan", "gst"].includes(subKey)) {
            errors[`${key}.${subKey}`] = "This field is required";
            hasErrors = true;
          }
        }
      } else if (!fields) {
        errors[key] = "This field is required";
        hasErrors = true;
      }
    }

    return { errors, hasErrors };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { errors, hasErrors } = validateForm();
    if (hasErrors) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await fetch(`${api}adminRegister`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      toast(data.message);

      if (data.message === "Seller added successfully") {
        setFormData(initialFormData);
        setFormErrors({});
        setCurrentStep(0);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleStepChange = (stepChange) => () => {
    setCurrentStep(prevStep => prevStep + stepChange);
  };

  const renderStepContent = (step) => {
    const fields = {
      0: [
        { label: "Email", name: "detailsOfProvider.email", type: "text" },
        { label: "Mobile Number", name: "detailsOfProvider.mobileNumber", type: "text" },
        { label: "Name", name: "detailsOfProvider.Orgname", type: "text" },
        { label: "Password", name: "detailsOfProvider.password", type: "password" },
        { label: "Role", name: "detailsOfProvider.role", type: "text" },
        { label: "Access Status", name: "detailsOfProvider.accessStatus", type: "text" },
        { label: "Is Approved By Admin", name: "detailsOfProvider.isApprovedByAdmin", type: "text" }
      ],
      1: [
        { label: "Provider Name", name: "KYCdetails.providerName", type: "text" },
        { label: "Registered Address", name: "KYCdetails.registeredAdd", type: "text" },
        { label: "Store Email", name: "KYCdetails.storeEmail", type: "text" },
        { label: "Mobile Number", name: "KYCdetails.mobileNo", type: "text" },
        { label: "PAN No", name: "KYCdetails.PANNo", type: "text" },
        { label: "GSTIN", name: "KYCdetails.GSTIN", type: "text" },
        { label: "FSSAI No", name: "KYCdetails.FSSAINo", type: "text" }
      ],
      2: [
        { label: "Address Proof", name: "KYCurl.address", type: "file" },
        { label: "ID Proof", name: "KYCurl.idProof", type: "file" },
        { label: "PAN", name: "KYCurl.pan", type: "file" },
        { label: "GST", name: "KYCurl.gst", type: "file" }
      ],
      3: [
        { label: "Account Holder Name", name: "bankDetails.accountHolderName", type: "text" },
        { label: "Account Number", name: "bankDetails.accountNo", type: "text" },
        { label: "Bank Name", name: "bankDetails.bankName", type: "text" },
        { label: "Branch Name", name: "bankDetails.branchName", type: "text" },
        { label: "IFSC Code", name: "bankDetails.ifscCode", type: "text" },
        { label: "Cancelled Cheque", name: "bankDetails.cancelledChequeURL", type: "file" }
      ]
    };

    return (
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        {fields[step].map(({ label, name, type }) => (
          <Grid item xs={12} key={name}>
            <TextField
              required
              fullWidth
              label={label}
              name={name}
              type={type}
              value={type === 'file' ? undefined : formData[name.split('.')[0]][name.split('.')[1]]}
              onChange={handleChange}
              error={Boolean(formErrors[name])}
              helperText={formErrors[name]}
              inputProps={{ style: { fontFamily: "lato" } }}
              InputLabelProps={{ style: { fontFamily: "lato" } }}
            />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Container maxWidth="md">
      <Stepper activeStep={currentStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel
              sx={{
                fontWeight: "700",
                color: "primary.main",
                fontSize: "2rem",
                textTransform: "uppercase",
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <form onSubmit={handleSubmit}>
        {renderStepContent(currentStep)}
        <Grid container spacing={2} sx={{ marginTop: 4 }}>
          <Grid item xs={6}>
            {currentStep > 0 && (
              <Button variant="contained" color="primary" onClick={handleStepChange(-1)}>
                Back
              </Button>
            )}
          </Grid>
          <Grid item xs={6} textAlign="right">
            {currentStep < steps.length - 1 ? (
              <Button variant="contained" color="primary" onClick={handleStepChange(1)}>
                Next
              </Button>
            ) : (
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Multis;
