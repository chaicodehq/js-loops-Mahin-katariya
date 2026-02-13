/**
 * 🍗 Paradise Biryani Batch System
 *
 * Paradise restaurant mein biryani orders aate hain. Kitchen ek batch mein
 * sirf 5 plates bana sakti hai. Agar ek order mein zyada plates hain toh
 * woh multiple batches mein split hota hai.
 *
 * Rules (use do...while loop):
 *   - orders is an array of numbers (plates per order): [3, 7, 2, ...]
 *   - Process orders one by one (for each order, use do...while for batching)
 *   - Each batch can have MAXIMUM 5 plates
 *   - If an order has more than 5, split into batches:
 *     e.g., order of 12 = batch(5) + batch(5) + batch(2) = 3 batches
 *   - Track: totalBatches, totalPlates, ordersProcessed
 *   - Skip orders that are not positive integers (0, negative, decimal, non-number)
 *
 * Validation:
 *   - Agar orders array nahi hai ya empty hai,
 *     return: { totalBatches: 0, totalPlates: 0, ordersProcessed: 0 }
 *
 * @param {number[]} orders - Array of plate counts per order
 * @returns {{ totalBatches: number, totalPlates: number, ordersProcessed: number }}
 *
 * @example
 *   biryaniBatchProcessor([3, 7, 2])
 *   // Order 3: 1 batch (3 plates)
 *   // Order 7: 2 batches (5 + 2 plates)
 *   // Order 2: 1 batch (2 plates)
 *   // => { totalBatches: 4, totalPlates: 12, ordersProcessed: 3 }
 *
 *   biryaniBatchProcessor([5, 10])
 *   // Order 5: 1 batch (5 plates)
 *   // Order 10: 2 batches (5 + 5 plates)
 *   // => { totalBatches: 3, totalPlates: 15, ordersProcessed: 2 }
 */
export function biryaniBatchProcessor(orders) {
  // Your code here
  let totalBatches = 0, totalPlates=0, ordersProcessed=0;
  if(!Array.isArray(orders) || orders.length == 0) return {totalBatches,totalPlates,ordersProcessed};

  let filteredOrders = orders.filter(order => order > 0 && Number.isInteger(order))
//   * Rules (use do...while loop):
//  *   - orders is an array of numbers (plates per order): [3, 7, 2, ...]
//  *   - Process orders one by one (for each order, use do...while for batching)
//  *   - Each batch can have MAXIMUM 5 plates
//  *   - If an order has more than 5, split into batches:
//  *     e.g., order of 12 = batch(5) + batch(5) + batch(2) = 3 batches
//  *   - Track: totalBatches, totalPlates, ordersProcessed
//  *   - Skip orders that are not positive integers (0, negative, decimal, non-number)
//  *
  console.log("filteredOrders: ", filteredOrders);
  
  do {
    if(filteredOrders.length == 0) return {totalBatches, totalPlates, ordersProcessed}
    if (filteredOrders[ordersProcessed] <= 5){
      totalPlates += filteredOrders[ordersProcessed];
      totalBatches += 1;
      console.log("batch : ",totalBatches);
      
      ordersProcessed++;
    }else{
      if (filteredOrders[ordersProcessed]%5 == 0){
        totalBatches += filteredOrders[ordersProcessed]/5;
      }else{
        let remaining = filteredOrders[ordersProcessed]%5 == 0 ? 0 : 1;
        console.log(remaining);
        
        totalBatches = totalBatches + Math.floor(filteredOrders[ordersProcessed]/5) + remaining;
        console.log("batch : " ,totalBatches);
        
      }
      totalPlates = totalPlates + filteredOrders[ordersProcessed];
      ordersProcessed++;
      console.log("total plates : ",totalPlates);
      
    }
  } while (ordersProcessed < filteredOrders.length);
  console.log("total Batches: ",totalBatches);
  
  return {totalBatches, totalPlates, ordersProcessed};

}

biryaniBatchProcessor([4,2.5,6]);

// console.log(Math.floor(12/5));
