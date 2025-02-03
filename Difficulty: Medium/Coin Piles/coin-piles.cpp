//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//User function Template for C++


class Solution {
  public:
    int minSteps(int A[], int N, int K) {
        // Sort the array in ascending order
        sort(A, A + N);
        
        vector<int> prefixSum;
        prefixSum.push_back(A[0]);
        
        int ans = INT_MAX;
        
        // Calculate the prefix sum array
        for(int i = 1; i < N; i++) {
            prefixSum.push_back(prefixSum[i - 1] + A[i]);
        }
        
        for(int i = 0; i < N; i++) {
            int targetValue = A[i] + K;
            int start = 0, end = N - 1, ele = N;
            
            // Find the index where the element is greater than targetValue
            while(start <= end) {
                int mid = (start + end) / 2;
                if(A[mid] > targetValue) {
                    ele = min(ele, mid);
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
            
            // Calculate the minimum steps by considering both parts
            ans = min(ans, (i ? prefixSum[i - 1] : 0) + (prefixSum.back() - prefixSum[ele - 1] - (N - ele) * targetValue));
        }
        
        return ans;
    }
};



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int N, K;
        cin>>N>>K;
        
        int A[N];
        for(int i=0; i<N; i++)
            cin>>A[i];

        Solution ob;
        cout << ob.minSteps(A,N,K) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends