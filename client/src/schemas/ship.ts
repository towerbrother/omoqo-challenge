import { z } from "zod";

export const shipSchema = z.object({
  id: z.number().gt(0).optional(),
  name: z.string().min(3).max(25),
  length: z.number().gt(0),
  width: z.number().gt(0),
  code: z
    .string()
    .regex(
      new RegExp(/^[A-Z]{4}-\d{4}-[A-Z]\d$/),
      "Name should follow the pattern AAAA-1111-A1"
    ),
});
