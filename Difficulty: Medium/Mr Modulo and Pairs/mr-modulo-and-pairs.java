//{ Driver Code Starts
// Initial Template for Java

// Initial Template for Java

import java.io.*;
import java.util.*;


// } Driver Code Ends

import java.util.*;

class Solution {

    /**
     * Finds all divisors of a given number.
     * @param n The number for which to find divisors.
     * @return A list of divisors of the given number.
     */
    public List<Integer> findDivisors(int n) {
        List<Integer> divisors = new ArrayList<>();
        
        // Iterate up to the square root of n to find divisors
        for (int i = 1; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                // If n is a perfect square, add only one instance of i
                if (n / i == i) {
                    divisors.add(i);
                } else {
                    // Otherwise, add both divisors
                    divisors.add(i);
                    divisors.add(n / i);
                }
            }
        }
        return divisors;
    }

    /**
     * Counts pairs in the list where the number meets the divisibility condition.
     * @param numbers The list of numbers to process.
     * @param k The required remainder condition.
     * @return The count of valid pairs.
     */
    public int printPairs(List<Integer> numbers, int k) {
        int validPairCount = 0;
        
        // HashMap to store occurrences of numbers for quick lookup
        HashMap<Integer, Boolean> numberExists = new HashMap<>();
        for (int num : numbers) {
            numberExists.put(num, true);
        }

        for (int num : numbers) {
            // If k itself exists in the map and is less than the current number, count it
            if (numberExists.containsKey(k) && k < num) {
                validPairCount++;
            }

            // Process numbers that are greater than or equal to k
            if (num >= k) {
                List<Integer> divisors = findDivisors(num - k);
                
                // Check divisibility condition with found divisors
                for (int divisor : divisors) {
                    if (num % divisor == k && num != divisor && numberExists.containsKey(divisor)) {
                        validPairCount++;
                    }
                }
            }
        }
        return validPairCount;
    }
}

//{ Driver Code Starts.

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character

        for (int i = 0; i < t; i++) {
            List<Integer> arr = new ArrayList<>();
            String input = scanner.nextLine();
            String[] inputArray = input.split(" ");

            for (String str : inputArray) {
                arr.add(Integer.parseInt(str));
            }

            int k = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character
            Solution solution = new Solution();
            System.out.println(solution.printPairs(arr, k));
            System.out.println("~");
        }

        scanner.close();
    }
}
// } Driver Code Ends