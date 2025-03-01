//{ Driver Code Starts


#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
     // Function to count the palindromic prime numbers less than or equal to n
     int palPrimes(int n) {
        
        // If n is less than 2, return 0 as there are no primes
        if(n < 2) {
            return 0;
        }
        
        int ans = 0;  // Variable to store the count of palindromic primes
        
        // Loop through all numbers from 2 to n
        for(int i = 2; i <= n; i++) {
            // Check if the number is a palindrome
            if(pal(i)) {
                // Check if the number is also a prime
                if(prime(i)) {
                    ans++;  // Increment the count if it's both a palindrome and prime
                }
            }
        }
        
        // Return the total count of palindromic primes
        return ans;
    }
    
    // Function to check if a number is prime
    bool prime(int n) {
        // Check divisibility from 2 to n-1
        for(int i = 2; i < n; i++) {
            if(n % i == 0) {
                return false;  // Return false if n is divisible by any number
            }
        }
        return true;  // Return true if n is a prime number
    }
    
    // Function to check if a number is a palindrome
    bool pal(int x) {
        int tmp = x;
        int rev = 0;
        int r;
        
        // Reverse the digits of the number
        while(x > 0) {
            r = x % 10;
            rev = (rev * 10) + r;
            x /= 10;
        }
        
        // Check if the number is the same as its reverse
        if(tmp == rev) {
            return true;
        }
        else {
            return false;  // Return false if the number is not a palindrome
        }
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        
        cin>>n;

        Solution ob;
        cout << ob.palPrimes(n) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends