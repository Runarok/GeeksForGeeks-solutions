//{ Driver Code Starts

#include<bits/stdc++.h>
using namespace std;



// } Driver Code Ends


class Solution {
    
    public:
    
    void precompute(){}  // Placeholder for any potential precomputation logic
    
    // Function to check if a number n is prime
    bool isPrime(int n)
    {
        if(n <= 1) return false; // Numbers less than or equal to 1 are not prime
        
        // Check for factors from 2 to sqrt(n)
        for(int i = 2; i * i <= n; i++)
            if(n % i == 0)
                return false;
        
        return true; // Return true if no factors are found, meaning n is prime
    }
    
    // Function to calculate the primorial of n (product of all primes ≤ n)
    long long primorial(long long n)
    {
        long long product = 1;  // Initialize product to 1
        
        // Iterate from 2 to n and multiply all prime numbers
        for(int i = 2; i <= n; i++)
            if(isPrime(i))
            {
                product *= i;  // Multiply the prime number
                product %= 1000000007;  // Take modulo to avoid overflow
            }
                
        return product;  // Return the final primorial
    }
};



//{ Driver Code Starts.

int main()
{
    Solution ob;
    ob.precompute();
    int t; cin >> t;
    while(t--)
    {
        long long n;
        cin>>n;
        cout << ob.primorial(n) << endl;
    
cout << "~" << "\n";
}
    return 0;
} 
// } Driver Code Ends