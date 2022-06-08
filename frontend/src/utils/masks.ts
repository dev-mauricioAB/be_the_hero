import { FormEvent } from "react";

export const currency = (e: FormEvent<HTMLInputElement>) => {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

  e.currentTarget.value = value;
  return e;
};

export const phone = (event: FormEvent<HTMLInputElement>) => {
  var { value } = event.currentTarget;

  var cleaned = ("" + value).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

  if (match) {
    value = "(" + match[1] + ") " + match[2] + "-" + match[3];
    event.currentTarget.value = value;
    return event;
  }
};
