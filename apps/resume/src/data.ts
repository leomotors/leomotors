import { introData as baseIntroData } from "@leomotors/data/resume";

export const introData = {
  ...baseIntroData,
  phone: import.meta.env.DEV ? import.meta.env.VITE_PHONE : "",
  email: import.meta.env.DEV ? import.meta.env.VITE_EMAIL : "",
};
