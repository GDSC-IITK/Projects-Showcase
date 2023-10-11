import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateFilter = ({ onFilter }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const applyFilter = () => {
    onFilter(startDate, endDate);
  };

  return (
    <div className='date-filter'>
      <div className='date-filter-dates'>
        <label>Start Date:</label>
        <DatePicker selected={startDate} onChange={handleStartDateChange} />
      </div>
      <div className='date-filter-dates'>
        <label>End Date:</label>
        <DatePicker selected={endDate} onChange={handleEndDateChange} />
      </div>

      <button className="filter-button" onClick={applyFilter}>Apply</button>
    </div>
  );
};

export default DateFilter;
