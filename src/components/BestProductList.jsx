import { useEffect, useState } from 'react';
import { getBestProducts } from '../apis/products';
import { BestProductCard } from './ProductCard';

function BestProductList() {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    const handleBestProducts = async () => {
      try {
        const data = await getBestProducts({});
        setItems(data.list);
      } catch (error) {
        console.error(`상품 로딩 실패:`, error);
      }
    };

    handleBestProducts();
  }, []);

  return (
    <>
      <h1>베스트 상품</h1>
      <div>
        {Items.map((item) => (
          <BestProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default BestProductList;
