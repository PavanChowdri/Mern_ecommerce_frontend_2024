import { FaPlus } from "react-icons/fa";
import { CartItem } from "../types/types";
import { transformImage } from "../utils/features";

import imageNotAvailable from "../assets/image-not-available.jpg";

type ProductProps = {
  productId: string;
  photo: {
    url: string;
    public_id: string;
  }[];
  name: string;
  price: number;
  stock: number;
  handler: (cartItem: CartItem) => string | undefined;
};

const ProductCard = ({
  productId,
  photo = [],
  name,
  price,
  stock,
  handler,
}: ProductProps) => {
  const imageUrl =
    photo && photo.length > 0 && photo[0].url
      ? transformImage(photo[0].url, 400)
      : imageNotAvailable;
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>
      <div>
        <button
          onClick={() =>
            handler({
              productId,
              price,
              stock,
              photo: photo.length > 0 ? photo[0].url : imageNotAvailable,
              name,
              quantity: 1,
            })
          }
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
