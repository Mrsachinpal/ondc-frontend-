import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  CircularProgress,
  Input,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const UpdateMultiStepForm = () => {
  const [formData, setFormData] = useState({
    detailsOfProvider: {
      email: "",
      mobileNumber: "",
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
      address: "",
      idProof: "",
      pan: "",
      gst: "",
    },
    bankDetails: {
      accountHolderName: "",
      accountNo: "",
      bankName: "",
      branchName: "",
      ifscCode: "",
      cancelledChequeURL: "",
    },
  });
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      console.error("No token found");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/dashboard/getAdminProfile",
          {
            method: "GET",
            headers: {
              authorization: `${token}`,
            },
          }
        );
        const data = await response.json();
        console.log("Fetch data",data)

        if (data.success === true) {
          setFormData({
            detailsOfProvider: {
              email: data.data.UserDetails.email,
              mobileNumber: data.data.UserDetails.mobileNumber,
            },
            KYCdetails: {
              providerName: data.data.OrganizationDetails.providerName,
              registeredAdd: data.data.OrganizationDetails.registeredAdd,
              storeEmail: data.data.OrganizationDetails.storeEmail,
              mobileNo: data.data.OrganizationDetails.mobileNo,
              PANNo: data.data.OrganizationDetails.PANNo,
              GSTIN: data.data.OrganizationDetails.GSTIN,
              FSSAINo: data.data.OrganizationDetails.FSSAINo,
            },
            KYCurl: {
              address: data.data.OrganizationDetails.addressURL,
              idProof: data.data.OrganizationDetails.idProofURL,
              pan: data.data.OrganizationDetails.panURL,
              gst: data.data.OrganizationDetails.gstURL,
            },
            bankDetails: {
              accountHolderName: data.data.BankDetails.accHolderName,
              accountNo: data.data.BankDetails.accNo,
              bankName: data.data.BankDetails.bankName,
              branchName: data.data.BankDetails.branchName,
              ifscCode: data.data.BankDetails.ifscCode,
              cancelledChequeURL: data.data.BankDetails.cancelledChequeUrl,
            }
          });
        } else {
          console.log("Data fetch failed");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      // File inputs cannot be set programmatically. Show preview or URL instead.
      const fileName = files[0] ? files[0].name : "";

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
    const token = Cookies.get("token");
    const errors = {};
    let hasErrors = false;

    Object.keys(formData).forEach((key) => {
      if (typeof formData[key] === "object") {
        Object.keys(formData[key]).forEach((subKey) => {
          if (
            !formData[key][subKey] &&
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
      const response = await fetch(
        `http://localhost:8080/dashboard/adminProfileUpdate`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      toast(data.message);
      if (data.success === true) {
        alert("Update successful");
        setFormData({
          detailsOfProvider: {
            email: "",
            mobileNumber: "",
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
            address: "",
            idProof: "",
            pan: "",
            gst: "",
          },
          bankDetails: {
            accountHolderName: "",
            accountNo: "",
            bankName: "",
            branchName: "",
            ifscCode: "",
            cancelledChequeURL: "",
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

  return (
    <Container maxWidth="md">
      <Typography align="center" variant="h4"  marginTop="10px" sx={{ fontWeight: 'bold' }}>Update Seller Info</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ marginTop: 4 }}>
          {/* Personal Information */}
          <Grid item xs={12}>
            <TextField
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

          {/* KYC Information */}
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
                formErrors["KYCdetails.providerName"] &&
                "Provider Name is required"
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
                formErrors["KYCdetails.registeredAdd"] &&
                "Registered Address is required"
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
                formErrors["KYCdetails.storeEmail"] &&
                "Store Email is required"
              }
              inputProps={{ style: { fontFamily: "lato" } }}
              InputLabelProps={{ style: { fontFamily: "lato" } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Mobile No"
              name="KYCdetails.mobileNo"
              value={formData.KYCdetails.mobileNo}
              onChange={handleChange}
              error={Boolean(formErrors["KYCdetails.mobileNo"])}
              helperText={
                formErrors["KYCdetails.mobileNo"] &&
                "Mobile No is required"
              }
              inputProps={{ style: { fontFamily: "lato" } }}
              InputLabelProps={{ style: { fontFamily: "lato" } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="PAN No"
              name="KYCdetails.PANNo"
              value={formData.KYCdetails.PANNo}
              onChange={handleChange}
              error={Boolean(formErrors["KYCdetails.PANNo"])}
              helperText={
                formErrors["KYCdetails.PANNo"] && "PAN No is required"
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
              fullWidth
              label="FSSAI No"
              name="KYCdetails.FSSAINo"
              value={formData.KYCdetails.FSSAINo}
              onChange={handleChange}
              error={Boolean(formErrors["KYCdetails.FSSAINo"])}
              helperText={
                formErrors["KYCdetails.FSSAINo"] && "FSSAI No is required"
              }
              inputProps={{ style: { fontFamily: "lato" } }}
              InputLabelProps={{ style: { fontFamily: "lato" } }}
            />
          </Grid>

          {/* Upload Documents */}
          <Grid item xs={12}>
            <Typography>Address Proof: {formData.KYCurl.address}</Typography>
            <Input
            
              fullWidth
              type="file"
              name="KYCurl.address"
              onChange={handleChange}
              inputProps={{ style: { fontFamily: "lato" } }}
            />
            <Typography>ID Proof: {formData.KYCurl.idProof}</Typography>
            <Input
              fullWidth
              type="file"
              name="KYCurl.idProof"
              onChange={handleChange}
              inputProps={{ style: { fontFamily: "lato" } }}
            />
            <Typography>PAN: {formData.KYCurl.pan}</Typography>
            <Input
              fullWidth
              type="file"
              name="KYCurl.pan"
              onChange={handleChange}
              inputProps={{ style: { fontFamily: "lato" } }}
            />
            <Typography>GST: {formData.KYCurl.gst}</Typography>
            <Input
              fullWidth
              type="file"
              name="KYCurl.gst"
              onChange={handleChange}
              inputProps={{ style: { fontFamily: "lato" } }}
            />
          </Grid>

          {/* Bank Details */}
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
              label="Account No"
              name="bankDetails.accountNo"
              value={formData.bankDetails.accountNo}
              onChange={handleChange}
              error={Boolean(formErrors["bankDetails.accountNo"])}
              helperText={
                formErrors["bankDetails.accountNo"] && "Account No is required"
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
                formErrors["bankDetails.branchName"] &&
                "Branch Name is required"
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
            <Typography>Cancelled Cheque: {formData.bankDetails.cancelledChequeURL}</Typography>
            <Input
              fullWidth
              type="file"
              name="bankDetails.cancelledChequeURL"
              onChange={handleChange}
              inputProps={{ style: { fontFamily: "lato" } }}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Submit"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default UpdateMultiStepForm;