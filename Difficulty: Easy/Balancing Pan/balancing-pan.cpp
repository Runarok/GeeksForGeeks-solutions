//{ Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

class Solution{   
public:
    // Function to check if the sum of some powers of a can balance the given target T
    string isBalanced(int a, int T) {
        // Ensure that a is smaller than or equal to T by swapping if necessary
        if (a > T) swap(a, T);
        
        vector<int> weights; // Vector to store powers of a
        int curr = 1, total = curr;
        weights.push_back(curr); // Initially push the first power (a^0 = 1)
        
        // Calculate the powers of a and store them in weights
        for (int i = 1; total <= T; ++i) {
            curr *= a;  // Calculate the next power of a
            weights.push_back(curr);
            total += curr; // Update the total sum of all the powers so far
        }
        
        unordered_set<int> hash; // Set to store the possible sums of selected powers of a
        int n = weights.size();
        
        // Iterate over all subsets of weights using bit manipulation
        for (int i = 0; i < pow(2, n); ++i) {
            int j = i;
            int sum = 0;
            // Calculate the sum of the subset represented by the bitmask i
            for (int k = 0; j > 0; ++k, j /= 2) {
                if (j % 2 == 1) sum += weights[k]; // If the k-th bit is set, include weights[k] in the sum
            }
            hash.insert(sum); // Insert the sum into the set
        }
        
        // Check if there exists a sum such that the sum + T is also present in the set
        for (const int val : hash) {
            if (hash.find(val + T) != hash.end()) return "YES"; // If such a pair is found, return "YES"
        }
        
        return "NO"; // If no such pair is found, return "NO"
    }
};


//{ Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        int a, T;
        cin >> a >> T;
        Solution ob;
        cout << ob.isBalanced(a,T) << endl;
    
cout << "~" << "\n";
}
    return 0; 
} 
// } Driver Code Ends