//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++
class Solution {
  public:
    // Function to print a floating-point number with 'b' decimal places
    void speedBreaker(double a, int b) {
        // Set the output format to fixed-point and set precision to 'b' decimal places
        cout << fixed << setprecision(b) << a << endl;
        return;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        double a;
        cin >> a;
        int b;
        cin >> b;
        Solution ob;
        ob.speedBreaker(a,b);
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends