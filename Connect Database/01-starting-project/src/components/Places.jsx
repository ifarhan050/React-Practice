import React from "react";
import PropTypes from "prop-types";
import Loader from "./Loader";
import Error from "./UI/Error";

export default function Places({ title, places,isLoading,error ,fallbackText, onSelectPlace }) {
  
  if (error) {
    return (
      <Error
        title="Error"
        message={error}
        onConfirm={() => {
          window.location.reload();
        }}
      />
    );
  }
  return (
    <section className="places-category">
      <h2>{title}</h2>
      {isLoading && <Loader className="fallback-text"></Loader>}
      {!isLoading && places.length === 0 && <p className="fallback-text">{fallbackText}</p>}
      {!isLoading && places.length > 0 && (
        <ul className="places">
          {places.map((place) => (
            <li key={place.id} className="place-item">
              <button onClick={() => onSelectPlace(place)}>
                <img src={`http://localhost:3000/${place.image.src}`} alt={place.image.alt} />
                <h3>{place.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
Places.propTypes = {
  title: PropTypes.string.isRequired,
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  fallbackText: PropTypes.string,
  onSelectPlace: PropTypes.func.isRequired,
};
