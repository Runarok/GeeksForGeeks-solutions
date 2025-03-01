//{ Driver Code Starts


#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    // Function to calculate the number of solutions to the given equation
    long long noOfSol(long long b, long long p) {
        
        // Initializing the variables.
        long long a = 1;
        long long ans = 0;
        
        // Iterating from 1 to p-1 to check for possible solutions.
        for (long long i = 1; i < p; i++) {
            // Checking if (i * i) % p equals 1
            if ((i * i) % p == 1) {
                // Calculating the first and last values in the valid range
                long long first = a / p * p + i;
                if (first < a) 
                    first += p;  // Adjust first if it's less than 'a'
                
                long long last = b / p * p + i;
                if (last > b) 
                    last -= p;  // Adjust last if it's greater than 'b'
                
                // If first is greater than last, skip this iteration.
                if (first > last) 
                    continue;
                
                // Update the total number of solutions by adding the count of solutions in the range.
                ans += (last - first) / p + 1;
            }
        }
        
        // Returning the total number of solutions found.
        return ans;
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long b,p;
        
        cin>>b>>p;

        Solution ob;
        cout << ob.noOfSol(b,p) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends