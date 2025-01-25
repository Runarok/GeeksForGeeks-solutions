//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
// User function Template for C++
#include <vector>
#include <cmath>
using namespace std;

class Solution {
public:
    vector<double> myCalculator(double Arr[3][4]) {
        // Extract the coefficients and constants from the matrix
        double a1 = Arr[0][0], a2 = Arr[1][0], a3 = Arr[2][0];
        double b1 = Arr[0][1], b2 = Arr[1][1], b3 = Arr[2][1];
        double c1 = Arr[0][2], c2 = Arr[1][2], c3 = Arr[2][2];
        double d1 = Arr[0][3], d2 = Arr[1][3], d3 = Arr[2][3];
        
        // Calculate the determinant of the coefficient matrix
        double wholeDet = a1 * (b2 * c3 - b3 * c2) - b1 * (c3 * a2 - a3 * c2) + c1 * (a2 * b3 - a3 * b2);
        
        // If determinant is 0, the system may have no solution or infinite solutions
        if (wholeDet == 0) {
            return {0};  // No solution or infinitely many solutions
        }
        
        // Calculate determinants for X, Y, Z using Cramer's rule
        double xDet = d1 * (b2 * c3 - b3 * c2) - b1 * (d2 * c3 - d3 * c2) + c1 * (d2 * b3 - d3 * b2);
        double yDet = a1 * (d2 * c3 - d3 * c2) - d1 * (c3 * a2 - a3 * c2) + c1 * (a2 * d3 - a3 * d2);
        double zDet = a1 * (b2 * d3 - b3 * d2) - b1 * (d3 * a2 - a3 * d2) + d1 * (a2 * b3 - a3 * b2);
        
        // Calculate the solutions for X, Y, Z by dividing the determinants by the whole determinant
        double X = xDet / wholeDet;
        double Y = yDet / wholeDet;
        double Z = zDet / wholeDet;
        
        // Return the floor values of the solutions
        return {floor(X), floor(Y), floor(Z)};
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        double Arr[3][4];
        for(int i=0; i<3; i++)
            for(int j=0; j<4; j++)
                cin >> Arr[i][j];
        Solution ob;
        vector<double>ans=ob.myCalculator(Arr);
        for(int i=0;i<ans.size();i++)cout<<ans[i]<<" ";
            cout<<endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends