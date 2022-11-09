import { VercelRequest, VercelResponse } from "@vercel/node";
import { getRandom } from "./getRandom";

export default async (_: VercelRequest, res: VercelResponse) => {
  const random = await getRandom();
  res.json(random);
};
