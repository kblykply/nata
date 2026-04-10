const CONTACT_PHONE_RAW = "4448018";

export const CONTACT_PHONE_DISPLAY = "444 80 18";

export function getContactPhoneHref() {
  return `tel:${CONTACT_PHONE_RAW}`;
}

export function getContactPhoneRaw() {
  return CONTACT_PHONE_RAW;
}
