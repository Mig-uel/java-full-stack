import { useEffect, useRef } from "react";
import { Form } from "react-router-dom";

export default function FormWrapper({
  className,
  children,
  method,
  success,
}: {
  className?: string;
  children: React.ReactNode;
  method: "GET" | "POST" | "PUT" | "DELETE";
  success?: boolean;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (success) {
      formRef.current?.reset();
    }
  }, [success]);

  return (
    <Form method={method} className={className} ref={formRef}>
      {children}
    </Form>
  );
}
