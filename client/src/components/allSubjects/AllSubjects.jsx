/*
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SubjectTab from './SubjectTab'

export default function SelectLabels() {
  const [dept, setDept] = React.useState('');

  const handleChange = (event) => {
    setDept(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 4, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Select Department</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={dept}
          label="Department"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Select Department</em>
          </MenuItem>
          <MenuItem value={10}>CSE</MenuItem>
          {/*<MenuItem value={20}>IT</MenuItem>
          <MenuItem value={30}>CE</MenuItem>*/
          
        /*</Select>
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 4, minWidth: 120 }}>
        <Select
          value={dept}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Select Session</em>
          </MenuItem>
          <MenuItem value={10}>2018-2021</MenuItem>
          {/*<MenuItem value={10}>2019-2022</MenuItem>
          <MenuItem value={10}>2020-2023</MenuItem>*/
/*        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>

      <SubjectTab />
    </div>
  );
}
*/

import React, {Component, useEffect, useState} from 'react'


const AllSubjects = () => {
  return (
    <div className='auth-wrapper'>
      <div className='auth-inner'>
      <table style={{ width: 1660}}>
        <tr>
          <th>Department</th>
          <th>Course</th>
          <th>Session</th>
          <th>Paper Code</th>
          <th>Paper Name</th>
          <th>Credit</th>
          <th>Mid Sem Marks</th>
          <th>Lab Assignment Marks</th>
          <th>End Sem Marks</th>
          <th>End Sem Lab Marks</th>
          <th>Total Marks</th>
        </tr>
      </table>
      </div>
    </div>
  )
}

export default AllSubjects
