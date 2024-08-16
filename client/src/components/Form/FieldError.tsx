import { FormState } from "@/types";

export default function FieldError({
  className,
  formState,
  name,
}: {
  className: string;
  formState: FormState;
  name: string;
}) {
  return <p className={className}>{formState.errors[name]?.[0]}</p>;
}
