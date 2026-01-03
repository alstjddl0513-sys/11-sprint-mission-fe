import heart from '../assets/ic_heart.svg';
// import styles from './ProductCard.module.css';

export function BestProductCard({ item }) {
  if (!item) {
    return null;
  }

  return (
    <div>
      <div>
        <img src={item.images[0]} alt={item.name} />
      </div>
      <div>
        <p>{item.name}</p>
        <p>{item.price.toLocaleString()}원</p>
        <p>
          <img src={heart} alt="좋아요" />
          {item.favoriteCount}
        </p>
      </div>
    </div>
  );
}

export function GeneralProductCard() {
  return (
    <div>
      <div>
        <img alt="수정필요" />
      </div>
      <div>
        <p>로봇 청소기</p>
        <p>원</p>
        <p>
          <img src={heart} alt="좋아요" />
        </p>
      </div>
    </div>
  );
}
