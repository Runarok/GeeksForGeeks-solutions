//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;
#define MAX 100


// Returns sum of perimeter of shapes formed with 1s
int findPerimeter(int mat[MAX][MAX], int n,int m);

int main() {
	int t;
	cin>>t;
	int g[MAX][MAX];
	while(t--)
	{
		memset(g,0,sizeof g);
		int n;
		cin>>n;
		int m;
		cin>>m;
	
		for(int i=0;i<n;i++)
		{
			for(int j=0;j<m;j++)
			{
				cin>>g[i][j];
			}
		}
		
		cout<<findPerimeter(g,n,m)<<endl;
	
cout << "~" << "\n";
}
	// your code goes here
	return 0;
}
// } Driver Code Ends

vector<int> dr{1, -1, 0, 0};
vector<int> dc{0, 0, 1, -1};

// Function to check if a cell is within the grid boundaries
bool isValid(int r, int c, int N, int M) {
    return (r >= 0 && r < N && c >= 0 && c < M);
}

/* You are required to complete this method */
int findPerimeter(int mat[MAX][MAX], int n, int m) {
    int totalPerimeter = 0;

    // Loop through each cell in the matrix
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            // If the current cell is land (1), calculate its contribution to perimeter
            if (mat[i][j] == 1) {
                int currentPerimeter = 4;

                // Check all four adjacent directions (up, down, left, right)
                for (int k = 0; k < 4; k++) {
                    int nr = i + dr[k]; // new row
                    int nc = j + dc[k]; // new column
                    
                    // If the adjacent cell is within bounds and is land, reduce perimeter by 1
                    if (isValid(nr, nc, n, m) && mat[nr][nc] == 1) {
                        currentPerimeter--;
                    }
                }

                // Add the current cell's perimeter to the total perimeter
                totalPerimeter += currentPerimeter;
            }
        }
    }

    return totalPerimeter;
}
