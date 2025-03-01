//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    // Function to print all divisors of a number n
    void print_divisors(int n) {
        
        // Loop through numbers from 1 to n to find divisors
        for (int i = 1; i <= n; i++) {
            // If i divides n without a remainder, it's a divisor
            if (n % i == 0) {
                cout << i << " ";  // Print the divisor
            }
        }
        
        // Code ends here
    }
};



//{ Driver Code Starts.
int main() {
    int T;
    cin >> T;
    while (T--) {
        int n;
        cin >> n;
        Solution ob;
        ob.print_divisors(n);
        cout << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends