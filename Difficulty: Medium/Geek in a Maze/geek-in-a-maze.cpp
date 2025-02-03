//{ Driver Code Starts
//Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
    public:
    int numberOfCells(int n, int m, int r, int c, int u, int d, vector<vector<char>> &mat) {
        // If the starting cell is blocked, return 0
        if (mat[r][c] == '#') {
            return 0;
        }

        // Queue to store the current cell coordinates and the remaining up and down moves
        queue<array<int, 4>> q;
        q.push({r, c, u, d});
        
        // Initialize visited array to keep track of visited cells and their distance
        vector<vector<int>> vis(n, vector<int> (m));

        // Initialize the visited array: blocked cells have value 1e9 (inaccessible), unvisited cells have -1
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < m; ++j) {
                vis[i][j] = mat[i][j] == '#' ? 1e9 : -1;
            }
        }

        // Set the starting cell's visited distance as the sum of up and down moves
        vis[r][c] = u + d;

        // Perform BFS to explore the grid
        while (!q.empty()) {
            auto t = q.front();
            q.pop();
            int i = t[0], j = t[1], up = t[2], down = t[3];

            // Check left cell and update if a better path is found
            if (j && up + down > vis[i][j - 1]) {
                vis[i][j - 1] = up + down;
                q.push({i, j - 1, up, down});
            }

            // Check right cell and update if a better path is found
            if (j + 1 < m && up + down > vis[i][j + 1]) {
                vis[i][j + 1] = up + down;
                q.push({i, j + 1, up, down});
            }

            // Check top cell and update if a better path is found and up moves are available
            if (i && up + down - 1 > vis[i - 1][j] && up) {
                vis[i - 1][j] = up + down - 1;
                q.push({i - 1, j, up - 1, down});
            }

            // Check bottom cell and update if a better path is found and down moves are available
            if (i + 1 < n && up + down - 1 > vis[i + 1][j] && down) {
                vis[i + 1][j] = up + down - 1;
                q.push({i + 1, j, up, down - 1});
            }
        }

        // Count cells that are reachable and not blocked
        int ans = 0;
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < m; ++j) {
                ans += 0 <= vis[i][j] && mat[i][j] != '#';
            }
        }

        return ans;
    }
};



//{ Driver Code Starts.

int main() 
{
   	
   	int t;
    cin >> t;

    while (t--)
    {
    	int n, m, r, c, u, d;
        cin >> n >> m >> r >> c >> u >> d;
        
        vector<vector<char>> mat(n, vector<char>(m, '.'));

        for(int i = 0; i < n; i++)
        {
        	for(int j = 0; j < m; j++)
        	{
        		cin >> mat[i][j];
        	}
        }

      

        Solution obj;
        cout << obj.numberOfCells(n, m, r, c, u, d, mat) << "\n";
    
    
cout << "~" << "\n";
}

    return 0;
}



// } Driver Code Ends