//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    void check(int i, int j, vector<vector<char>>& grid){
        if (i < 0 || i >= grid.size() || j < 0 || j >= grid[0].size() || grid[i][j] == '0') return;
        grid[i][j] = '0';
        check(i - 1, j, grid); // Up
        check(i + 1, j, grid); // Down
        check(i, j - 1, grid); // Left
        check(i, j + 1, grid); // Right
        check(i + 1, j + 1, grid); //BottomRight
        check(i - 1, j - 1, grid); //TopLeft
        check(i - 1, j + 1, grid); //TopRight
        check(i + 1, j - 1, grid); //BottomLeft

    }
    int numIslands(vector<vector<char>>& grid) {
        // Code here
        int count=0;
        for(int i=0;i<grid.size();i++){
            for(int j=0;j<grid[0].size();j++){
                if(grid[i][j]=='1'){
                    count++;
                    check(i,j,grid);
                }
            }
        }
        return count;
    }
};


//{ Driver Code Starts.
int main() {
    int tc;
    cin >> tc;
    while (tc--) {
        int n, m;
        cin >> n >> m;
        vector<vector<char>> grid(n, vector<char>(m, '#'));
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                cin >> grid[i][j];
            }
        }
        Solution obj;
        int ans = obj.numIslands(grid);
        cout << ans << '\n';
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends