//{ Driver Code Starts


#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

const int MAX = 1000010;  // Maximum size of the graph (adjust as needed)

long long iter, was[MAX];  // Array to track visitation during DFS
int pa[MAX], pb[MAX];  // Arrays to store matching pairs during bipartite matching
vector<int> g[MAX];  // Graph where edges are stored

class Solution {
private:
    vector<vector<int>> nums;  // Declare nums as a member variable to store input

public:
    // Initialize the graph with the input data
    void initialize(int n, vector<vector<int>>& input) {
        nums = input;  // Store the input in nums

        // Clear the graph for each node
        for (int i = 0; i < MAX; i++) {
            g[i].clear();
        }

        // Populate the graph with edges based on input data
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < 6; j++) {
                g[nums[i][j]].push_back(i);
            }
        }

        // Shuffle the graph to randomize the edges for optimization in DFS
        for (int i = 0; i < MAX; i++) {
            random_shuffle(g[i].begin(), g[i].end());
        }
    }

    // Depth-First Search (DFS) to find augmenting paths in bipartite graph matching
    bool dfs(int v) {
        was[v] = iter;  // Mark the node as visited for this DFS iteration
        for (int j : g[v]) {
            if (pb[j] == -1) {  // If there is no match for node j
                pa[v] = j;  // Create a match
                pb[j] = v;  // Set node v as matched with node j
                return true;
            }
        }
        for (int j : g[v]) {
            if (was[pb[j]] != iter) {  // If node j is not visited in this iteration
                if (dfs(pb[j])) {  // Try finding an augmenting path recursively
                    pa[v] = j;
                    pb[j] = v;
                    return true;
                }
            }
        }
        return false;  // If no match is found, return false
    }

    // Main function to find the maximum length of the bipartite matching
    int MaxmimumLength(vector<vector<int>>& input) {
        int n = input.size();  // Number of nodes in the input
        initialize(n, input);  // Initialize the graph with the input data

        // Initialize arrays for matching and visitation
        for (int i = 0; i < MAX; i++) {
            pa[i] = -1;  // Initialize the pa array with -1 (no matches)
            was[i] = -1;  // Initialize the was array with -1 (not visited)
        }
        for (int j = 0; j < n; j++) {
            pb[j] = -1;  // Initialize the pb array with -1 (no matches)
        }

        int ans = 0;  // Variable to store the maximum matching length
        int rr = 0;   // Variable for tracking the range of matching length
        iter = 0;     // Counter for DFS iterations
        for (int ll = 1; ll < MAX; ll++) {
            rr = max(rr, ll - 1);  // Update the range of matches
            while (true) {
                iter++;
                if (dfs(rr + 1)) {  // Try to find a matching for rr + 1
                    rr++;  // Increment the range if a matching is found
                } else {
                    break;  // Break the loop if no matching is found
                }
            }
            ans = max(ans, rr - ll + 1);  // Update the maximum matching length
            if (pa[ll] != -1) {  // If there was a match, unmatch it for the next iteration
                pb[pa[ll]] = -1;
                pa[ll] = -1;
            }
        }

        return ans;  // Return the maximum matching length
    }
};


//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int n;
		cin >> n;
		vector<vector<int>>nums(n, vector<int>(6, 0));
		for(int i = 0; i < n; i++){
			for(int j = 0; j < 6; j++)
				cin >> nums[i][j];
		}
		Solution obj;
		int ans = obj.MaxmimumLength(nums);
		cout << ans << "\n";
	
cout << "~" << "\n";
}
	return 0;
}

// } Driver Code Ends