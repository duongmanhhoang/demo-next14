"use server"

import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "root/i18n.config";
import UserList from "./UserList";

type Props = {
  params: {
    lang: Locale;
  };
};

const User = async (props: Props) => {
  const { params } = props;
  const dict = await getDictionary(params.lang);

  return (
    <>
      <form>
        <UserList dict={dict} />
      </form>
    </>
  );
};

export default User;
