import { redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

interface cartI {
  name: string;
  pizzaId: number;
  quantity: number;
  totalPrice: number;
  unitPrice: number;
}
export interface createOrderI {
  address: string;
  cart: cartI[];
  customer: string;
  phone: string;
  priority: boolean;
}

export interface ErrorI {
  phone?: string;
}

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

export async function action({ request }: { request: Request }) {
  // The request is automatically passed to the action function and through the Request object,  we can access the formData as seen below
  console.log(request);

  const formData = await request.formData();
  const data = Object.fromEntries(formData); // Convert to object

  const order = {
    address: data.address.toString(),
    customer: data.customer.toString(),
    phone: data.phone.toString(),
    cart: JSON.parse(data.cart as string),
    priority: data.priority === "on",
  };

  // console.log(order);

  //NOTE - Error Handling
  const errors: ErrorI = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. we might need it to contact you";

  if (Object.keys(errors).length > 0) return errors; // return error obj if it has any property. This returned errors object is consumed in the createOrder component by the useActionData() hook provided by react-router-dom

  const newOrder = await createOrder(order); // This returns the response from the POST request that writes the data to the API server
  console.log(newOrder);

  // We can't use the useNavigate() here since it's not a component hence why the redirect() function
  return redirect(`/order/${newOrder.id}`);
}
