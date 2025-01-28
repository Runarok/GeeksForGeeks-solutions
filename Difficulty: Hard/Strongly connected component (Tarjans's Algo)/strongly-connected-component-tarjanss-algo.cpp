//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

bool compare1(vector<int> v1, vector<int> v2) {
    // Compare the first element of two vectors for sorting purposes
    return v1.front() < v2.front();
}

class Solution {
public:
    // Vector to store the strongly connected components (SCCs)
    vector<vector<int>> ans;
    vector<int> temp; // Temporary vector to store nodes of each SCC

    // Helper function to perform depth-first search and find SCCs
    void findUtil(vector<int> adj[], stack<int>& st, int index[], int lowlink[], 
                  bool onstack[], int i, int& t) {

        // Assign the index and lowlink values to the current node
        index[i] = lowlink[i] = t++;

        // Push the current node onto the stack
        st.push(i);
        
        // Mark the current node as being on the stack
        onstack[i] = 1;

        // Explore the neighbors of the current node
        for (int j = 0; j < adj[i].size(); ++j) {
            // If the neighbor hasn't been visited, recursively explore it
            if (index[adj[i][j]] == -1) {
                findUtil(adj, st, index, lowlink, onstack, adj[i][j], t);
            }
            // If the neighbor is on the stack, update the lowlink of the current node
            if (onstack[adj[i][j]]) {
                lowlink[i] = min(lowlink[i], lowlink[adj[i][j]]);
            }
        }

        // If the current node's lowlink equals its index, we have found an SCC
        if (lowlink[i] == index[i]) {
            int w = 0;
            // Pop nodes from the stack until we reach the current node
            // and add them to the current SCC
            while (!st.empty() && st.top() != i) {
                w = (int)st.top();
                temp.push_back(w); // Add node to the current SCC
                onstack[w] = 0; // Mark it as not on the stack
                st.pop(); // Pop it from the stack
            }

            // Add the current node itself to the SCC
            w = (int)st.top();
            temp.push_back(w);
            onstack[w] = 0; // Mark it as not on the stack
            st.pop(); // Pop it from the stack

            // Add the completed SCC to the final answer
            ans.push_back(temp);
            temp.clear(); // Clear the temporary vector for the next SCC
        }
    }

    // Function to find and return all strongly connected components in the graph
    vector<vector<int>> tarjans(int V, vector<int> adj[]) {
        int lowlink[V + 1], index[V + 1];
        
        // Boolean array to check if a node is currently on the stack
        bool onstack[V + 1]; 
        
        // Stack to store the nodes as we explore the graph
        stack<int> st;

        // Initialize arrays with -1 (not visited)
        for (int i = 0; i < V; ++i) {
            lowlink[i] = -1;
            index[i] = -1;
            onstack[i] = false;
        }

        int t = 1;
        // Iterate over all nodes and apply DFS if they haven't been visited
        for (int i = 0; i < V; ++i) {
            if (index[i] == -1) {
                findUtil(adj, st, index, lowlink, onstack, i, t);
            }
        }

        // Sort each SCC internally
        for (int i = 0; i < ans.size(); i++) {
            sort(ans[i].begin(), ans[i].end());
        }
        
        // Sort the SCCs lexicographically based on their first element
        sort(ans.begin(), ans.end(), compare1);
        
        // Return the list of SCCs
        return ans;
    }
};


//{ Driver Code Starts.


int main()
{
    
    int t;
    cin >> t;
    while(t--)
    {
        int V, E;
        cin >> V >> E;

        vector<int> adj[V];

        for(int i = 0; i < E; i++)
        {
            int u, v;
            cin >> u >> v;
            adj[u].push_back(v);
        }

        Solution obj;
        vector<vector<int>> ptr = obj.tarjans(V, adj);

        for(int i=0; i<ptr.size(); i++)
        {
            for(int j=0; j<ptr[i].size(); j++)
            {
                if(j==ptr[i].size()-1)
                    cout<<ptr[i][j];
                else
                    cout<<ptr[i][j]<<" ";
            }
            cout<<',';
        }
        cout<<endl;
    
cout << "~" << "\n";
}

    return 0;
}


// } Driver Code Ends