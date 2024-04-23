import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export function CategoryIndex(props) {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);

  const getCategory = () => {
    axios.get(`/categories/${id}.json`)
      .then(response => {
        setCategory(response.data);
      })
      .catch(err => {
        setError(err);
      });
  };

  useEffect(() => {
    getCategory();
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="my-5 justify-items-center grid grid-cols-3 gap-4">
        {category.products && category.products.map(product => (
          <div key={product.id}>
            {product.images && product.images[0] && (
              <img width="300px" src={product.images[0].url} alt={product.name} />
            )}
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.categories_name}</p>
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