import { FormState } from "@/types";
import { ZodError } from "zod";

export const toFormState = (
  status: FormState["status"],
  message: FormState["message"]
): FormState => {
  return {
    status,
    errors: {},
    message,
  };
};

export const fromErrorToFormState = (error: unknown): FormState => {
  if (error instanceof ZodError) {
    return {
      status: "ERROR" as const,
      errors: error.flatten().fieldErrors,
      message: "",
    };
    // if another error instance, return error message
    // e.g. database error
  } else if (error instanceof Error) {
    return {
      status: "ERROR" as const,
      errors: {},
      message: error.message,
    };
    // if not an error instance but something else crashed
    // return generic error message
  } else {
    return {
      status: "ERROR" as const,
      errors: {},
      message: "An unknown error occurred",
    };
  }
};

export const randomNumber = () => Math.floor(Math.random() * 10000) + 1;
