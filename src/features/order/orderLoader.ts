import { LoaderFunctionArgs } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";

export async function loader({ params }: LoaderFunctionArgs) {
  if (!params.orderId) {
    throw new Error("Order ID is required");
  }
  const order = await getOrder(params.orderId);
  return order; // This return order object is consumed in the Order component by the useLoaderData() hook provided by react-router-dom
}
