//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
public:
    int minimalSum(int N, int X){
        // Initialize count to keep track of the number of operations
        int count = 0;
        
        // While N is greater than 0, try subtracting powers of X
        while(N > 0){
            // Iterate through powers of X from 11 down to 0
            for(int i = 11; i >= 0; i--){
                int power = pow(X, i);  // Calculate X raised to the power i
                if(power <= N){
                    N -= power;  // Subtract the power from N
                    count++;      // Increment the count as we found a valid power
                    break;        // Move to the next iteration of the outer loop
                }
            }
        }
        return count;  // Return the total number of operations
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int N, X;
        cin>>N>>X;
        
        Solution ob;
        cout<<ob.minimalSum(N, X)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends