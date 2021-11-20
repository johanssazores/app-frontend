import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function PaymentForm() {
  
  return (
    <React.Fragment>
      
      <Typography variant="h6" gutterBottom>
       Personal Information
      </Typography>

      <div className="row">
        <div className="col-sm-12 col-md-6">
        <label>Name:</label>
          <input type="text" className="form-control" required/>
        </div>

        <div className="col-sm-12 col-md-6">
          <label>Sex Assigned at Birth: </label>
          <select type="text" className="form-control" required>
            <option value="" disabled>-SELECT-</option>
            <option value="">Male</option>
            <option value="">Female</option>
          </select>
        </div>

        <div className="col-sm-12 col-md-6">
          <label>Date Of Birth: </label>
          <input type="text" className="form-control" required />
        </div>

        <div className="col-sm-12 col-md-6">
          <label>Address: </label>
          <input type="text" className="form-control" required />
        </div>

        <div className="col-sm-12 col-md-6">
          <label>Martital Status: </label>
          <input type="text" className="form-control" required />
        </div>

        <div className="col-sm-12 col-md-6">
          <label>No. Children: </label>
          <input type="text" className="form-control" required />
        </div>

        <div className="col-sm-12 col-md-6">
          <label>Citizenship: </label>
          <input type="text" className="form-control" required />
        </div>

        <div className="col-sm-12 col-md-6">
          <label>Religion: </label>
          <input type="text" className="form-control" required />
        </div>
        <div className="col-sm-12 col-md-6">
          <label>Phone number: </label>
          <input type="text" className="form-control" required />
        </div>
        <div className="col-sm-12 col-md-6">
          <label>Email: </label>
          <input type="email" className="form-control" required/>
        </div>
        <div className="col-sm-12 col-md-6">
          <label>Barangay: </label>
          <select type="text" className="form-control" required>
            <option value="" disabled>-SELECT-</option>
            <option value="">Barangay 1</option>
            <option value="">Barangay 2</option>
          </select>
        </div>
      </div>
    </React.Fragment>
  );
}