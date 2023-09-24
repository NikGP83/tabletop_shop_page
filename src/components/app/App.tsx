import React, { useEffect, useState } from 'react';
import { getMockData } from '../../api/getMockData';
import { Response } from '../../types/types';
import OfferRoom from '../offer-room/offer-room';

function App() {
  const [data, setData] = useState<Response>();

  useEffect(() => {
    getMockData().then((data) => setData(data));
  }, []);

  if (typeof data === 'undefined') {
    return null;
  }

  return (
    <div className="App">
      <OfferRoom />
    </div>
  );
}

export default App;
