import updateStocks from "@/server-actions/stock/updateStock";

export default async function updateStock() {
  try {
    const res = await fetch("http://localhost:4000/api/getBudget", {
      cache: "no-cache",
    });

    if (res.ok) {
      const stocksData = await res.json();
      await updateStocks(stocksData);
    }
  } catch (e) {
    console.log(e);
  }
}
