import Logo from "./Logo";
import { HiOutlineLogout } from "react-icons/hi";
import { BsMenuButtonWideFill } from "react-icons/bs";

import PrimaryButton from "./PrimaryButton";
import { useAuth } from "../Contexts/AuthContext";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  const auth = useAuth();
  return (
    <div className="flex  justify-between">
      <Logo />
      <div className="flex items-center gap-3">
        {/* <PrimaryButton className="px-4 flex rounded-md items-center py-2">
          <CgMenuGridO />
        </PrimaryButton> */}
        <PrimaryButton className="px-4 flex rounded-md items-center py-2">
          <HiOutlineLogout
            className="text-xl font-extrabold"
            onClick={auth.logOut}
          />
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Navbar;
