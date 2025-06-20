import mongoose from "mongoose";

const orderProductSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItem: {
      type: [orderProductSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enums: ["PENDING", "DELIVERED", "CANCALLED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
