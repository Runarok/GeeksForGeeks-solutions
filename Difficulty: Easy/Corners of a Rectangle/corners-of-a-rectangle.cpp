//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    vector<vector<float>> findCornerPoints(float l, vector<vector<float>> points) {
        // Calculate the difference between the x and y coordinates of the first two points
        float dx = points[1][0] - points[0][0];
        float dy = points[1][1] - points[0][1];

        // Find the perpendicular direction vector (nx, ny) to the line formed by the points
        float nx = -dy, ny = dx;

        // Normalize the perpendicular vector
        float t = hypot(nx, ny);
        nx /= t;
        ny /= t;

        // Half the length for the desired corner points
        l /= 2;

        vector<vector<float>> ans;

        // Calculate the four corner points based on the perpendicular direction and half the length
        ans.push_back({points[0][0] + nx * l, points[0][1] + ny * l});
        ans.push_back({points[0][0] - nx * l, points[0][1] - ny * l});
        ans.push_back({points[1][0] + nx * l, points[1][1] + ny * l});
        ans.push_back({points[1][0] - nx * l, points[1][1] - ny * l});

        // Round down the coordinates to the nearest integers
        for (int i = 0; i < 4; i++) {
            ans[i][0] = floor(ans[i][0]);
            ans[i][1] = floor(ans[i][1]);
        }

        // Sort the corner points
        sort(ans.begin(), ans.end());

        // Return the calculated corner points
        return ans;
    }
};



//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		vector<vector<float>>points;
		for(int i = 0; i < 2; i++){
			float x, y;
			cin >> x >> y;
			points.push_back({x,y});
		}
		float L;
		cin >> L;
		Solution obj;
		vector<vector<float>>ans = obj.findCornerPoints(L, points);
		for(auto i: ans){
			for(auto j: i)cout << fixed << setprecision(4)<< j << " ";
			cout << "\n";
		}
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends