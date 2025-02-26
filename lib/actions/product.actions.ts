"use server";
import { prisma } from "./../../db/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// Get latest products
export async function getLatestProducts() {
  try {
    const data = await prisma.product.findMany({
      take: LATEST_PRODUCTS_LIMIT,
      orderBy: { createdAt: "desc" },
    });

    return convertToPlainObject(data);
  } catch (err) {
    console.log("Prisma error", JSON.stringify(err, null, 2));
    // throw new Error("DB error occurred");
  }
}
