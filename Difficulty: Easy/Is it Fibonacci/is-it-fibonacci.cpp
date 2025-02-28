//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    long long solve(int N, int K, vector<long long> GeekNum) {
        // Get the size of the GeekNum array
        int n = GeekNum.size();
        
        // Initialize variables for the target index and sum
        int k = K;
        long long s = 0;

        // Create a new array `arr` with elements from GeekNum
        vector<long long> arr(GeekNum.begin(), GeekNum.end());
        
        // If K is greater than or equal to N, return the last element
        if(k >= N) return arr[N-1];
        
        // Calculate the initial sum of all elements in arr
        for(auto x:arr) {
            s += x;
        }
        
        // Add the sum to the array `arr`
        arr.push_back(s);
        
        // Generate the new elements for arr using a sliding window approach
        for(long long i=k+1; i<=N; i++) {
            s += arr[i-1];         // Add the new element to the sum
            s -= arr[i-k-1];       // Subtract the element that goes out of the window
            arr.push_back(s);      // Add the new sum to the array
        }
        
        // Return the last element of the array
        return arr[N-1];
    }
};


//{ Driver Code Starts.

int main() {
    int T;
    cin >> T;
    while (T--) {
        int N, K;
        cin >> N >> K;

        vector<long long> GeekNum(K);

        for (int i = 0; i < K; i++) cin >> GeekNum[i];

        Solution ob;
        cout << ob.solve(N, K, GeekNum) << "\n";
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends