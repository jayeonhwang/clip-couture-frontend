import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export function BrandIndex(props) {
  const { id } = useParams();
  const [supplier, setSupplier] = useState(null);
  const [error, setError] = useState(null);

  const getSupplier = () => {
    axios.get(`/suppliers/${id}.json`)
      .then(response => {
        setSupplier(response.data);
      })
      .catch(err => {
        setError(err);
      });
  };

  useEffect(() => {
    getSupplier();
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!supplier) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Brand Index</h1>
      <div className="grid grid-cols-3 gap-4">
        {supplier.products && supplier.products.map(product => (
          <div key={product.id}>
            {product.images && product.images[0] && (
              <img width="300px" src={product.images[0].url} alt={product.name} />
            )}
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.supplier_name}</p>
            <button
              className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
              onClick={() => props.onShowProduct(product)}
            >
              More info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

