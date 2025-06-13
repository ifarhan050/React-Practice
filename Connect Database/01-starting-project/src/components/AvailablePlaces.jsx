import { useEffect, useState } from 'react';
import {fetchPlaces} from '../http.js'; // Assuming you have an API utility to fetch places
import useFetch from '../hooks/useFetch.js';
import Places from './Places.jsx';
import {sortPlacesByDistance} from '../loc.js';
async function fetchAvailableSortedPlaces(){

        const data = await fetchPlaces();

        const sortedPlaces=new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            // Sort the places by distance from the user's current location
            const sortedPlaces = sortPlacesByDistance(data, latitude, longitude);
            resolve(sortedPlaces);
          },
          (error) => {
            reject(error);
          }
        );
        });
        return sortedPlaces;
}
export default function AvailablePlaces({ onSelectPlace }) {

  
  const { data: places, isFetching, error } = useFetch(fetchAvailableSortedPlaces,[]);

  return (
    <Places
      title="Available Places"
      isLoading={isFetching}
      places={places}
      error={error}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
