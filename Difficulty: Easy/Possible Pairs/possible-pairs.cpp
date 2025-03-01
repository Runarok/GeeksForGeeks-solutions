//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++
class Solution {
public:
    // Function to count the number of pairs where the product of the pair is divisible by 'x'
    int pairCount(int x, int y) {
        int n = 0, count = 0;

        // Check if y is divisible by x
        if (y % x == 0) {
            n = y / x;  // Calculate n as y divided by x
        }

        // If n is 1, there is only 1 valid pair (x, x)
        if (n == 1) {
            count = 1;
        }

        // Iterate up to the square root of n to check for factors of n
        for (int i = 1; i <= sqrt(n); i++) {
            // Check if i is a factor of n
            if (n % i == 0) {
                // Check if both x*(n/i) and x*i have gcd equal to x
                if (n / i != i && __gcd(x * (n / i), x * i) == x) {
                    count += 2;  // Add two pairs (i, n/i) and (n/i, i)
                }
            }
        }

        // Return the total count of valid pairs
        return count;
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int x, y;
        cin>>x>>y;
        
        Solution ob;
        cout<<ob.pairCount(x, y)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends