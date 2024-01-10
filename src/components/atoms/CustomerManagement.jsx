import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  List,
  ListItem,
  Input,
  IconButton,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const CustomerManagement = () => {
  const initialCustomers = [
    {
      id: 1,
      companyName: "Company A",
      logo: "logo-url",
      customerName: "John Doe",
      phoneNumber: "123-456-7890",
      address: "123 Main St",
      isActive: true,
    },
  ];

  const [customers, setCustomers] = useState(initialCustomers);
  const [formData, setFormData] = useState({
    companyName: "",
    logo: "",
    customerName: "",
    phoneNumber: "",
    address: "",
    isActive: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          logo: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleCreateCustomer = () => {
    const newCustomer = {
      id: customers.length + 1,
      ...formData,
    };

    setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
    setFormData({
      companyName: "",
      logo: "",
      customerName: "",
      phoneNumber: "",
      address: "",
      isActive: true,
    });
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Customer List
      </Typography>
      <List>
        {customers.map((customer) => (
          <ListItem key={customer.id}>
            <Typography>
              {customer.companyName} - {customer.customerName} - {customer.phoneNumber} -{" "}
              {customer.address} - {customer.isActive ? "Active" : "Inactive"}
            </Typography>
          </ListItem>
        ))}
      </List>

      <Typography variant="h4" gutterBottom>
        Create Customer
      </Typography>
      <form>
        <TextField
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="logo-upload-input"
          onChange={handleFileUpload}
        />
        <label htmlFor="logo-upload-input">
          <Input
            id="upload-input"
            value={formData.logo}
            endAdornment={
              <IconButton color="primary" component="span">
                <CloudUploadIcon />
              </IconButton>
            }
            disabled
          />
        </label>
        {formData.logo && (
          <img
            src={formData.logo}
            alt="Logo Preview"
            style={{ maxWidth: "100px", maxHeight: "100px", marginTop: "10px" }}
          />
        )}
        <TextField
          label="Customer Name"
          name="customerName"
          value={formData.customerName}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <FormControlLabel
          control={
            <Checkbox checked={formData.isActive} onChange={handleInputChange} name="isActive" />
          }
          label="Is Active"
        />
        <Button variant="contained" color="primary" onClick={handleCreateCustomer}>
          Create Customer
        </Button>
      </form>
    </div>
  );
};

export default CustomerManagement;
