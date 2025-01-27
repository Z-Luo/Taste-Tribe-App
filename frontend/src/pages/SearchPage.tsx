import { useSearchRestaurants } from "@/api/RestaurantApi";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  const { results } = useSearchRestaurants(city);

  return (
    <span>
      user searched for {city}{" "}
      <span>
        {results?.data.map((item) => (
          <span>
            found - {item.restaurantName}, {item.city}
          </span>
        ))}
      </span>
    </span>
  );
};

export default SearchPage;
