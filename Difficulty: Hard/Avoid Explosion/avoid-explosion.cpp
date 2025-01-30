//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++

class Solution {
  public:
    
    vector<string> avoidExplosion(vector<vector<int>> mix, int n,
                                  vector<vector<int>> danger, int m) 
    {
        vector<string> m_res;  // Result vector to store the answer for each mixture
        
        // Create a bitset array to track dangerous reactions between components
        vector<bitset<1001>> m_c(n+1); // n+1 to account for 1-based indexing
        
        // Mark the dangerous pairs in the bitset
        for (int i = 0; i < danger.size(); i++) {
            int t1 = danger[i][0]; // First component in the dangerous pair
            int t2 = danger[i][1]; // Second component in the dangerous pair
            
            // Set the bit for the dangerous reaction between t1 and t2
            m_c[t1][t2] = 1;
            m_c[t2][t1] = 1; // Mark both directions since it's undirected
        }
        
        vector<int> m_p(n+1);  // Parent array for union-find
        vector<bitset<1001>> m_h(n+1);  // Bitset to track the union of components
        
        // Initialize parent pointers and bitsets for each component
        for (int i = 1; i <= n; i++) {
            m_h[i][i] = 1;  // Each component is initially in its own group
            m_p[i] = i;  // Each component is its own parent
        }
        
        // Process each mixture operation
        for (int i = 0; i < mix.size(); i++) {
            
            int t1 = mix[i][0];  // First component to mix
            int t2 = mix[i][1];  // Second component to mix
            
            // Find the representatives (roots) of the sets that t1 and t2 belong to
            while (m_p[t1] != t1) t1 = m_p[t1];  // Path compression for t1
            while (m_p[t2] != t2) t2 = m_p[t2];  // Path compression for t2
        
            // Check if there’s a dangerous reaction between t1 and t2 or their components
            // If any component in the set of t1 reacts dangerously with any component in the set of t2
            if ((m_c[t1] & m_h[t2]) != 0 || (m_c[t2] & m_h[t1]) != 0) {
                m_res.push_back("No");  // If dangerous, cannot mix, so push "No" and continue to next operation
                continue;
            } else if (t1 < t2) {
                // If t1 < t2, merge sets by setting t1 as the parent of t2
                m_c[t1] |= m_c[t2];  // Combine the dangerous pairs of t1 and t2
                m_h[t1] |= m_h[t2];  // Merge the groups of t1 and t2
                m_p[t2] = t1;  // Set t1 as the parent of t2
            } else {
                // If t2 < t1, merge sets by setting t2 as the parent of t1
                m_c[t2] |= m_c[t1];  // Combine the dangerous pairs of t2 and t1
                m_h[t2] |= m_h[t1];  // Merge the groups of t2 and t1
                m_p[t1] = t2;  // Set t2 as the parent of t1
            }
            
            m_res.push_back("Yes");  // If no danger, the mix is safe, so push "Yes"
        }
        
        return m_res;  // Return the results for all mixture operations
    }
};


//{ Driver Code Starts.

int main() {
    int tt;
    cin >> tt;
    Solution sol;
    while (tt--) {
        int n, m;
        cin >> n >> m;
        vector<vector<int>> mix(n, vector<int>(2));
        vector<vector<int>> danger(m, vector<int>(2));
        for (int i = 0; i < n; i++) {
            cin >> mix[i][0] >> mix[i][1];
        }

        for (int i = 0; i < m; i++) {
            cin >> danger[i][0] >> danger[i][1];
        }

        auto ans = sol.avoidExplosion(mix, n, danger, m);
        for (auto &val : ans) cout << val << " ";
        cout << "\n";
    
cout << "~" << "\n";
}

    return 0;
}

// } Driver Code Ends