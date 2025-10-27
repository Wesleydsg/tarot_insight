"use server";
import prisma from "@/db";

export async function filterUsers(name: string) {
  console.log("searchin");
  return await prisma.user.findMany({ where: { name: { contains: name } } });
}
