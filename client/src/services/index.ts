"use server";

import { shipSchema } from "@/schemas/ship";
import { FormState, Ship } from "@/types";
import { fromErrorToFormState, randomNumber, toFormState } from "@/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const BASE_URL = "http://localhost:5161";
const SHIP_ENDPOINT = "/api/Ships";

export const fetchShips = async (): Promise<Ship[]> => {
  const response = await fetch(`${BASE_URL}${SHIP_ENDPOINT}`);

  if (!response.ok) {
    throw new Error("Failed to fetch ships");
  }

  revalidatePath("/");

  return await response.json();
};

export const fetchShip = async (id: number) => {
  const response = await fetch(`${BASE_URL}${SHIP_ENDPOINT}/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch ship with id: ${id}`);
  }

  return await response.json();
};

export const createShip = async (formState: FormState, formData: FormData) => {
  try {
    const { name, code, length, width } = shipSchema.parse({
      name: formData.get("name"),
      code: formData.get("code"),
      length: Number(formData.get("length") as string),
      width: Number(formData.get("width") as string),
    });

    const body = {
      id: randomNumber(),
      name,
      code,
      length,
      width,
    };

    const response = await fetch(`${BASE_URL}${SHIP_ENDPOINT}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to create new ship");
    }

    revalidatePath("/");

    return toFormState("SUCCESS", "Ship created successfully.");
  } catch (error) {
    return fromErrorToFormState(error);
  }
};

export const amendShip = async (formState: FormState, formData: FormData) => {
  try {
    const { id, name, code, length, width } = shipSchema.parse({
      id: Number(formData.get("id") as string),
      name: formData.get("name"),
      code: formData.get("code"),
      length: Number(formData.get("length") as string),
      width: Number(formData.get("length") as string),
    });

    const body = {
      id,
      name,
      code,
      length,
      width,
    };

    const response = await fetch(`${BASE_URL}${SHIP_ENDPOINT}/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to create new ship");
    }
  } catch (error) {
    return fromErrorToFormState(error);
  }

  redirect("/");
};

export const deleteShip = async (id: number) => {
  const response = await fetch(`${BASE_URL}${SHIP_ENDPOINT}/${id}`, {
    method: "DELETE",
  });

  console.log("DELETE", response.status);

  if (!response.ok) {
    throw new Error(`Failed to delete ship with id: ${id}`);
  }

  revalidatePath("/");
};
