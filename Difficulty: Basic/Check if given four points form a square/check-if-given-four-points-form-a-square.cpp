//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    // Function to check if the points form a square
    int fourPointSquare(vector<vector<int>> points) {
   
        // Helper lambda function to calculate squared distance between two points
        auto distSq = [](vector<int> p1, vector<int> p2) {
            return (p2[0] - p1[0]) * (p2[0] - p1[0]) + 
                   (p2[1] - p1[1]) * (p2[1] - p1[1]);
        };

        // If there are not exactly 4 points, return 0 (not a square)
        if (points.size() != 4) return 0;
    
        // Vector to store the distances between each pair of points
        vector<int> dists;
        dists.push_back(distSq(points[0], points[1]));
        dists.push_back(distSq(points[0], points[2]));
        dists.push_back(distSq(points[0], points[3]));
        dists.push_back(distSq(points[1], points[2]));
        dists.push_back(distSq(points[1], points[3]));
        dists.push_back(distSq(points[2], points[3]));
    
        // Sort the distances in ascending order
        sort(dists.begin(), dists.end());
    
        // Check if all four sides are equal and the two diagonals are equal
        bool allSidesEqual = (dists[0] > 0 && 
                              dists[0] == dists[1] && 
                              dists[1] == dists[2] && 
                              dists[2] == dists[3]);
    
        bool diagonalsEqual = (dists[4] == dists[5]);
    
        // If both conditions are met, the points form a square
        if (allSidesEqual && diagonalsEqual) {
            return 1;
        } else {
            return 0;
        }
    }
};


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        vector<vector<int>> points(4, vector<int>(2));
        for (int i = 0; i < 4; i++)
            for (int j = 0; j < 2; j++) cin >> points[i][j];
        Solution ob;
        cout << ob.fourPointSquare(points) << "\n";
    
cout << "~" << "\n";
}
}
// } Driver Code Ends