//{ Driver Code Starts
//Initial Template for C++
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
    public:
    int count(int N, vector<int> A, int X) {
        // Finding the maximum element in the array
        int maxElement = -1;
        for (int i = 0; i < N; i++) {
            maxElement = max(maxElement, A[i]);
        }

        // Determine the number of bits required to represent maxElement and X
        int maxBits = log2(maxElement);
        int bitsInX = log2(X);

        // Initialize two possible answers to N (maximum possible count)
        int minExcluded1 = N, minExcluded2 = N;

        // Checking bits from (bitsInX + 1) to maxBits
        for (int i = bitsInX + 1; i <= maxBits; i++) {
            int excludeCount = 0;

            // Counting numbers that do not have the current bit set
            for (int j = 0; j < N; j++) {
                if ((A[j] & (1 << i)) == 0) {
                    excludeCount++;
                }
            }
            
            // Updating minimum excluded count
            minExcluded1 = min(minExcluded1, excludeCount);
        }

        // To track which elements are already excluded
        vector<int> visited(N, 0);
        int excludedCount = 0;

        // Iterating over bits of X from highest to lowest
        for (int i = bitsInX; i >= 0; i--) {
            if (X & (1 << i)) {
                // If the bit is set in X, exclude elements where this bit is not set
                for (int j = 0; j < N; j++) {
                    if ((A[j] & (1 << i)) == 0 && visited[j] == 0) {
                        visited[j] = 1;
                        excludedCount++;
                    }
                }
            } else {
                // If the bit is not set in X, find an alternative exclusion count
                int tempExcludeCount = 0;
                for (int j = 0; j < N; j++) {
                    if ((A[j] & (1 << i)) == 0 && visited[j] == 0) {
                        tempExcludeCount++;
                    }
                }
                minExcluded2 = min(minExcluded2, excludedCount + tempExcludeCount);
            }
        }

        // Return the minimum of both exclusion approaches
        return min(minExcluded2, minExcluded1);
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin>>t;
    while(t--)
    {
        int N,X;
        cin>>N>>X;
        vector<int> A(N);
        for(auto &i:A)
            cin>>i;
        Solution obj;
        int ans = obj.count(N, A, X);
        cout<<ans<<endl;
    
cout << "~" << "\n";
}
}
// } Driver Code Ends