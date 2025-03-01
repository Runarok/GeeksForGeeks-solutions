//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while (T-- > 0) {
            String s = br.readLine().trim();
            String[] S = s.split(" ");
            int n = Integer.parseInt(S[0]);
            Solution ob = new Solution();
            ArrayList<Integer> v = new ArrayList<Integer>();
            v = ob.isCircularPrime(n);
            for (int i = 0; i < v.size(); i++) System.out.print(v.get(i) + " ");

            System.out.println();

            // System.out.println("~");
        }
    }
}

// } Driver Code Ends

class Solution {

    // Function to check if a number is prime
    boolean checkPrime(int n) {
        if (n < 2) {
            return false;
        }

        // Check for divisibility from 2 to sqrt(n)
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                return false;
            }
        }

        return true;
    }

    // Function to check if a number is a circular prime
    boolean checkCircularPrime(int n) {
        if (n < 2) return false;
        if (n == 2) return true;

        int temp = n;
        int digits = 0;

        // Check if the number contains any even digits (other than 2)
        while (n > 0) {
            int rem = n % 10;
            if (rem % 2 == 0) {
                return false; // Not a circular prime if it contains an even digit
            }
            digits++;
            n /= 10;
        }

        // Reset n to the original value
        n = temp;
        // Calculate the place value for the most significant digit
        int mf = (int) Math.pow(10, digits - 1);

        // Rotate the digits of the number and check if each rotation is prime
        for (int i = 1; i <= digits; i++) {
            if (!checkPrime(n)) {
                return false;
            }
            // Rotate the digits
            n = ((n % 10) * mf) + n / 10;
        }

        return true;
    }

    // Function to return all circular primes less than n
    public ArrayList<Integer> isCircularPrime(int n) {
        ArrayList<Integer> list = new ArrayList<>();

        // Add 2 directly as it's the only even prime number
        if (n > 2) {
            list.add(2);
        }

        // Check for circular primes from 3 to n-1
        for (int i = 3; i < n; i++) {
            if (checkCircularPrime(i)) {
                list.add(i);
            }
        }

        return list;
    }
}
