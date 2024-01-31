import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "root/i18n.config";

type Props = {
  params: {
    lang: Locale;
  };
};

const Post = async (props: Props) => {
  const { params } = props;
  const dict = await getDictionary(params.lang);

  return <div>{dict.navigation.post}</div>;
};

export default Post;
