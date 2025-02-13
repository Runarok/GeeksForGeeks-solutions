//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    vector<long long> fac; // Array to store precomputed factorial values
    int MOD = 1e9 + 7; // Modulo value for all operations

    // Function to calculate (x^y) % p using modular exponentiation
    long long power(long long x, long long y, long long p) {
        long long result = 1; // Initialize result
        x = x % p; // Take modulo p for base value

        // Keep multiplying x while y > 0
        while (y > 0) {
            if (y & 1) // If y is odd
                result = (result * x) % p; // Multiply the result with x
            y >>= 1; // Divide y by 2
            x = (x * x) % p; // Square x
        }
        return result % p; // Return final result after modulo p
    }

    // Function to calculate modular multiplicative inverse using Fermat's Little Theorem
    long long modInverse(long long n, long long p) { 
        return power(n, p - 2, p); // Inverse of n is n^(p-2) % p
    }

    // Function to calculate nCr % p using precomputed factorials and their inverses
    long long nCrModPFermat(long long n, long long r, long long p) {
        if (r == 0) // If r is 0, return 1 (as nC0 = 1)
            return 1;
        if (n < r) // If n is smaller than r, return 0 as combination is not possible
            return 0;

        // Calculate nCr using the formula: nCr = n! / (r! * (n - r)!)
        return (fac[n] * modInverse(fac[r], p) % p * modInverse(fac[n - r], p) % p) % p;
    }

    // Precompute factorial values modulo MOD up to n
    void factorial(int n) { // Function to compute all factorials up to n
        fac.resize(n + 1); // Resize the factorial vector to hold values from 0 to n
        fac[0] = 1; // Initialize the base case: 0! = 1
        // Calculate factorial values and store them modulo MOD
        for (long long i = 1; i <= n; i++)
            fac[i] = fac[i - 1] * i % MOD;
    }

    // Function to get the count of combinations satisfying the condition
    long long getAnswer(vector<int>& arr, long long k, long long x) {
        int n = arr.size(); // Get the size of the array
        factorial(n); // Precompute factorials up to n
        sort(arr.begin(), arr.end()); // Sort the array in ascending order
        long long ans = 0; // Initialize the answer
        long long i = 0, j = 0; // Initialize two pointers

        // Use sliding window technique
        while (j < n) {
            // Move the right pointer j to include as many elements as possible
            while (j < n && arr[j] - arr[i] <= x) {
                j++;
            }
            // Check if there are enough elements in the current range to form a valid combination
            if ((j - i) >= k) 
                // Calculate the number of combinations and add it to the answer
                ans = (ans + nCrModPFermat(j - i - 1, k - 1, MOD)) % MOD;

            i++; // Move the left pointer to the right
        }
        return ans; // Return the final answer
    }
};


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    cin.ignore(); // Ignore newline after t
    while (t--) {
        vector<int> arr;
        int k, x;
        string input;

        getline(cin, input); // Read the entire line for array elements
        stringstream ss(input);
        int number;
        while (ss >> number) {
            arr.push_back(number); // Populate the array
        }

        cin >> k >> x; // Read k and x
        cin.ignore();  // Ignore newline after k

        Solution ob;
        cout << ob.getAnswer(arr, k, x) << "\n~\n"; // Print the result
    }
    return 0;
}

// } Driver Code Ends