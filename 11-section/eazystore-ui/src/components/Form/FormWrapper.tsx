import { useEffect, useRef } from "react";
import { Form, useSubmit } from "react-router-dom";
import { toast } from "react-toastify";

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
  const submit = useSubmit();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (window.confirm("Are you sure you want to submit the form?")) {
      const formData = new FormData(formRef.current!);
      submit(formData, { method: method });
    } else {
      toast.info("Form submission cancelled.");
    }
  };

  useEffect(() => {
    if (success) {
      formRef.current?.reset();
      toast.success("Form submitted successfully!");
    } else if (success === false) {
      toast.error("There was an error submitting the form.");
    }
  }, [success]);

  return (
    <Form
      method={method}
      className={className}
      ref={formRef}
      onSubmit={handleSubmit}
    >
      {children}
    </Form>
  );
}
