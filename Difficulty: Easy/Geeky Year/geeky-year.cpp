//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
    public:
        int Count(int a, int b) {
            // Initialize a counter for the number of Sundays
            int c = 0;
            
            // Loop through each year in the range from a to b (inclusive)
            for (int i = a; i <= b; i++) {
                int y = i - 1;  // Subtract 1 from the year to align with the formula
                // Calculate the day of the week for January 1st of the year y
                int ans = (y + y / 4 - y / 100 + y / 400) % 7;
                
                // If the calculated day is Sunday (6 represents Sunday), increment the counter
                if (ans == 6) c++;
            }
            
            // Return the count of Sundays
            return c;
        }
};


//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int a, b;
		cin >> a >> b;
		Solution obj;
		int ans = obj.Count(a, b);
		cout << ans << "\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends