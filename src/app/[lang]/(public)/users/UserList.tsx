"use client";

import { fetchUsers } from "@/actions";
import Button from "./Button";

const UserList = ({ dict }: { dict: any }) => {
  const handleClick = () => {
    alert(123);
  };

  return (
    <div>
      {dict.navigation.user}
      <div>
        <Button onClick={handleClick} />
      </div>
    </div>
  );
};

export default UserList;
