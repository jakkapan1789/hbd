// import FallingHearts from "@/components/FallingHearts";

// export default function Home() {
//   return (
//     <div>
//       <FallingHearts />
//     </div>
//   );
// }
import Head from "next/head";

import FallingHearts from "@/components/FallingHearts";
import CenterButton from "@/components/CenterButton";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Happy Birthday Apple 😸😻😽</title>
        <meta name="description" content="This is the home page of My App" />
      </Head>
      <FallingHearts />
      <CenterButton />
    </div>
  );
}
