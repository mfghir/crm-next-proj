import HomePage from "@/components/template/HomePage";
import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

function Index({ customers }) {
  console.log(customers);
  return <HomePage customers={customers} />;
}
export default Index;

export async function getStaticProps() {
  try {
    await connectDB();
    const customers = await Customer.find();
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers)),
      },
    };
  } catch (err) {
    notFound: true;
  }
}
