/**
 * 🎨 Priya ki Diwali Rangoli
 *
 * Priya Diwali pe rangoli banati hai. Uska pattern ek diamond shape mein
 * hota hai stars (*) ka. Tu usse help kar pattern generate karne mein!
 *
 * Rules (use nested for loops):
 *   - Input n determines the size of the diamond
 *   - The diamond has 2n - 1 rows total
 *   - Row i (1-indexed) of the top half has i stars
 *   - Row i of the bottom half mirrors the top
 *   - Stars are separated by a single space
 *   - Each row has leading spaces for center alignment
 *   - The widest row has n stars: "* * * ... *" (2n-1 chars wide)
 *   - No trailing spaces on any row
 *
 * Pattern for n=3:
 *     *
 *   * *
 *   * * *
 *   * *
 *     *
 *
 * (Each row is a string in the returned array)
 *
 * Validation:
 *   - Agar n positive integer nahi hai (0, negative, decimal, non-number),
 *     return empty array []
 *
 * @param {number} n - Size of the diamond (number of stars in the widest row)
 * @returns {string[]} Array of strings forming the diamond pattern
 *
 * @example
 *   rangoli(1) // => ["*"]
 *   rangoli(2) // => [" *", "* *", " *"]
 *   rangoli(3) // => ["  *", " * *", "* * *", " * *", "  *"]
 */
export function rangoli(n) {
  // Your code here
  if(!Number.isInteger(n) || n <= 0) return [];
    const result = []; // Initialize the array to hold our diamond rows

    // --- TOP HALF (Rows 1 to n) ---
    for (let i = 1; i <= n; i++) {
      let row = "";

      // 1. Add Leading Spaces (n - i spaces)
      for (let s = 1; s <= n - i; s++) {
        row += " ";
      }

      // 2. Add Stars (i stars)
      // We append "* " for all but the last star, or handle the first one differently.
      // Here is a concise way: 
      // We add the first star, then loop to add " *" for the rest.
      for (let k = 1; k <= i; k++) {
        if (k === 1) {
          row += "*";
        } else {
          row += " *";
        }
      }

      // Push the constructed string into the array
      result.push(row);
    }

    // --- BOTTOM HALF (Rows n-1 down to 1) ---
    for (let i = n - 1; i >= 1; i--) {
      let row = "";

      // 1. Add Leading Spaces
      for (let s = 1; s <= n - i; s++) {
        row += " ";
      }

      // 2. Add Stars
      for (let k = 1; k <= i; k++) {
        if (k === 1) {
          row += "*";
        } else {
          row += " *";
        }
      }

      // Push the constructed string into the array
      result.push(row);
    }

    return result;
}
