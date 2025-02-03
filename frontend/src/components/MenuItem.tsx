import { IMenuItem } from "@/interfaces/restaurant";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface MenuItemProps {
  menuItem: IMenuItem;
}

const MenuItem = ({ menuItem }: MenuItemProps) => {
  return (
    <Card className="cursor-pointer">
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
