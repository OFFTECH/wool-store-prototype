import { ExecArgs } from "@medusajs/framework/types";
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils";

export default async function listKeys({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);
  const query = container.resolve(ContainerRegistrationKeys.QUERY);

  const { data: apiKeys } = await query.graph({
    entity: "api_key",
    fields: ["token", "title", "type"],
  });

  logger.info("Current API Keys:");
  apiKeys.forEach((key) => {
    logger.info(`- ${key.title} (${key.type}): ${key.token}`);
  });

  const { data: salesChannels } = await query.graph({
    entity: "sales_channel",
    fields: ["name", "id"],
  });

  logger.info("Current Sales Channels:");
  salesChannels.forEach((sc) => {
    logger.info(`- ${sc.name} (${sc.id})`);
  });
}
