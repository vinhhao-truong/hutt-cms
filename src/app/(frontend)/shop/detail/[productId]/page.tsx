import React from "react";
import config from "@/payload.config";
import { getPayload } from "payload";
import { redirect } from "next/navigation";
import ProductDetail from "@/frontend-src/components/pages/shop/detail/ProductDetail";

export const dynamic = "force-dynamic";

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{
    productId: string;
  }>;
}) => {
  const productId = (await params).productId;

  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const productData = await payload.findByID({
    collection: "products",
    id: productId,
  });

  if (!productData) {
    redirect("/");
  }

  return (
    <div className="">
      <ProductDetail data={productData} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ut
        neque rem eius vel fuga nam aliquam cumque eos consequuntur voluptas
        provident mollitia asperiores, harum est, distinctio dolorem officiis
        illum error, facere molestias dolorum. Eligendi aliquid consectetur
        commodi modi voluptas voluptate corrupti est sed quo nobis eveniet,
        inventore debitis aspernatur quasi dolorum provident, mollitia, vero
        magni! Neque quam accusamus nostrum obcaecati incidunt atque itaque non,
        est impedit nihil natus pariatur rerum possimus cumque ducimus totam
        facere unde aliquid quaerat culpa. Maxime aliquid voluptas odio cumque
        dolor ea aliquam. A facere nihil ducimus nobis ab amet accusantium
        debitis! Provident quis voluptates labore officiis nisi repellat
        corporis quam nemo alias harum sequi ducimus corrupti iusto molestias
        consequatur eveniet veniam unde sed rerum, minima necessitatibus quasi
        tempora tenetur nam. Inventore vitae officia, sapiente dolore repellat
        in veniam corrupti debitis sunt pariatur totam perspiciatis fugiat
        placeat, neque excepturi voluptate fuga libero minus cupiditate velit
        quasi dicta? Repudiandae voluptate ipsum, dicta voluptatem asperiores
        nostrum architecto dolorem vitae fugit quae adipisci, nam, cupiditate
        porro natus. Veniam, quo! Impedit, laborum possimus dicta ipsam fugiat
        inventore reprehenderit corrupti voluptatibus maiores culpa consectetur
        nostrum earum rem asperiores. Incidunt quisquam molestiae soluta
        expedita provident magnam fugit dolores maxime sunt aperiam, odio eum
        similique quia consectetur, eius non architecto ad qui nisi inventore
        tenetur esse. Cum magni corrupti inventore adipisci, dicta illum
        voluptate ab nam laudantium ducimus fugiat iusto aliquid eveniet cumque
        sunt numquam accusantium error dolorem? Deleniti repellat cum illo quis.
        Eius non quibusdam voluptatum quo animi officia tempore asperiores velit
        necessitatibus omnis nisi ipsa laudantium cumque facilis, excepturi
        magnam provident. Assumenda non nihil alias et odit exercitationem?
        Neque quam vero nobis vitae possimus sed quidem laborum odit. Eius
        cupiditate rerum repudiandae accusantium temporibus assumenda vel enim
        laborum mollitia consectetur, fugiat maiores, iusto dolor accusamus illo
        commodi, modi reprehenderit illum tempora. Hic numquam ratione incidunt,
        dolorem minima aliquid, necessitatibus, aut corporis debitis fuga soluta
        quam atque. Dicta aliquam dolores aspernatur sunt eius sit minima
        accusamus modi at, assumenda suscipit eum et distinctio ducimus
        quisquam, rem minus. Ipsa veritatis perspiciatis officia quis.
        Perferendis, animi nulla aliquid at dicta repellat in doloribus ratione
        veritatis! Quas, totam enim deserunt incidunt adipisci nisi beatae
        veniam corrupti reiciendis! Voluptas reprehenderit et, molestias quas
        eos ullam expedita nulla corporis dignissimos fugit eius sed deserunt
        impedit atque nisi perferendis dolorem perspiciatis quia odio maiores
        exercitationem quod recusandae alias dolorum. Maxime, atque at! Officia
        praesentium commodi quod accusantium eum nihil, blanditiis alias, ad
        perspiciatis inventore laudantium magnam illum est iste totam quidem
        minus aliquam eligendi eaque a voluptatum doloremque vitae fugit enim.
        Ipsa, adipisci eligendi nemo sint, at cumque vitae cum natus fuga soluta
        praesentium accusantium nam, assumenda amet aliquid ea. Odit quam animi
        perspiciatis culpa consequatur temporibus assumenda consequuntur dolorem
        maiores laborum harum ipsum unde incidunt vero quis, possimus minima
        tempora nisi sit aspernatur. Architecto veritatis nemo voluptatibus
        ullam quos aut aliquam iusto iure illum, exercitationem inventore fugiat
        praesentium delectus dolore sed corrupti iste facilis. Tempora maxime
        molestiae assumenda alias blanditiis cum id fugiat officia quibusdam
        architecto.
      </p>
    </div>
  );
};

export default ProductDetailPage;
