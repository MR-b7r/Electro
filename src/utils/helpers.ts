export const filterByModel = function (
  filterValue: string,
  mainData: [string, string][]
) {
  let filteredData: [string, string][];
  if (filterValue === "All") filteredData = mainData;
  else {
    const filterValueLow = filterValue.toLowerCase();
    const pattern = RegExp(filterValueLow, "i");
    filteredData = mainData.filter(([url, _]: [string, string]) =>
      pattern.test(url.toLowerCase())
    );
  }
  return filteredData;
};

// _____________________

export const getUniqueData = function <T>(data: T[]): T[] {
  const uniqueData = new Set();
  const uniqueObjects = data.filter((arr) => {
    const arrString = JSON.stringify(arr);
    if (uniqueData.has(arrString)) return false;
    else {
      uniqueData.add(arrString);
      return true;
    }
  });
  return uniqueObjects;
};

// _____________________

export async function fetchProductDetail(detailLink: string): Promise<any> {
  try {
    const res = await fetch(detailLink);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

// _____________________

export function extractNumbersFromString(str: string): number[] {
  // Regular expression to match numbers with optional decimal and thousands separators
  const regex = /(?:\D|^)(\d{1,3}(?:[,.]\d{3})*(?:\.\d+)?)(?!\d)/g;

  // Match numbers within the string
  const matches = str.match(regex);

  // Filter and parse matched numbers
  if (matches) {
    return matches.map((match) => parseFloat(match.replace(/[^\d.]/g, "")));
  } else {
    return [];
  }
}
