import connectMongo from "../../../utils/connectMongo";
import Test from "../../../models/testModel";
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function addTest(req, res) {
  try {
    console.log("connecting to mongo");
    await connectMongo();
    console.log("connected to mongo");

    console.log("creating a doc");
    console.log(req.body);
    const test = await Test.create(req.body);
    console.log("created document");

    res.json({ test });
  } catch (error) {
    console.log("error");
    res.json({ error });
  }
}
