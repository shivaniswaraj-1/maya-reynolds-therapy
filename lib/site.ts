// Practice details shared across pages. Phone, email, and an online booking
// link aren't in the profile yet; add them here once they're available.
export const PRACTICE = {
  name: "Dr. Maya Reynolds, PsyD",
  title: "Licensed Clinical Psychologist",
  street: "123th Street 45 W",
  city: "Santa Monica, CA 90401",
};

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${PRACTICE.street}, ${PRACTICE.city}`,
)}`;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Specialties", href: "/specialties" },
  { label: "Approach", href: "/approach" },
  { label: "Office", href: "/office" },
  { label: "FAQs", href: "/#faqs" },
];
