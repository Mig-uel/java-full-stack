import { useActionData } from "react-router-dom";
import FormWrapper from "./Form/FormWrapper";
import Input from "./Form/Input";
import Label from "./Form/Label";
import PageTitle from "./PageTitle";
import Button from "./Form/Button";

export default function Contact() {
  const data = useActionData() as boolean;

  return (
    <div className="max-w-6xl min-h-213 mx-auto px-6 py-8 font-primary bg-normal-bg dark:bg-dark-bg">
      {/* Page Title */}
      <PageTitle title="Contact Us" />
      {/* Contact Info */}
      <p className="max-w-3xl mx-auto mt-8 text-gray-600 dark:text-lighter mb-8 text-center">
        We’d love to hear from you! If you have any questions, feedback, or
        suggestions, please don’t hesitate to reach out.
      </p>

      {/* Contact Form */}
      <FormWrapper
        method="POST"
        className="space-y-6 max-w-3xl mx-auto"
        success={data}
      >
        {/* Name Field */}
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            required
            minLength={5}
            maxLength={30}
          />
        </div>

        {/* Email and Phone Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email Field */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Mobile Field */}
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              pattern="^\d{10}$"
              title="Mobile number must be exactly 10 digits"
              placeholder="Your Mobile Number"
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <Label htmlFor="message">Message</Label>
          <textarea
            className="w-full px-4 py-2 text-base border rounded-md transition border-primary dark:border-light focus:ring focus:ring-dark dark:focus:ring-lighter focus:outline-none text-gray-800 dark:text-lighter bg-white dark:bg-gray-600 placeholder-gray-400 dark:placeholder-gray-300"
            id="message"
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            minLength={5}
            maxLength={500}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Button
            type="submit"
            className="px-6 py-2 text-white dark:text-black text-xl rounded-md transition duration-200 bg-primary dark:bg-light hover:bg-dark dark:hover:bg-lighter"
          >
            Submit
          </Button>
        </div>
      </FormWrapper>
    </div>
  );
}
