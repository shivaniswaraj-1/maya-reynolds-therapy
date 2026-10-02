"use server";

export type ContactField =
  | "firstName"
  | "lastName"
  | "email"
  | "phone"
  | "sessionType"
  | "referral"
  | "insurance"
  | "concerns"
  | "availability";

export type ContactState = {
  status: "idle" | "error" | "success";
  errors: Partial<Record<ContactField, string>>;
};

const REQUIRED: Record<ContactField, string> = {
  firstName: "Please enter your first name.",
  lastName: "Please enter your last name.",
  email: "Please enter your email address.",
  phone: "Please enter your phone number.",
  sessionType: "Please choose telehealth or in-person.",
  referral: "Please let me know how you heard about the practice.",
  insurance: "Please enter your insurance company, or “None”.",
  concerns: "Please share a little about what brings you to therapy.",
  availability: "Please share a few days and times that work for you.",
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const values = Object.fromEntries(
    (Object.keys(REQUIRED) as ContactField[]).map((field) => [
      field,
      String(formData.get(field) ?? "").trim(),
    ]),
  ) as Record<ContactField, string>;

  const errors: ContactState["errors"] = {};
  for (const field of Object.keys(REQUIRED) as ContactField[]) {
    if (!values[field]) errors[field] = REQUIRED[field];
  }
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.phone && values.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors };
  }

  // TODO: deliver the inquiry (e.g. email it to the practice or send it to a
  // HIPAA-compliant intake service). Nothing is stored or sent yet.

  return { status: "success", errors: {} };
}
