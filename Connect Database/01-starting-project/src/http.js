export async function fetchPlaces() {
    const response = await fetch('http://localhost:3000/places');
    if (!response.ok) {
        throw new Error('Failed to fetch places');
    }
    const data = await response.json();
    return data.places;
}


export async function updateUserPlaces(places) {
    const response = await fetch('http://localhost:3000/user-places', {
      method: 'PUT',
      body: JSON.stringify(places),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (!response.ok) {
      throw new Error('Failed to update user places');
    }
    
}

export async function fetchUserPlaces() {
    const response = await fetch('http://localhost:3000/user-places');
    if (!response.ok) {
        throw new Error('Failed to fetch user places');
    }
    const data = await response.json();
    return data.places;
}