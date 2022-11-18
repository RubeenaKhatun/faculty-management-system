import connectMongo from "../utils/connectMongo";
import Test from "../models/testModel";

export const getServerSideProps = async () => {
  try {
    console.log("connecting to mongo");
    await connectMongo();
    console.log("connected to mongo");

    console.log("fetching a document");
    const tests = await Test.findOne({ name, email });
    console.log("fetched document");
    return {
      props: {
        tests: JSON.parse(JSON.stringify(tests)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
