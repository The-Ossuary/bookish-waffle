import React, { useState } from 'react';

function App() {
  const [tokenId, setTokenId] = useState('');
  const [ritualData, setRitualData] = useState('');
  const [result, setResult] = useState(null);

  const performRitual = async () => {
    const response = await fetch('http://localhost:3001/ritual', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tokenId, ritualData }),
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Ossuary Ritual dApp</h1>
      <input
        placeholder="Token ID"
        value={tokenId}
        onChange={e => setTokenId(e.target.value)}
        style={{ marginRight: 8 }}
      />
      <input
        placeholder="Ritual Data"
        value={ritualData}
        onChange={e => setRitualData(e.target.value)}
        style={{ marginRight: 8 }}
      />
      <button onClick={performRitual}>Perform Ritual</button>
      {result && (
        <div style={{ marginTop: 24 }}>
          <h2>Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;