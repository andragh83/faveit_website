import Groups from "./groups";
import Gift from "./gift";
import Share from "./share";
import AddFriend from "./add_friend";
import Collections from "./collections";
import Add from "./add";
import CheckCircle from "./checkCircle";
import Error from "./error";

const Icons = {
  Groups,
  Gift,
  Share,
  AddFriend,
  Collections,
  Add,
  CheckCircle,
  Error,
};

export const generateIcon = (icon: string) => {
  switch (icon) {
    case "add":
      return <Icons.Add />;
    case "collections":
      return <Icons.Collections />;
    case "share":
      return <Icons.Share />;
    case "add_friend":
      return <Icons.AddFriend />;
    case "groups":
      return <Icons.Groups />;
    case "gift":
      return <Icons.Gift />;
    case "check_circle":
      return <Icons.CheckCircle />;
    case "error":
      return <Icons.Error />;
    default:
      return null;
  }
};

export default Icons;
