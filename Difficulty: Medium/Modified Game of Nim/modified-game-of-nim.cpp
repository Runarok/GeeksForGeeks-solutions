//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
public:
    /**
     * Function to determine the winner in a game based on XOR of the array elements.
     * 
     * @param n - The number of elements in the array.
     * @param A[] - Array of integers representing the sequence of moves.
     * @returns - The winner of the game, either 1 or 2.
     */
    int findWinner(int n, int A[]) {
        int ans = 0; // Variable to store the XOR of all elements in the array
        
        // Iterate through the array and XOR all elements together
        for(int i = 0; i < n; i++) {
            ans = ans ^ A[i]; // XOR current element with the result so far
        }
        
        // If the result is 0 or the number of elements is even, Player 1 wins
        if(ans == 0 || n % 2 == 0) {
            return 1; // Player 1 wins
        }
        
        // Otherwise, Player 2 wins
        return 2; // Player 2 wins
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        int A[n];
        for(int i = 0;i < n;i++)
            cin>>A[i];
        
        Solution ob;
        cout<<ob.findWinner(n, A)<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends