import React, { useEffect, useState } from 'react';
import { getMockData } from '../../api/getMockData';
import { Response } from '../../types/types';
import Promo from '../promo/promo';
import { promoInfo } from '../../mock/mockData';
import BundleInfo from '../bundle-info/bundle-info';

function App() {
  const [bundleData, setBundleData] = useState<Response>();

  useEffect(() => {
    getMockData().then((data) => setBundleData(data));
  }, []);

  if (typeof bundleData === 'undefined') {
    return null;
  }

  return (
    <div className="App">
      <Promo {...promoInfo} />
      <BundleInfo bundleData={bundleData} />
    </div>
  );
}

export default App;
