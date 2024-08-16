import { useFormStatus } from "react-dom";
import Button from "../Button/Button";

export default function SubmitButton({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} className={className} type="submit">
      {pending ? "Processing..." : id ? "Amend" : "Create"}
    </Button>
  );
}
