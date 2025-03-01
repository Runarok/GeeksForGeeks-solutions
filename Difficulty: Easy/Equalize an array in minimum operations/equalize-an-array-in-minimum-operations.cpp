//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

#define MOD 1000000007

class Solution{
public:
    int equalizeArray(int N, int k, int A[]){
        vector<int> arr;
        
        // Convert the input array to a vector for easier manipulation
        for(int i = 0; i < N; i++){
            arr.push_back(A[i]);
        }

        // Check if all elements are congruent modulo k
        int remainder = A[0] % k;
        bool allEqual = true;
        for (int i = 1; i < N; i++) {
            // If any element has a different remainder, return -1 (impossible)
            if (A[i] % k != remainder) return -1;
            // If any element is not equal to the first, set the flag to false
            if (A[i] != A[0]) allEqual = false; 
        }

        // If all elements are already equal, no moves are needed
        if (allEqual) return 0;

        // Step 1: Sort the array to find the median easily
        sort(arr.begin(), arr.end());

        // Median is considered the best element to minimize the total moves
        int median = arr[arr.size() / 2];

        int moves = 0;
        
        // Step 2: Calculate the number of moves to make all elements equal to the median
        for(int i = 0; i < arr.size(); i++){
            // Increment the moves by the difference divided by k
            moves = (moves + abs(arr[i] - median) / k) % MOD;
        }

        // If any moves are made, return the total number of moves, else return -1
        if(moves > 0) return moves;
        
        return -1;  // If no valid moves can be made, return -1
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int N, k;
        cin>>N>>k;
        int A[N];
        for(int i = 0; i < N; i++)
            cin>>A[i];
            
        Solution ob;
        cout<<ob.equalizeArray(N, k, A)<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends