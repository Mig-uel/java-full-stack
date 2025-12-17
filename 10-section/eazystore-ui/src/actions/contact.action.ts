import apiClient from "../api/apiClient";

export default async function contactAction({ request }: { request: Request }) {
  try {
    const formData = await request.formData();

    const contact = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    const res = await apiClient.post("/contacts", contact);

    return res.data.success;
  } catch (error) {
    throw new Response(
      (error as any).message || "Failed to submit contact form",
      {
        status: (error as any)?.status || 500,
      }
    );
  }
}
