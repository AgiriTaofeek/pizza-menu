import { useLoaderData } from "react-router-dom";
import MenuItem from "./menuItem";

export interface PizzaI {
  id: number;
  name: string;
  price: number;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
}

function Menu() {
  const menu: PizzaI[] = useLoaderData() as PizzaI[];
  console.log("rendered");
  console.log(menu);

  //NOTE - Data is fetched before this component is rendered because we used a loader. hence, it's sensible to display a loader for users. The useNavigation() hook is the tool designed to indicate if a component is
  // idle - There is no navigation pending.
  // loading - The loaders for the next routes are being called to render the next page
  // submitted - A route action is being called due to a form submission using POST, PUT, PATCH, or DELETE
  // Normal navigations and GET form submissions transition through these states: idle → loading → idle
  // Form submissions with POST, PUT, PATCH, or DELETE transition through these states: idle → submitting → loading → idle

  //NOTE - This useNavigation() hook does not isolate pages/routes, it indicates the state of the whole application regardless of route/page. This is the reason why we won't use the loader in this component but in the AppLayout component
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza: PizzaI) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export default Menu;
