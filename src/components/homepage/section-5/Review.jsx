import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.scss';

const reviews = [
  {
    name: 'Hulda Sutton',
    image: '/public/images/photo.webp',
    stars: 4,
    text: 'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.'
  },
  {
    name: 'Hulda Sutton',
    image: '/public/images/photo.webp',
    stars: 4,
    text: 'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.'
  },
  {
    name: 'Hulda Sutton',
    image: '/public/images/photo.webp',
    stars: 4,
    text: 'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.'
  },
  {
    name: 'Hulda Sutton',
    image: '/public/images/photo.webp',
    stars: 4,
    text: 'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.'
  }
];

const ReviewCarousel = () => {
  return (
    <section className="review-area section-gap">
      <div className="container">
        <div className="row">
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
          >
            {reviews.map((review, index) => (
              <div key={index} className="single-review">
                <img src={review.image} alt={review.name} />
                <h4>{review.name}</h4>
                <div className="star">
                  {[...Array(4)].map((star, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className={i < review.stars ? 'checked' : ''}
                    />
                  ))}
                  <FontAwesomeIcon
                    icon={faStar}
                    className="last-star"
                  />
                </div>
                <div className='with'>
                  <p className='text'>{review.text}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
