import React from 'react';
import './promo.scss';

interface PromoProps {
  promo_title: string;
  promo_text: string;
}

function Promo({ promo_title, promo_text }: PromoProps) {
  return (
    <section className="promo">
      <div className="promo-image-wrapper">
        <img
          src="../assets/img/main_image_promo.jpg"
          alt="Изображение игры"
          className="promo-image"
        />
      </div>
      <div className="promo-description-wrapper">
        <h2 className="promo-description-title">{promo_title}</h2>
        <div className="promo-promo-description-text-wrapper">
          <span className="promo-promo-text">{promo_text}</span>
        </div>
      </div>
    </section>
  );
}

export default Promo;
