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

export async function getFakePhone() {
  try {
    const res = await fetch(
      `https://fakestoreapi.in/api/products/category?type=mobile`
    );
    const { products } = await res.json();
    const customizeProducts = products.filter(
      (product) =>
        product.model !== "realme 11 Pro" && product.model !== "M6 Pro 5G"
    );
    console.log(customizeProducts);
    return customizeProducts;
  } catch (err) {
    console.error(err);
  }
}
