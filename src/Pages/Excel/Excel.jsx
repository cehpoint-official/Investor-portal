import React, { useState } from 'react'
import excelImg from "../../Assets/excel.png"
import "./Excel.css"

const Excel = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    processFile(file);
  };

  const processFile = (file) => {
    if (file) {
      const allowedExtensions = ['csv', 'xlsx'];
      const fileExtension = file.name.split('.').pop().toLowerCase();

      if (allowedExtensions.includes(fileExtension)) {
        setSelectedFile(file);
        setErrorMessage('');
      } else {
        setSelectedFile(null);
        setErrorMessage('Please select a valid CSV or XLSX file.');
      }
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    processFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div className='Excel'>
      <button className='logs'>View Logs</button>
      {/* <img src={excelImg} alt="" /> */}
      <h2>Update Excel Here</h2>
      <div className="mainDiv">
        <div style={{ width: '50vw', height: '40vh' }}>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            style={{ width: '100%', height: '100%', borderRadius: "10px", backgroundColor: "rgb(49,151,149,0.25)", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
          >
            <label htmlFor="fileInput" className='dropLabel' style={{ cursor: 'pointer', display:"flex",flexDirection:"column",alignItems: 'center', justifyContent: 'center'}}>
              <img src={excelImg} alt="" /><br/>
              <p style={{ color:"rgba(0,0,0,0.45)"}}>Upload Excel File</p>
            </label>
          </div>
          <input
            type="file"
            accept=".csv, .xlsx"
            onChange={handleFileChange}
            id="fileInput"
            style={{ display: 'none' }}
          />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          {selectedFile && (
            <p>
              {selectedFile.name}
            </p>
          )}
          <div className='Btns'>
            <button className='manualBtn'>Enter manually</button>
            <button className='uploadBtn'>Upload</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Excel