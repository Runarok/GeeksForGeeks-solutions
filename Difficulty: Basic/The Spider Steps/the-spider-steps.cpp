//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution{
public:
    // Function to calculate the minimum number of steps to reach or exceed height H
    int minStep(int H, int U, int D){
        // Initialize step to count the number of steps taken
        int step = 0;
        
        // Initialize steps to track the current height reached
        int steps = 0;
        
        // Keep moving until the height is reached or exceeded
        while (H > step) {
            step++;            // Increment the number of steps
            steps += U;        // Increase the current height by the upward movement

            // If the height after the upward movement exceeds H, return the current step count
            if (steps > H) return step;

            // After reaching a certain height, the height decreases due to downward movement
            steps -= D; 
        }

        // Return the total number of steps taken
        return step;
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin >> t;
    while(t--){
        int H, U, D;
        cin >> H >> U >> D;
        
        Solution ob;
        cout<<ob.minStep(H, U, D)<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends