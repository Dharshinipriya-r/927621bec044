import React, { useState } from 'react';

const AverageCalculator = () => {
  const [numberId, setNumberId] = useState('');
  const [data, setData] = useState(null);

  const fetchNumbers = async () => {
    try {
      const response = await fetch(`http://localhost:5000/numbers/${numberId}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <input
        type="text"
        value={numberId}
        onChange={(e) => setNumberId(e.target.value)}
        placeholder="Enter number ID (p, f, e, r)"
      />
      <button onClick={fetchNumbers}>Fetch Numbers</button>
      {data && (
        <div>
          <h2>Results:</h2>
          <p><strong>Previous Window State:</strong> {JSON.stringify(data.windowPrevState)}</p>
          <p><strong>Current Window State:</strong> {JSON.stringify(data.windowCurrState)}</p>
          <p><strong>Average:</strong> {data.average}</p>
        </div>
      )}
    </div>
  );
};

export default AverageCalculator;
