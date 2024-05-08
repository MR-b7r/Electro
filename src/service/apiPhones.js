import { baseUrl } from "../utils/constants";

export async function getAllBrands() {
  try {
    const res = await fetch(`http://phone-specs-api-2.azharimm.dev/brands`);
    const { data } = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
export async function getLatest() {
  try {
    const res = await fetch(`http://phone-specs-api-2.azharimm.dev/latest`);
    const { data } = await res.json();
    const { phones } = data;
    return phones;
  } catch (err) {
    console.error(err);
  }
}
export async function getTopByInterest() {
  try {
    const res = await fetch(
      `http://phone-specs-api-2.azharimm.dev/top-by-interest`
    );
    const { data } = await res.json();
    const { phones } = data;
    return phones;
  } catch (err) {
    console.error(err);
  }
}
export async function getTopByFans() {
  try {
    const res = await fetch(
      `http://phone-specs-api-2.azharimm.dev/top-by-fans`
    );
    const { data } = await res.json();
    const { phones } = data;
    return phones;
  } catch (err) {
    console.error(err);
  }
}

export async function getPhoneDetails(slug) {
  try {
    const res = await fetch(`http://phone-specs-api-2.azharimm.dev/${slug}`);
    const { data } = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
