import updateStocks from "@/server-actions/stock/updateStock";

(async () => {
  try {
    const stocks = await fetch("http://localhost:4000/api/getBudget", {
      cache: "no-cache",
    });

    const stocksData = await stocks.json();
    await updateStocks(stocksData);
  } catch (e) {}
})();
