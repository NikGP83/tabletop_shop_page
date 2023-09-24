import React, { useEffect, useState } from 'react';
import { getMockData } from '../api/getMockData';
import { Response } from '../types/types';

function App() {
  const [data, setData] = useState<Response>();
  console.log(data);

  useEffect(() => {
    getMockData().then((data) => setData(data));
  }, []);

  return <div className="App"></div>;
}

export default App;
