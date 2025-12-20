import axios from 'axios';

const ReverseGeocode = async ({ lat, lng }) => {
  try {
    const apiKey = import.meta.env.VITE_GOOGLE_API;
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
    );
     // console.log(response.data);
    if (response.data.results.length > 0) {
      const components = response.data.results[0].address_components;

      // Extract Area Name (Sublocality -> Neighborhood -> Locality)
      const sublocalityLevel2 = components.find(c => c.types.includes('sublocality_level_2'))?.long_name;
      const sublocalityLevel1 = components.find(c => c.types.includes('sublocality_level_1'))?.long_name;
      const sublocality = components.find(c => c.types.includes('sublocality'))?.long_name;
      const neighborhood = components.find(c => c.types.includes('neighborhood'))?.long_name;
      const locality = components.find(c => c.types.includes('locality'))?.long_name;
      const adminArea2 = components.find(c => c.types.includes('administrative_area_level_2'))?.long_name;

      const areaName = sublocalityLevel2 || sublocalityLevel1 || sublocality || neighborhood || locality || adminArea2 || '';

      // Extract Pincode
      const postalCode = components.find(c => c.types.includes('postal_code'))?.long_name || '';

      if (areaName && postalCode) return `${areaName} ${postalCode}`;
      if (areaName) return areaName;
      if (postalCode) return postalCode;

      return response.data.results[0].formatted_address;
    } else {
      return 'Location not found';
    }
  } catch (error) {
    console.error('Geocoding error:', error);
    return 'Error fetching location';
  }
};

export default ReverseGeocode;