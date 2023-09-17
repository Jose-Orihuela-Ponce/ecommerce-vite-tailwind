import PropTypes from "prop-types";

const OrdersCards = ({ totalProducts, totalPriceCheck, date }) => {
  return (
    <div className="flex justify-between items-center  mb-3 border border-black w-[120px]">
      <p className="flex flex-col items-center">
        <span className="font-light">{date}</span>
        <span className="font-light">{totalProducts} Articles</span>
        <span className="font-medium text-lg">${totalPriceCheck}</span>
      </p>
    </div>
  );
};

export default OrdersCards;
OrdersCards.propTypes = {
  totalProducts: PropTypes.number.isRequired,
  totalPriceCheck: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};
