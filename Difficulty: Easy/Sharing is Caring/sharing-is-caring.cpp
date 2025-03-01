//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
public:
    int maxChocolate(int N, int K){
        // If the divisor range exceeds N, return N as the maximum possible remainder is N-1
        if(K > N){
            return N;
        }
        
        // Variable to store the maximum remainder found
        int maxRemainder = 0;

        // Iterate through all divisors from 1 to K
        for(int divisor = 1; divisor <= K; divisor++){
            // Calculate the remainder when N is divided by the current divisor
            int remainder = N % divisor;

            // Update the maximum remainder if the current remainder is larger
            maxRemainder = max(maxRemainder, remainder);
        }

        // Return the largest remainder found
        return maxRemainder;
    }
};



//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int N, K;
        cin>>N>>K;
        
        Solution ob;
        cout<<ob.maxChocolate(N, K)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends