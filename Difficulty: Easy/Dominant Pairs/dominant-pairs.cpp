//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//User function Template for C++

class Solution {
public:
    int dominantPairs(int n, vector<int> &arr) {
        // Sort the first half of the array in ascending order
        sort(arr.begin(), arr.begin() + n / 2);
        
        // Sort the second half of the array in ascending order
        sort(arr.begin() + n / 2, arr.end());
        
        int i = 0, j = n / 2;
        int count = 0;
        
        // Use two pointers to find pairs satisfying the condition
        while (i <= n / 2 && j < n) {
            if (arr[i] >= 5 * arr[j]) {
                // Count the number of valid pairs for the current i
                count += (n / 2 - i);
                j++;
            } else {
                i++;
            }
        }
        
        // Return the final count of dominant pairs
        return count;
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        vector<int> arr(n);
        for(int i=0;i<n;i++){
            cin>>arr[i];
        }
        Solution ob;
        cout<<ob.dominantPairs(n,arr)<<endl;
    
cout << "~" << "\n";
}
}
// } Driver Code Ends