import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function OrderCard({ product, deleteProduct }) {
  const { title, category, price } = product;
  return (
    <div className="flex justify-between items-center p-2">
      <div className="flex items-center gap-2">
        <figure className="w-12 h-12">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={category.image}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm font-medium">${price}</p>
        <XMarkIcon
          className="h-5 w-5 cursor-pointer"
          onClick={() => deleteProduct(product)}
        />
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  product: PropTypes.object,
  deleteProduct: PropTypes.func,
};
