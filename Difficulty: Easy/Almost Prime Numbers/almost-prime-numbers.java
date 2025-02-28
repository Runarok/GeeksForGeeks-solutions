//{ Driver Code Starts
import java.lang.Math;
import java.util.*;

class Almost_K_Prime_Numbers {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t > 0) {
            int k = sc.nextInt();
            int N = sc.nextInt();

            GfG g = new GfG();
            g.printKAlmostPrimes(k, N);
            System.out.println();
            t--;

            System.out.println("~");
        }
    }
}
// } Driver Code Ends

class GfG {
    // Function to print k-almost primes up to n
    public ArrayList<Integer> printKAlmostPrimes(int n, int k) {
        ArrayList<Integer> result = new ArrayList<>();
        int num = 2, count = 0;

        // Keep checking numbers until we find 'n' k-almost primes
        while (count < n) {
            // If the number has exactly k prime factors, add it to the result
            if (countPrimeFactors(num) == k) {
                result.add(num);
                count++;
            }
            num++; // Check the next number
        }

        // Print the result
        result.forEach(x -> System.out.print(x + " "));
        return result;
    }

    // Helper function to count the number of prime factors of a number
    static int countPrimeFactors(int num) {
        int count = 0, factor = 2;

        // Count the number of times '2' divides the number
        while (num % factor == 0) {
            count++;
            num /= factor;
        }

        // Check for odd factors from 3 upwards
        for (factor = 3; factor * factor <= num; factor += 2) 
            // If the current factor divides the number, count it
            while (num % factor == 0) {
                count++;
                num /= factor;
            }

        // If the number is greater than 1, it's a prime factor itself
        if (num > 1) count++; 
        return count;
    }
}
