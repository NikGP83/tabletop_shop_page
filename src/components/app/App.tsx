import React, { useEffect, useState } from 'react';
import { getMockData } from '../../api/getMockData';
import { Response } from '../../types/types';
import Promo from '../promo/promo';
import { promoInfo } from '../../mock/mockData';

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
      <Promo {...promoInfo} />
    </div>
  );
}

export default App;
