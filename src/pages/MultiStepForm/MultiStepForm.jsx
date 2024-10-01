import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Stepper,
  Step,
  StepLabel,
  Input,
  CircularProgress,
} from "@mui/material";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/AuthContext";

const steps = [
  "Personal Information",
  "KYC Information",
  "Upload Documents",
  "Bank Details",
];

const MultiStepForm = () => {
  const navigate = useNavigate();
  const { sellerRegister } = useAuth();
  const api = process.env.REACT_APP_API;
  
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
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
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const fileName = files[0] ? files[0].name : null;

      setFormData((prevState) => {
        const [step, field] = name.split(".");
        return {
          ...prevState,
          [step]: {
            ...prevState[step],
            [field]: fileName,
          },
        };
      });
    } else {
      setFormData((prevState) => {
        const [step, field] = name.split(".");
        return {
          ...prevState,
          [step]: {
            ...prevState[step],
            [field]: value,
          },
        };
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    let hasErrors = false;

    Object.keys(formData).forEach((key) => {
      if (typeof formData[key] === "object") {
        Object.keys(formData[key]).forEach((subKey) => {
          if (
            !formData[key][subKey] &&
            subKey !== "cancelledChequeURL" &&
            subKey !== "address" &&
            subKey !== "idProof" &&
            subKey !== "pan" &&
            subKey !== "gst"
          ) {
            errors[`${key}.${subKey}`] = true;
            hasErrors = true;
          }
        });
      } else if (!formData[key]) {
        errors[key] = true;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${api}adminRegister`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      toast(data.message);
      if (data.message === "Seller added successfully") {
        const token = data.token;
        Cookies.set("token", token);
        sellerRegister();
        navigate("/StoreDetails");
        setCurrentStep(0);
        setFormData({
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
        });
        setFormErrors({});
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
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
        {currentStep === 0 && (
          <Grid container spacing={1} sx={{ marginTop: 4 }}>
            <Grid item xs={12}>
              <TextField
                sx={{ fontFamily: "lato" }}
                required
                fullWidth
                label="Email"
                name="detailsOfProvider.email"
                value={formData.detailsOfProvider.email}
                onChange={handleChange}
                error={Boolean(formErrors["detailsOfProvider.email"])}
                helperText={
                  formErrors["detailsOfProvider.email"] && "Email is required"
                }
                inputProps={{ style: { fontFamily: "lato" } }}
                InputLabelProps={{ style: { fontFamily: "lato" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Mobile Number"
                name="detailsOfProvider.mobileNumber"
                value={formData.detailsOfProvider.mobileNumber}
                onChange={handleChange}
                error={Boolean(formErrors["detailsOfProvider.mobileNumber"])}
                helperText={
                  formErrors["detailsOfProvider.mobileNumber"] &&
                  "Mobile Number is required"
                }
                inputProps={{ style: { fontFamily: "lato" } }}
                InputLabelProps={{ style: { fontFamily: "lato" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Name"
                name="detailsOfProvider.Orgname"
                value={formData.detailsOfProvider.Orgname}
                onChange={handleChange}
                error={Boolean(formErrors["detailsOfProvider.Orgname"])}
                helperText={
                  formErrors["detailsOfProvider.Orgname"] && "Name is required"
                }
                inputProps={{ style: { fontFamily: "lato" } }}
                InputLabelProps={{ style: { fontFamily: "lato" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                name="detailsOfProvider.password"
                value={formData.detailsOfProvider.password}
                onChange={handleChange}
                error={Boolean(formErrors["detailsOfProvider.password"])}
                helperText={
                  formErrors["detailsOfProvider.password"] &&
                  "Password is required"
                }
                inputProps={{ style: { fontFamily: "lato" } }}
                InputLabelProps={{ style: { fontFamily: "lato" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Role"
                name="detailsOfProvider.role"
                value={formData.detailsOfProvider.role}
                onChange={handleChange}
                error={Boolean(formErrors["detailsOfProvider.role"])}
                helperText={
                  formErrors["detailsOfProvider.role"] && "Role is required"
                }
                inputProps={{ style: { fontFamily: "lato" } }}
                InputLabelProps={{ style: { fontFamily: "lato" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Access Status"
                name="detailsOfProvider.accessStatus"
                value={formData.detailsOfProvider.accessStatus}
                onChange={handleChange}
                error={Boolean(formErrors["detailsOfProvider.accessStatus"])}
                helperText={
                  formErrors["detailsOfProvider.accessStatus"] &&
                  "Access Status is required"
                }
                inputProps={{ style: { fontFamily: "lato" } }}
                InputLabelProps={{ style: { fontFamily: "lato" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Approval Status"
                name="detailsOfProvider.isApprovedByAdmin"
                value={formData.detailsOfProvider.isApprovedByAdmin}
                onChange={handleChange}
                error={Boolean(formErrors["detailsOfProvider.isApprovedByAdmin"])}
                helperText={
                  formErrors["detailsOfProvider.isApprovedByAdmin"] &&
                  "Approval Status is required"
                }
                inputProps={{ style: { fontFamily: "lato" } }}
                InputLabelProps={{ style: { fontFamily: "lato" } }}
              />
            </Grid>
          </Grid>
        )}
        {currentStep === 1 && (
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Provider Name"
                name="KYCdetails.providerName"
                value={formData.KYCdetails.providerName}
                onChange={handleChange}
                error={Boolean(formErrors["KYCdetails.providerName"])}
                helperText={
                  formErrors["KYCdetails.providerName"] && "Provider Name is required"
                }
                inputProps={{ style: { fontFamily: "lato" } }}
                InputLabelProps={{ style: { fontFamily: "lato" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Registered Address"
                name="KYCdetails.registeredAdd"
                value={formData.KYCdetails.registeredAdd}
                onChange={handleChange}
                error={Boolean(formErrors["KYCdetails.registeredAdd"])}
                helperText={
                  formErrors["KYCdetails.registeredAdd"] && "Registered Address is required"
                }
                inputProps={{ style: { fontFamily: "lato" } }}
                InputLabelProps={{ style: { fontFamily: "lato" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Store Email"
                name="KYCdetails.storeEmail"
                value={formData.KYCdetails.storeEmail}
                onChange={handleChange}
                error={Boolean(formErrors["KYCdetails.storeEmail"])}
                helperText={
                  formErrors["KYCdetails.storeEmail"] && "Store Email is required"
                }
                inputProps={{ style: { fontFamily: "lato" } }}
                InputLabelProps={{ style: { fontFamily: "lato" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Mobile Number"
                name="KYCdetails.mobileNo"
                value={formData.KYCdetails.mobileNo}
                onChange={handleChange}
                error={Boolean(formErrors["KYCdetails.mobileNo"])}
                helperText={
                  formErrors["KYCdetails.mobileNo"] && "Mobile Number is required"
                }
                inputProps={{ style: { fontFamily: "lato" } }}
                InputLabelProps={{ style: { fontFamily: "lato" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="PAN Number"
                name="KYCdetails.PANNo"
                value={formData.KYCdetails.PANNo}
                onChange={handleChange}
                error={Boolean(formErrors["KYCdetails.PANNo"])}
                helperText={
                  formErrors["KYCdetails.PANNo"] && "PAN Number is required"
                }
                inputProps={{ style: { fontFamily: "lato" } }}
                InputLabelProps={{ style: { fontFamily: "lato" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="GSTIN"
                name="KYCdetails.GSTIN"
                value={formData.KYCdetails.GSTIN}
                onChange={handleChange}
                error={Boolean(formErrors["KYCdetails.GSTIN"])}
                helperText={
                  formErrors["KYCdetails.GSTIN"] && "GSTIN is required"
                }
                inputProps={{ style: { fontFamily: "lato" } }}
                InputLabelProps={{ style: { fontFamily: "lato" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="FSSAI Number"
                name="KYCdetails.FSSAINo"
                value={formData.KYCdetails.FSSAINo}
                onChange={handleChange}
                error={Boolean(formErrors["KYCdetails.FSSAINo"])}
                helperText={
                  formErrors["KYCdetails.FSSAINo"] && "FSSAI Number is required"
                }
                inputProps={{ style: { fontFamily: "lato" } }}
                InputLabelProps={{ style: { fontFamily: "lato" } }}
              />
            </Grid>
          </Grid>
        )}
        {currentStep === 2 && (
          <Grid container spacing={8} sx={{ marginTop: 4 }}>
            <Grid item xs={12}>
            <p>Address Proof</p>
              <Input
                type="file"
                name="KYCurl.address"
                onChange={handleChange}
                fullWidth
              />
              {formData.KYCurl.address && <p>{formData.KYCurl.address}</p>}
            </Grid>
           

            <Grid item xs={12}>
            <p>ID Proof </p>
              <Input
                type="file"
                name="KYCurl.idProof"
                onChange={handleChange}
                fullWidth
              />
              {formData.KYCurl.idProof && <p>{formData.KYCurl.idProof}</p>}
            </Grid>
            <Grid item xs={12}>
            <p>PAN Card Proof</p>

              <Input
                type="file"
                name="KYCurl.pan"
                onChange={handleChange}
                fullWidth
              />
              {formData.KYCurl.pan && <p>{formData.KYCurl.pan}</p>}
            </Grid>
            <Grid item xs={12}>
            <p>GSTIN Proof</p>

              <Input
                type="file"
                name="KYCurl.gst"
                onChange={handleChange}
                fullWidth
              />
              {formData.KYCurl.gst && <p>{formData.KYCurl.gst}</p>}
            </Grid>
          </Grid>
        )}
        {currentStep === 3 && (
          <Grid container spacing={4} sx={{ marginTop: 4 }}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Account Holder Name"
                name="bankDetails.accountHolderName"
                value={formData.bankDetails.accountHolderName}
                onChange={handleChange}
                error={Boolean(formErrors["bankDetails.accountHolderName"])}
                helperText={
                  formErrors["bankDetails.accountHolderName"] &&
                  "Account Holder Name is required"
                }
                inputProps={{ style: { fontFamily: "lato" } }}
                InputLabelProps={{ style: { fontFamily: "lato" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Account Number"
                name="bankDetails.accountNo"
                value={formData.bankDetails.accountNo}
                onChange={handleChange}
                error={Boolean(formErrors["bankDetails.accountNo"])}
                helperText={
                  formErrors["bankDetails.accountNo"] && "Account Number is required"
                }
                inputProps={{ style: { fontFamily: "lato" } }}
                InputLabelProps={{ style: { fontFamily: "lato" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Bank Name"
                name="bankDetails.bankName"
                value={formData.bankDetails.bankName}
                onChange={handleChange}
                error={Boolean(formErrors["bankDetails.bankName"])}
                helperText={
                  formErrors["bankDetails.bankName"] && "Bank Name is required"
                }
                inputProps={{ style: { fontFamily: "lato" } }}
                InputLabelProps={{ style: { fontFamily: "lato" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Branch Name"
                name="bankDetails.branchName"
                value={formData.bankDetails.branchName}
                onChange={handleChange}
                error={Boolean(formErrors["bankDetails.branchName"])}
                helperText={
                  formErrors["bankDetails.branchName"] && "Branch Name is required"
                }
                inputProps={{ style: { fontFamily: "lato" } }}
                InputLabelProps={{ style: { fontFamily: "lato" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="IFSC Code"
                name="bankDetails.ifscCode"
                value={formData.bankDetails.ifscCode}
                onChange={handleChange}
                error={Boolean(formErrors["bankDetails.ifscCode"])}
                helperText={
                  formErrors["bankDetails.ifscCode"] && "IFSC Code is required"
                }
                inputProps={{ style: { fontFamily: "lato" } }}
                InputLabelProps={{ style: { fontFamily: "lato" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type="file"
                name="bankDetails.cancelledChequeURL"
                onChange={handleChange}
                fullWidth
              />
              {formData.bankDetails.cancelledChequeURL && <p>{formData.bankDetails.cancelledChequeURL}</p>}
            </Grid>
          </Grid>
        )}
        <Grid container spacing={2} sx={{ marginTop: 4 }}>
          <Grid item xs={6}>
            {currentStep > 0 && (
              <Button variant="contained" color="primary" onClick={prevStep}>
                Back
              </Button>
            )}
          </Grid>
          <Grid item xs={6} textAlign="right">
            {currentStep < steps.length - 1 ? (
              <Button variant="contained" color="primary" onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} color="warning" /> : "Submit"}
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default MultiStepForm;
