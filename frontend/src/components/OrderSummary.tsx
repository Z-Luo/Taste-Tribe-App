import { IRestaurant } from "@/interfaces/restaurant";
import { CartItem } from "@/pages/DetailPage";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "@radix-ui/react-separator";
import { Trash } from "lucide-react";

interface OrderSummaryProps {
  restaurant: IRestaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
}

const OrderSummary = ({
  restaurant,
  cartItems,
  removeFromCart,
}: OrderSummaryProps) => {
  const getTotalCost = () => {
    const totalInCents = cartItems.reduce(
      (acc, cur) => acc + cur.price * cur.quantity,
      0
    );
    const totalWithDelivery = totalInCents + +restaurant.deliveryPrice;

    return (totalWithDelivery / 100).toFixed(2);
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
          <span>Your Order</span>
          <span>${getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <div className="flex justify-between">
            <span>
              <Badge variant="outline" className="mr-2">
                {item.quantity}
              </Badge>
              {item.name}
            </span>
            <span className="flex items-center gap-1">
              <Trash
                className="cursor-pointer"
                color="red"
                size={20}
                onClick={() => removeFromCart(item)}
              />
              ${((item.price * item.quantity) / 100).toFixed(2)}
            </span>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>${(restaurant.deliveryPrice / 100).toFixed(2)}</span>
        </div>
        <Separator />
      </CardContent>
    </>
  );
};

export default OrderSummary;
