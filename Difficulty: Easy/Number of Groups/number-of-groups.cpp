//{ Driver Code Starts


#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    long long noOfGroups(int N , int Arr[]) {
        // Array to count the frequency of remainders when dividing each element by 3
        vector<long long int> remainderCount(3, 0);
        
        // Count the remainders
        for (int i = 0; i < N; i++) {
            remainderCount[Arr[i] % 3]++;
        }
        
        // Total number of valid groups can be formed by:
        // 1. Pair (0, 0)
        // 2. Triplets (0, 0, 0), (1, 1, 1), (2, 2, 2)
        // 3. Triplet (0, 1, 2)
        // 4. Pair (1, 2)
        
        return remainderCount[1] * remainderCount[2] +
               (remainderCount[0] * (remainderCount[0] - 1)) / 2 +
               (remainderCount[0] * (remainderCount[0] - 1) * (remainderCount[0] - 2)) / 6 +
               (remainderCount[1] * (remainderCount[1] - 1) * (remainderCount[1] - 2)) / 6 +
               (remainderCount[2] * (remainderCount[2] - 1) * (remainderCount[2] - 2)) / 6 +
               remainderCount[0] * remainderCount[1] * remainderCount[2];
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int N;
        
        cin>>N;
        int Arr[N];
        
        for(int i=0 ; i<N ; i++)
            cin>>Arr[i];

        Solution ob;
        cout << ob.noOfGroups(N,Arr) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends