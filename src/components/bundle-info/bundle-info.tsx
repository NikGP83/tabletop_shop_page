import React from 'react';
import { Response } from '../../types/types';
import './bundle-info.scss';

interface BundleInfoProps {
  bundleData: Response;
}

function BundleInfo({ bundleData }: BundleInfoProps) {
  const { data, name, cost } = bundleData;

  if (typeof data === 'undefined') {
    return null;
  }

  return (
    <section className="bundle-info">
      <div className="bundle-prop-img-block">
        <img
          className="bundle-prop-img"
          src="../assets/img/vito_full_img.png"
        />
      </div>
      <div className="bundle-prop-block">
        <h2 className="bundle-prop-title">{name}</h2>
        <ul className="bundle-item-list">
          {data.map((item) => (
            <li key={item.icon_path} className="bundle-item">
              <span className="bundle-item-image">
                <img src={item.icon_path} />
              </span>
              <span className="bundle-item-title">{item.item}</span>
              <span className="bundle-item-title">{item.free_server}</span>
              <span className="bundle-item-title">{item.server}</span>
            </li>
          ))}
        </ul>
        <div className="bundle-price-block">
          <img
            src="../assets/img/bundle_box.png"
            alt="Картинка товара"
            className="bundle-price-image"
          />
          <span className="bundle-price">{cost} &#x20bd;</span>
          <button className="buy-btn">Приобрести</button>
        </div>
      </div>
    </section>
  );
}

export default BundleInfo;
