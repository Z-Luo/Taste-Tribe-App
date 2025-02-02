import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface SortOptionDropdownProps {
  onChange: (value: string) => void;
  sortOption: string;
}

const SORT_OPTIONS = [
  {
    label: "Best match",
    value: "bestMatch",
  },
  {
    label: "Delivery price",
    value: "bestMatch",
  },
  {
    label: "Estimated delivery time",
    value: "estimatedDeliveryTime",
  },
];

const SortOptionDropdown = ({
  onChange,
  sortOption,
}: SortOptionDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Button variant="outline" className="w-full">
          Sort by: {sortOption}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortOptionDropdown;
