//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution{
public:
    // Function to calculate LCM of three numbers
    long long int LCM(int x, int y, int z){
        // Find LCM of x and y first, then compute LCM with z
        int ans = ((x * y) / (__gcd(x, y)));
        return ((z * ans) / (__gcd(ans, z)));
    }

    // Function to find the smallest number of N digits divisible by X, Y, and Z
    long long int minNumber(int X, int Y, int Z, int N) {
        // Find the maximum number with N digits
        long long int ans;
        long long int max = pow(10, N - 1);
        
        // Calculate LCM of X, Y, and Z
        long long int lcm = LCM(X, Y, Z);
        
        // Find the remainder when max is divided by the LCM
        long long int rem = max % lcm;
        
        // If remainder is 0, max is already divisible by LCM
        if(rem == 0)
            return max;
        
        // If LCM is greater than 10^N, it is impossible to find such a number
        if(lcm > pow(10, N))
            return -1;
        
        // Calculate the result by adding the difference to the next multiple of LCM
        ans = max + (lcm - rem);
        return ans;
    }
};



//{ Driver Code Starts.
int main(){
    int t;
    cin>>t;
    while(t--){
        int X, Y, Z, N;
        cin>>X>>Y>>Z>>N;
        
        Solution ob;
        cout<<ob.minNumber(X, Y, Z, N)<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends