import "../css/MovieCard.css";

function ProductCard({ id, price, name, inStock, onSale }) {
  return (
    <div className="xxx">
 {/*     <p className="product-id">{id}</p>  Stock */}
      <p className="product-price">{price}€</p>
      <p className="product-name">{name}</p>
      <p className="product-inStock">{inStock ? "En stock ✅" : "Rupture ❌"}</p>
      <p className="product-onSale">{onSale ? "PROMO 🔥":" " }</p>
      <p> ------ </p>
    </div>
  );
}

export default ProductCard;