import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function name(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", message: "error in connecting to DB" });
    return;
  }

  if (req.method === "POST") {
    const data = req.body.data;

    if (!data.name || !data.lastname || !data.email)
      return res
        .status(400)
        .json({ status: "failed", message: "invalid data" });

    try {
      const customer = await Customer.create(data);
      return res
        .status(201)
        .json({ status: "success", message: "data created", data: customer });
        
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ status: "failed", message: "error in storing data in DB" });
    }
  }
}
