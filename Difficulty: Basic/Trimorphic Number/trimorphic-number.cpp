//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

#include <cmath> // For pow function

class Solution {
public:
    int isTrimorphic(int N) {
        // Variable to store the power of 10 equivalent to the number of digits in N
        int divisor = 1;
        int temp = N;

        // Calculate the power of 10 required (i.e., 10^number_of_digits in N)
        while (temp) {
            divisor *= 10;
            temp /= 10;
        }

        // Compute the cube of N
        long long cube = pow(N, 3);

        // Check if the last digits of cube match N
        return (cube % divisor == N) ? 1 : 0;
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int N;
        cin>>N;
        
        Solution ob;
        cout<<ob.isTrimorphic(N)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends