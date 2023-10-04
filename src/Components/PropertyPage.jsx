import React from 'react';
import { useParams } from 'react-router-dom';

function PropertyPage({ data }) {
  const { id } = useParams();
  const property = data.find((item) => item.id === parseInt(id));

  if (!property) {
    // Handle property not found
    return <div>Property not found</div>;
  }

  return (
    <div>
      {/* Display property details here */}
      <h2>{property.name}</h2>
      {/* Add other property details */}
    </div>
  );
}

export default PropertyPage;
