import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Grid,
  Stack,
  ThemeProvider,
  createTheme,
  TextField,
  // FormControl,
  // InputLabel,
  // Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  TablePagination,
  Switch,
  Typography,
  // AppBar,
  // Toolbar,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

function Inventory() {
  // const [productCategory, setProductCategory] = useState("");
  const [checked, setChecked] = useState(false);
  const [anchorEls, setAnchorEls] = useState({}); // Array to store anchorEl for each row
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch product data from API
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");

        // If there is a search query, include it in the API call as a query parameter
        const apiUrl = searchQuery
          ? `http://localhost:8080/product/search?name=${searchQuery}`
          : "http://localhost:8080/product/products";

        const response = await fetch(apiUrl, {
          headers: {
            authorization: `${token}`, // Replace with actual token
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setFilteredData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]); // Run useEffect when searchQuery changes

  useEffect(() => {
    // Function to fetch product data from API
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");
        const response = await fetch("http://localhost:8080/product/products", {
          headers: {
            authorization: `${token}`, // Replace with actual token
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setFilteredData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // const handleCategoryChange = (event) => {
  //   setProductCategory(event.target.value);
  // };

  const handleChangeChecked = (event) => {
    setChecked(event.target.checked);
  };

  const handleClick = (event, index) => {
    setAnchorEls((prev) => ({
      ...prev,
      [index]: event.currentTarget,
    }));
  };

  const handleClose = (index) => {
    setAnchorEls((prev) => ({
      ...prev,
      [index]: null,
    }));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter data based on search and category
  const handleFilter = async () => {
    let stock = "";

    if (checked) {
      stock = "outOfStock"; // Set stock filter to outOfStock when checked
    } else {
      stock = "inStock"; // Set stock filter to inStock when not checked
    }

    try {
      const token = Cookies.get("token");
      const response = await fetch(`http://localhost:8080/product/search?name=${searchQuery}&stock=${stock}`, {
        headers: {
          authorization: `${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Filtered data:", data);
      setFilteredData(data);
      setPage(0); // Reset to the first page after filtering
    } catch (error) {
      setError(error.message);
    }
  };

  // Reset filters
  const handleReset = () => {
    setSearchQuery("");
    // setProductCategory("");
    setChecked(false);
    // Fetch fresh data after reset
    const fetchData = async () => {
      const token = Cookies.get("token");
      try {
        const response = await fetch("http://localhost:8080/product/products", {
          headers: {
            Authorization: `${token}`, // Replace with actual token
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setFilteredData(data);
        setPage(0); // Reset to the first page after reset
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  };

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Paginate the filtered data
  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  if (loading) {
    return (
      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          margin: 0,
        }}
      >
        Loading...
      </Typography>
    );
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box height="30px" />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="">
            <ThemeProvider theme={theme}>
              {/* Filter Section */}
              
              <Grid container spacing={2} alignItems="center" sx={{ px: 2 }}>
                <Grid item xs={12}>
                  {/* <Typography color="primary" sx={{ fontWeight: "bold" }}>
                    Filters
                  </Typography> */}
                </Grid>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  textAlign="center"
                >
                  <Grid item xs={12} sm={4}>
                    <TextField
                      id="standard-search"
                      label="Search by Product Name"
                      type="search"
                      variant="standard"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      sx={{ width: "100%" }}
                    />
                  </Grid>

                  {/* Uncomment this block for product category select */}
                  {/* 
  <Grid item xs={12} sm={4}>
    <FormControl variant="standard" sx={{ width: "100%" }}>
      <InputLabel id="demo-simple-select-standard-label">
        Please Select Product Category
      </InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="select_product"
        value={productCategory}
        onChange={handleCategoryChange}
        label="Please Select Product Category"
      >
        <MenuItem value=""></MenuItem>
        <MenuItem value="Product">Product</MenuItem>
        <MenuItem value="Customization">Customization</MenuItem>
      </Select>
    </FormControl>
  </Grid> 
  */}

                  <Grid item xs={12} sm={2}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Out of Stock</Typography>
                      <Switch
                        checked={checked}
                        onChange={handleChangeChecked}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </Stack>
                  </Grid>

                  <Grid item xs={12} sm={2}>
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleReset}
                      >
                        RESET
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleFilter}
                      >
                        FILTER
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>

              </Grid>
              <Box height="20px" />

              {/* Action Buttons */}
              <Grid
                container
                spacing={2}
                justifyContent="flex-end"
                sx={{ px: 2 }}
              >
                <Grid item>
                  <Button variant="contained" color="primary">
                    + BULK UPLOAD
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate("/addProductpage")}
                  >
                    + ADD PRODUCT
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    + ADD CUSTOMIZATION
                  </Button>
                </Grid>
              </Grid>

              <Box height="20px" />

              {/* Table Section */}
              <Grid container spacing={2} sx={{ px: 2 }}>
                <Grid item xs={12}>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow style={{ backgroundColor: "#1976d2" }}>
                          <TableCell style={{ color: "white" }}>
                            Product Name
                          </TableCell>
                          <TableCell style={{ color: "white" }}>
                            Quantity
                          </TableCell>
                          <TableCell style={{ color: "white" }}>
                            Purchase Price
                          </TableCell>
                          <TableCell style={{ color: "white" }}>
                            Cancellable
                          </TableCell>
                          <TableCell style={{ color: "white" }}>
                            Returnable
                          </TableCell>
                          <TableCell style={{ color: "white" }}>
                            Published
                          </TableCell>
                          <TableCell style={{ color: "white" }}>
                            Action
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {paginatedData.map((row, index) => {
                          return (
                            <TableRow key={index}>
                              <TableCell>{row.productName}</TableCell>
                              <TableCell>{row.quantity}</TableCell>
                              <TableCell>
                                &#8377;&nbsp;{row.purchasePrice}
                              </TableCell>
                              <TableCell>
                                {row.isCancellable ? "Yes" : "No"}
                              </TableCell>
                              <TableCell>
                                {row.isReturnable ? "Yes" : "No"}
                              </TableCell>
                              <TableCell>
                                {row.published ? "Yes" : "No"}
                              </TableCell>
                              <TableCell>
                                <IconButton
                                  aria-label="more"
                                  aria-controls={`long-menu-${index}`}
                                  aria-haspopup="true"
                                  onClick={(event) => handleClick(event, index)}
                                >
                                  <MoreVertIcon />
                                </IconButton>
                                <Menu
                                  id={`long-menu-${index}`}
                                  anchorEl={anchorEls[index]}
                                  open={Boolean(anchorEls[index])}
                                  onClose={() => handleClose(index)}
                                >
                                  <Link to={`/updateProductPage/${row._id}`}>
                                    <MenuItem
                                      onClick={() => handleClose(index)}
                                    >
                                      Edit
                                    </MenuItem>
                                  </Link>
                                  <MenuItem onClick={() => handleClose(index)}>
                                    Delete
                                  </MenuItem>
                                </Menu>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25]}
                      component="div"
                      count={filteredData.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </TableContainer>
                </Grid>
              </Grid>
            </ThemeProvider>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default Inventory;