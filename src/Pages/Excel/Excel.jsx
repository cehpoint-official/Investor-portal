import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import database from './firebase'; // Import the firebase instance

const Excel = () => {
  const [jsonData, setJsonData] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheet_name = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheet_name];
      const dataJson = XLSX.utils.sheet_to_json(worksheet);
      setJsonData(dataJson);
    };

    reader.readAsBinaryString(file);
  };

  const sendDataToFirebase = () => {
    if (jsonData) {
      const excelDataRef = database.ref('excelData');
      excelDataRef.set(jsonData)
        .then(() => {
          console.log('Data uploaded to Firebase!');
        })
        .catch((error) => {
          console.error('Error uploading data:', error);
        });
    } else {
      console.error('No data to upload.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFile} />
      <button onClick={sendDataToFirebase}>Send</button>
    </div>
  );
};

export default Excel;
