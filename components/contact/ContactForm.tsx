"use client";

import { startTransition, useActionState, type ComponentProps, type FormEvent, type ReactNode } from "react";
import { submitContact, type ContactField, type ContactState } from "@/app/contact/actions";

const SESSION_OPTIONS = [
  "In-person (Santa Monica)",
  "Telehealth (California)",
  "Either works for me",
];

const REFERRAL_OPTIONS = [
  "Google or another search engine",
  "Psychology Today",
  "A friend or family member",
  "A doctor or healthcare provider",
  "Social media",
  "Other",
];

const initialState: ContactState = { status: "idle", errors: {} };

const inputClass =
  "mt-3 w-full border border-foreground bg-[#fafafa] px-4 py-[15px] text-[16px] text-foreground transition-[border-color,box-shadow] duration-300 outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal aria-[invalid=true]:border-[#b4553f]";

type FieldProps = {
  name: ContactField;
  label: string;
  hint?: string;
  error?: string;
  children: (props: { id: string; describedBy?: string; invalid: boolean }) => ReactNode;
};

function Field({ name, label, hint, error, children }: FieldProps) {
  const id = `contact-${name}`;
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div>
      <label htmlFor={id} className="text-[17px] leading-[1.6] text-foreground">
        {label} <span className="text-[12px] text-foreground/60">(required)</span>
      </label>
      {hint && (
        <p id={hintId} className="mt-2 text-[13px] text-foreground/60">
          {hint}
        </p>
      )}
      {children({ id, describedBy, invalid: Boolean(error) })}
      {error && (
        <p id={errorId} className="mt-2 text-[14px] text-[#b4553f]">
          {error}
        </p>
      )}
    </div>
  );
}

function Select({ options, ...props }: { options: string[] } & ComponentProps<"select">) {
  return (
    <div className="relative">
      <select {...props} className={`${inputClass} cursor-pointer appearance-none pr-12`}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* Chevron */}
      <svg
        viewBox="0 0 20 12"
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-4 mt-[6px] h-3 w-5 -translate-y-1/2 text-foreground"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M1 1l9 9 9-9" />
      </svg>
    </div>
  );
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const { errors } = state;

  // Submit manually so React doesn't auto-reset the form: after a validation
  // error, everything the visitor entered (including dropdowns) stays put.
  // The action prop below remains as the no-JavaScript fallback.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => formAction(formData));
  };

  if (state.status === "success") {
    return (
      <div role="status" className="border border-foreground/15 bg-white/60 px-8 py-14 sm:px-12">
        <h2 className="font-serif text-[34px] font-light leading-[1.3] text-foreground sm:text-[40px]">
          Thank you for reaching out.
        </h2>
        <p className="mt-6 text-[17px] leading-[1.8] text-foreground">
          Your message has been received. I’ll be in touch soon to talk through
          next steps and whether we’re a good fit.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} onSubmit={handleSubmit} noValidate className="flex flex-col gap-9">
      {/* Name */}
      <fieldset>
        <legend className="text-[17px] text-foreground">Name</legend>
        <div className="mt-4 grid gap-5 sm:grid-cols-2 sm:gap-3">
          {(["firstName", "lastName"] as const).map((name) => {
            const id = `contact-${name}`;
            const error = errors[name];
            return (
              <div key={name}>
                <label htmlFor={id} className="text-[13px] text-foreground">
                  {name === "firstName" ? "First Name" : "Last Name"}{" "}
                  <span className="text-foreground/60">(required)</span>
                </label>
                <input
                  id={id}
                  name={name}
                  type="text"
                  autoComplete={name === "firstName" ? "given-name" : "family-name"}
                  required
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? `${id}-error` : undefined}
                  className={`${inputClass} mt-2`}
                />
                {error && (
                  <p id={`${id}-error`} className="mt-2 text-[14px] text-[#b4553f]">
                    {error}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </fieldset>

      <Field name="email" label="Email" error={errors.email}>
        {({ id, describedBy, invalid }) => (
          <input
            id={id}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={invalid}
            aria-describedby={describedBy}
            className={inputClass}
          />
        )}
      </Field>

      <Field name="phone" label="Phone" error={errors.phone}>
        {({ id, describedBy, invalid }) => (
          <input
            id={id}
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            aria-invalid={invalid}
            aria-describedby={describedBy}
            className={inputClass}
          />
        )}
      </Field>

      <Field
        name="sessionType"
        label="Are you looking for telehealth or in-person therapy?"
        error={errors.sessionType}
      >
        {({ id, describedBy, invalid }) => (
          <Select
            id={id}
            name="sessionType"
            required
            defaultValue=""
            aria-invalid={invalid}
            aria-describedby={describedBy}
            options={SESSION_OPTIONS}
          />
        )}
      </Field>

      <Field name="referral" label="How did you hear about the practice?" error={errors.referral}>
        {({ id, describedBy, invalid }) => (
          <Select
            id={id}
            name="referral"
            required
            defaultValue=""
            aria-invalid={invalid}
            aria-describedby={describedBy}
            options={REFERRAL_OPTIONS}
          />
        )}
      </Field>

      <Field
        name="insurance"
        label="Please provide the name of your insurance company:"
        hint="If you do not plan to use insurance, please write “None”."
        error={errors.insurance}
      >
        {({ id, describedBy, invalid }) => (
          <input
            id={id}
            name="insurance"
            type="text"
            required
            aria-invalid={invalid}
            aria-describedby={describedBy}
            className={inputClass}
          />
        )}
      </Field>

      <Field
        name="concerns"
        label="What brings you to therapy?"
        hint="A brief overview is plenty. Please don’t include detailed personal or medical information in this form."
        error={errors.concerns}
      >
        {({ id, describedBy, invalid }) => (
          <textarea
            id={id}
            name="concerns"
            rows={5}
            required
            aria-invalid={invalid}
            aria-describedby={describedBy}
            className={`${inputClass} resize-y`}
          />
        )}
      </Field>

      <Field
        name="availability"
        label="Sessions are usually held at a consistent day and time each week. Please share some days and times that work for you:"
        error={errors.availability}
      >
        {({ id, describedBy, invalid }) => (
          <input
            id={id}
            name="availability"
            type="text"
            required
            aria-invalid={invalid}
            aria-describedby={describedBy}
            className={inputClass}
          />
        )}
      </Field>

      {state.status === "error" && (
        <p role="alert" className="text-[15px] text-[#b4553f]">
          Please fix the highlighted fields and try again.
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-fit cursor-pointer border-b border-foreground pb-2 text-[12px] tracking-[0.14em] text-foreground uppercase transition-colors duration-300 hover:border-accent-teal hover:text-accent-teal disabled:cursor-wait disabled:opacity-60"
      >
        {pending ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
