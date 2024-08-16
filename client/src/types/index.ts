export type Ship = {
  id: number;
  name: string;
  code: string;
  length: number;
  width: number;
};

export type FormState = {
  status: "UNSET" | "SUCCESS" | "ERROR";
  errors: Record<string, string | string[] | undefined>;
  message: string;
};
