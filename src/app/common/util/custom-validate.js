import { createValidator } from "revalidate";
export const isValidTel = createValidator(
  message => value => {
    if (value && !/^\(?[\d]{3}\)?[\s-]?[\d]{3}[\s-]?[\d]{4}$/i.test(value)) {
      return message;
    }
  },
  "Invalid tel number"
);


export const comparePasswords = n =>

  createValidator(
    message => value => {
      if (value !== n) {
        return message;
      }
    },
    field => `${field} password mismatch`
  );