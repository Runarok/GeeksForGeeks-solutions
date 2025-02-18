//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;
#define M 101

vector<vector<int>> transpose(int a[][M], int n);

int main()
{
    int t;
    cin>>t;
    int a[M][M];
    while(t--)
    {
        int n;
        cin>>n;
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<n;j++)
            {
                cin>>a[i][j];
            }
        }
        vector<vector<int>> b;
        b = transpose(a, n);
        for(int i=0;i < n;i++)
        {
            for(int j=0;j<n;j++){
                cout << b[i][j] << " ";
            }
        }
        cout<<endl;
    
cout << "~" << "\n";
}
}



// } Driver Code Ends

vector<vector<int>> transpose(int a[][M], int n) {
    // Create a vector of vectors (MxM matrix) to store the transposed matrix
    vector<vector<int>> ans(M, vector<int>(M));

    // Loop through the original matrix and swap the indices to transpose
    for (int i = 0; i < M; i++) {
        for (int j = 0; j < M; j++) {
            ans[j][i] = a[i][j];  // Transpose by swapping row and column indices
        }
    }

    // Return the transposed matrix
    return ans;
}
