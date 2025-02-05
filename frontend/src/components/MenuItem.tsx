import { IMenuItem } from "@/interfaces/restaurant";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface MenuItemProps {
  menuItem: IMenuItem;
  addToCart: () => void;
}

const MenuItem = ({ menuItem, addToCart }: MenuItemProps) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        ${(menuItem.price / 100).toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default MenuItem;
