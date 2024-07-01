import { formatCurrency } from "../../utils/helpers";
import { cartI } from "./order";

function OrderItem({
  item,
  isLoadingIngredients,
  ingredients,
}: {
  item: cartI;
  isLoadingIngredients: boolean;
  ingredients: string;
}) {
  const { quantity, name, totalPrice } = item;
  console.log({ isLoadingIngredients, ingredients });

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
