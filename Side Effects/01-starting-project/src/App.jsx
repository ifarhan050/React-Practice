import { useRef, useState,useEffect,useCallback } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import {sortPlacesByDistance} from './loc.js';
import logoImg from './assets/logo.png';

const PICKED_PLACES= localStorage.getItem('pickedPlaces')
  ? JSON.parse(localStorage.getItem('pickedPlaces'))
  : [];
function App() {
  const selectedPlace = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState(AVAILABLE_PLACES);
  const [pickedPlaces, setPickedPlaces] = useState(PICKED_PLACES);
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        latitude,
        longitude
      );

      // Update the AVAILABLE_PLACES with sorted places
      setAvailablePlaces(sortedPlaces);
    },
    (error) => {
      console.error('Error getting current position:', error);
    }
  );
  }, []);
  function handleStartRemovePlace(id) {
    setIsModalOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setIsModalOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      localStorage.setItem(
        'pickedPlaces',
        JSON.stringify([...prevPickedPlaces, place])
      );
      return [place, ...prevPickedPlaces];
    });

   
  }

  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    localStorage.setItem(
      'pickedPlaces',
      JSON.stringify(
        pickedPlaces.filter((place) => place.id !== selectedPlace.current)
      )
    );
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <Modal open={isModalOpen} >
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
