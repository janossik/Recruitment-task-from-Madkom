const KEY = "store";

export function loadState() {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

export async function saveState(state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (e) {
    // Ignore
  }
}

export const printPrice = (price: number = 0, currency = "PLN") => {
  const priceString = price.toString();

  const pennies = priceString.slice(priceString.length - 2, priceString.length);
  const bucks = priceString.slice(0, priceString.length - 2);
  if (price === 0) {
    return `0 ${currency}`;
  } else if (priceString.length < 2) {
    return `00.${priceString} ${currency}`;
  }
  return `${bucks}.${pennies} ${currency}`;
};
