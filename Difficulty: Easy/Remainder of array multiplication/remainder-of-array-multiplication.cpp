//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    // Function to calculate the product of all elements in the array modulo K
    int remArray(int N, int arr[], int K) {
        // Variable to store the product modulo K
        int mul = 1;
        
        // Iterate through each element in the array
        for (int i = 0; i < N; i++) {
            // Multiply the current element to the product and take modulo K to prevent overflow
            mul = (mul * arr[i]) % K;
        }

        // Return the final product modulo K
        return mul;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int N,K;
        
        cin>>N;
        
        int arr[N];
        for(int i=0; i<N; i++)
            cin>>arr[i];
            
        cin>>K;

        Solution ob;
        cout << ob.remArray(N,arr,K) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends