//{ Driver Code Starts


#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends


class Solution {
  public:
    vector<int> findSeq(int n1, int n2, int n) {
        
        int MAX_N = 1000; // Maximum value for the number of sequence elements
        int BOUND = MAX_N * MAX_N + 2 * MAX_N; // Bound to limit the size of the marked array
         
        int seqs[MAX_N + 1]; // Array to store the sequence values
        bool marked[BOUND]; // Array to mark if a number has been used in the sequence
        
        memset(marked, false, BOUND); // Initialize the marked array to false
        seqs[0] = 1; // Set the first sequence element to 1
        int cnt = 1; // Initialize the counter for the sequence elements

        // Loop to generate the sequence elements until we reach the nth one
        for (; cnt < n; cnt++) {
            // Loop to compare the current sequence element with all previous ones
            for (int j = 0; j < cnt; j++) {
                int z;

                // Calculate z based on the formula using n1 and n2
                z = n1 * seqs[cnt - 1] - n2 * seqs[j];
                // If the calculated z is greater than the previous element, mark it
                if (z > seqs[cnt - 1])
                    marked[z] = true;

                // Calculate z using the second formula
                z = n1 * seqs[j] - n2 * seqs[cnt - 1];
                // If the calculated z is greater than the previous element, mark it
                if (z > seqs[cnt - 1])
                    marked[z] = true;
            }
         
            // Find the smallest unmarked number greater than the last sequence element
            for (int j = seqs[cnt - 1] + 1; j < BOUND; j++) {
                if (!marked[j]) { // If the number is not marked, it can be used for the sequence
                    seqs[cnt] = j; // Assign it to the current sequence element
                    marked[j] = true; // Mark the number as used
                    break; // Move to the next sequence element
                }
            }
        }
        
        // Store the first n sequence elements in the result vector
        vector<int> ans;
        for (int i = 0; i < n; i++) {
            ans.push_back(seqs[i]);
        }
            
        return ans; // Return the sequence of size n
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n1, n2, n;
        
        cin>>n1>>n2>>n;

        Solution ob;
        vector<int> ptr = ob.findSeq(n1,n2,n);
        
        for(int i=0; i<n; i++)
            cout<<ptr[i]<<" ";
        cout<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends