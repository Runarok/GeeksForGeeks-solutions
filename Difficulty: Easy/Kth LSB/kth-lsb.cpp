//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function template for C++
class Solution {
public:

    // Function to find the k-th least significant bit (LSB) of a number
    int KthLSB(long long int n, int k) {
        // Shift 1 to the (k-1)-th position to create a mask for the k-th bit
        long long value = 1LL << (k - 1);
        
        // Use bitwise AND to check if the k-th bit is set (1) or not (0)
        if (n & value) return 1;  // k-th bit is set to 1
        return 0;  // k-th bit is not set (0)
    }
};



//{ Driver Code Starts.

int main(){
    int t;
    cin >> t;
    while(t--){
        long long n;
        int k;
        cin >> n >> k;
        Solution ob;
        
        cout << ob.KthLSB(n, k) << endl;
    
cout << "~" << "\n";
}
return 0;
}


// } Driver Code Ends