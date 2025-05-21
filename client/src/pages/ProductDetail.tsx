
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();

  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <p>Mã sản phẩm: {productId}</p>
    </div>
  );
}

export default ProductDetail;
