//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    // Function to count the number of perfect squares in the range [L, R]
    long long int countPerfectSquares(long long int L, long long int R)  {
        // Calculate the smallest integer whose square is >= L
        long long int start = ceil(sqrt(L)); 

        // Calculate the largest integer whose square is <= R
        long long int end = floor(sqrt(R));  

        // If the start index is greater than the end, there are no perfect squares in the range
        if (start > end) return 0;

        // Return the count of perfect squares in the range [L, R]
        return (end - start + 1);
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long int L,R;
        cin >> L >> R;
        Solution ob;
        cout<<ob.countPerfectSquares(L, R)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends