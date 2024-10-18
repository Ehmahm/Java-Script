function calculateProfit(selling_price,cost_price,number_of_units_sold,){
    const cost=selling_price*number_of_units_sold;
    const profit=cost-cost_price;
    return profit;
}
const profit =calculateProfit(100,10,80)
console.log("Total profit :", profit);
