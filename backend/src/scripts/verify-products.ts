import { ExecArgs } from "@medusajs/framework/types";
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils";

export default async function verifyProducts({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);
  const query = container.resolve(ContainerRegistrationKeys.QUERY);

  const { data: products } = await query.graph({
    entity: "product",
    fields: ["title", "handle", "status"],
  });

  logger.info(`Found ${products.length} products:`);
  products.forEach((p) => {
    logger.info(`- ${p.title} (${p.status})`);
  });
}
