import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function AddressForm() {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Education
      </Typography>

      <div className="row">
        <div className="col-sm-12 col-md-6">
          <label>Highest Attained:</label>
          <select type="text" className="form-control">
            <option value="" disabled>-SELECT-</option>
            <option value="">Post Graduate</option>
            <option value="">College</option>
            <option value="">High School</option>
            <option value="">Elementary</option>
          </select>
        </div>
        <div className="col-sm-12 col-md-6">
        <label>Status:</label>
          <select type="text" className="form-control">
            <option value="" disabled>-SELECT-</option>
            <option value="">Drop Out</option>
            <option value="">On Going</option>
            <option value="">Graduate </option>
          </select>
        </div>
        <div className="col-sm-12 col-md-6">
          <label>School</label>
          <input type="text" className="form-control" placeholder="School" />
        </div>
        <div className="col-sm-12 col-md-6">
          <label>Course</label>
          <input type="text" className="form-control" placeholder="Course" />
        </div>
      </div>

    </React.Fragment>
  );
}