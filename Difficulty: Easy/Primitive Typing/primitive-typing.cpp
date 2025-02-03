//{ Driver Code Starts


#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    // Function to find the total distance traveled to form a given string
    int FindPath(string str){
        
        int ans = str.length();  // Initialize answer with the length of the string
        
        int curx = 0;  // Starting x-coordinate
        int cury = 0;  // Starting y-coordinate

        // Iterate through each character in the string
        for (int i = 0; i < str.length(); i++) {
            // Convert the character to its respective position in a 5x5 grid
            int t1 = str[i] - 'a';
            int a, b;
            
            // Calculate the x and y coordinates of the current character
            a = t1 % 5;
            b = t1 / 5;

            // Add the distance from the current position to the new position
            ans = ans + abs(a - curx) + abs(b - cury);

            // Update current coordinates
            curx = a;
            cury = b;
        }

        return ans;  // Return the total distance traveled
    }
};


//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		string str;
		cin >> str;
		Solution obj;
		int ans = obj.FindPath(str);
		cout << ans << "\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends