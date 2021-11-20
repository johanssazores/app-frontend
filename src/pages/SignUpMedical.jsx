import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Medical Details
      </Typography>
      <div className="row">
        <div className="col-sm-12 col-md-6">
        <label>Pregnant?</label>
          <select type="text" className="form-control">
            <option value="" disabled>-SELECT-</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="col-sm-12 col-md-6">
        <label>If yes how many months?</label>
          <input type="text" className="form-control" placeholder="Months" />
        </div>

        <div className="col-sm-12 col-md-6">
          <label htmlFor="">Blood Type:</label>
          <select type="text" className="form-control">
            <option value="" disabled>-SELECT-</option>
            <option value="">A+</option>
            <option value="">O+</option>
            <option value="">B+ </option>
            <option value="">AB+ </option>
            <option value="">A+ </option>
            <option value="">O- </option>
            <option value="">B- </option>
            <option value="">AB- </option>
          </select>
        </div>

        <div className="col-sm-12 col-md-6">
        <label>With maintenance?</label>
          <select type="text" className="form-control">
            <option value="" disabled>-SELECT-</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="col-sm-12 col-md-6">
        <label>On Going Medication?</label>
          <select type="text" className="form-control">
            <option value="" disabled>-SELECT-</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="col-sm-12 col-md-6">
        <label>Name of Medicine:</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-sm-12 col-md-6">
        <label>Last Hospital Visit/Checkup?</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-sm-12 col-md-12">
            {/* <Link to="/register-2" className="btn btn-primary" href="">Submit</Link> */}
        </div>
    </div>
    </React.Fragment>
  );
}