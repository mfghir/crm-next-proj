import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(res, req) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to DB" });
    return;
  }

  if (req.method === "DELETE") {
    const id = req.query.customerId;

    try {
      await Customer.deleteOne({ _id: id });

      res.status(201).json({
        status: "success",
        message: "Data deleted",
      });

    } catch (err) {
      console.log(err.message);
      res.status(500).json({
        status: "failed",
        message: "Error in storing data in DB",
      });
    }
  }
}
