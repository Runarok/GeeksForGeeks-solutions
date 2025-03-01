//{ Driver Code Starts


#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends


class Solution {
  public:
    long long nearestPower(long long N , long long M) {
        // Find the nearest power of M to N
        long long int power = log10(N) / log10(M);  // Calculate the closest power of M to N
        power = pow(M, power);  // Calculate M^power
        
        // Compare the difference between N and the two closest powers: M^power and M^(power+1)
        return (N - power) < abs(N - power * M) ? power : power * M;  // Return the nearest one
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long N,M;
        
        cin>>N>>M;

        Solution ob;
        cout << ob.nearestPower(N,M) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends