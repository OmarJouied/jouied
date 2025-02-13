"use server";

import { revalidatePath } from "next/cache";
import About from "../models/About";

export default async function actionInfo(state: { error: string; errorTextarea: string, target: string }, formData: FormData) {

  const lang = formData.get("lang");
  const { target } = state;

  console.log(`"about", '${target}' '${lang}`, state)
  if (target === "about") {
    const description = formData.get("description");
    await About.deleteOne({ lang });
    await About.create({
      lang, description
    });
  }

  revalidatePath("/");
  return { error: "", errorTextarea: "", target: "" };
}