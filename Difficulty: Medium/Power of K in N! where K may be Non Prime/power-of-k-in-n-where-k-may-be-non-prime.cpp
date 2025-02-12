//{ Driver Code Starts


// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    int largestPowerOfK(int N, int K)  {
        // Initialize a vector to track prime numbers up to 100
        vector<int> Prime(101, 1);
        
        // Sieve of Eratosthenes to find primes up to 100
        for (int i = 2; i <= 100; i++) {
            if (Prime[i]) {
                int j = 2;
                while (i * j <= 100) {
                    Prime[i * j] = 0;
                    j++;
                }
            }
        }
        
        int maxi = 1;  // Variable to store the largest prime factor of K
        int mini = INT_MAX;  // Variable to store the minimum number of factors of K that divide N
        
        // Loop through possible divisors i from 100 down to 2
        for (int i = 100; i >= 2; i--) {
            // Check if i is a divisor of K and i is a prime number
            if (i <= K && K % i == 0 && Prime[i]) {
                int temp = K;
                int multi = 0;
                
                // Count the number of times i divides K
                while (temp >= i && temp % i == 0) {
                    multi++;
                    temp = temp / i;
                }
                
                int j = 0;
                int prod = i;
                temp = N;
                
                // Count how many times the power of i divides N
                while (true) {
                    j += (temp / prod);
                    if (temp / prod == 0) break;
                    else prod *= i;
                }
                
                // Calculate the minimum possible value of j/multi
                mini = min(mini, j / multi);
            }
        }
        
        // Return the minimum value found
        return mini;
        
        // This part of the code is redundant as the result is already returned earlier
        int sum = 0;
        int ind = maxi;
        
        // Calculate the total sum of powers of maxi that divide N
        while (true) {
            sum += (N / ind);
            if (N / ind == 0) return sum;
            else ind *= maxi;
        }
        return sum;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int N, K;
        cin >> N >> K;
        Solution ob;
        cout<<ob.largestPowerOfK(N,K)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends