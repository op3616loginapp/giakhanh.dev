import Link from "../Link";
import Colors from "../Colors";

import Callout from "./Callout";
import Image from "./Image";
import ItemGrid from "./ItemGrid";
import Kbd from "./Kbd";
import Pre from "./Pre";
import Tree from "./Tree";

const MDXComponents = {
  a: Link,
  Image,
  pre: Pre,

  // Custom components
  ItemGrid,
  Callout,
  Kbd,
  Tree,
  Colors,
};

export default MDXComponents;
