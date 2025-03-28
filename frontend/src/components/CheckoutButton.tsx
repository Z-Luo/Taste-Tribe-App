import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import LoadingButton from "./LoadingButton";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import UserProfileForm, {
  UserFormData,
} from "@/form/user-profile-form/UserProfileForm";
import { useGetMyUser } from "@/api/MyUserApi";

interface CheckoutButtonProps {
  onCheckout: (userFormData: UserFormData) => void;
  disabled: boolean;
}
const CheckoutButton = ({ onCheckout, disabled }: CheckoutButtonProps) => {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const { pathname } = useLocation();

  const { currentUser, isLoading: isGetUserLoading } = useGetMyUser();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <Button className="bg-orange-500 flex-1" onClick={onLogin}>
        Log in to check out
      </Button>
    );
  }

  if (isAuthLoading || !currentUser) {
    return <LoadingButton />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={disabled} className="bg-orange-500 flex-1">
          Go to checkout
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:min-w-[700px] bg-grey-50">
        <UserProfileForm
          onSave={onCheckout}
          isLoading={isGetUserLoading}
          currentUser={currentUser}
          title="Confirm Delivery Details"
          buttonText="continue to payment"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutButton;
