//{ Driver Code Starts


#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    // Function to compute the floating-point modulus (a % b)
    double floatMod(double a, double b) {
        return fmod(a, b); // Using fmod() for floating-point remainder
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        double a,b;
        
        cin>>a>>b;

        Solution ob;
        cout << ob.floatMod(a,b) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends