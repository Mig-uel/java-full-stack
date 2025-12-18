import { useNavigation } from "react-router-dom";

export default function Button({
  className,
  children,
  type,
}: {
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button
      type={type ?? "submit"}
      className={className}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Submitting..." : children}
    </button>
  );
}
