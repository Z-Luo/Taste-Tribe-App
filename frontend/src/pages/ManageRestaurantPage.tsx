import ManageRestaurantForm from "@/form/manage-restaurant-form/ManageRestaurantForm";
import { useCreateMyRestaurant } from "@/api/MyRestaurantApi";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();
  return (
    <ManageRestaurantForm onSave={createRestaurant} isLoading={isLoading} />
  );
};

export default ManageRestaurantPage;
