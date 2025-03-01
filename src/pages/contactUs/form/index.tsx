import { FormGroup, MenuItem, TextField } from "@mui/material";
import React from "react";

function Form() {
  const values = [
    {
      value: "My enqury relates to a personal matter.",
    },
    {
      value: "My enqury relates to a corporate matter.",
    },
  ];
  return (
    <div>
      <p className="text-base font-semibold text-gray-500">
        What is the reason for your enquiry?
      </p>
      <p className="text-xs mt-2 font-light text-gray-900">
        It will really help us to give you the most accurate quotation if you
        could let us know whether you are enquiring in relation to a personal or
        corporate matter.
      </p>
      <FormGroup className="mt-4">
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="standard"
        >
          {values.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          sx={{ mt: 2 }} // 4 * 8px = 32px
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          sx={{ mt: 2 }} // 4 * 8px = 32px
        />
        <TextField
          id="standard-basic"
          label="Phone Number"
          variant="standard"
          sx={{ mt: 2 }} // 4 * 8px = 32px
        />
        <TextField
          id="outlined-multiline"
          label="Message"
          multiline
          rows={8} // Jumlah baris awal yang ditampilkan
          variant="outlined"
          sx={{ mt: 2 }}
        />
        <p className="text-base mt-2 font-semibold text-gray-500">
          Preffered Location
        </p>
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="standard"
          sx={{ mt: 1 }}
        >
          {values.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <p className="text-xs mt-2 font-light text-gray-900">
          Please select your preferred location to meet one of our team members.
        </p>
      </FormGroup>
      <p className="text-base mt-4 font-normal text-gray-900">
        All work undertaken by Vanner Perez Notaries LLP is subject to our
        standard terms of business, which you can view here. By submitting a
        request for a quotation, you agree to be bound by these terms.
      </p>
      <p className="text-base font-semibold text-gray-500 mt-4">
        We respond to all enquiries. If you don't receive a response within a
        day or two, check your spam folder or give us a quick call.
      </p>
      <div className="flex justify-center">
        <button className="bg-blue-900 py-4 px-16 text-lg text-white mt-8 hover:bg-blue-950">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Form;
