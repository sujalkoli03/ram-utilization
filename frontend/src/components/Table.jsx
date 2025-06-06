import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.csv') 
      .then(response => response.text())
      .then(csvData => {
        Papa.parse(csvData, {
          complete: (result) => {
            setData(result.data); 
          },
          header: true, 
        });
      })
      .catch(error => console.error('Error fetching CSV file:', error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r pb-8 from-blue-500 to-purple-600 text-transparent bg-clip-text">
        CSV Data Table
      </h1>
      
      <table className="min-w-full table-auto border-collapse border border-gray-00">
        <thead className='text-blue-600'>
          <tr>
            {data[0] && Object.keys(data[0]).map((key) => (
              <th key={key} className="border px-4 py-2">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, idx) => (
                <td key={idx} className="border px-4 py-2">{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
