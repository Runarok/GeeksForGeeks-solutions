//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    // Function to calculate the number of chicks after n days
    long long int NoOfChicks(int n){
        // Initialize the sum with 1 (as there is one chick on day 1)
        long long int sum = 1;
        
        // Array to store the number of chicks born on the last 6 days
        long long int life[6] = {1};
        
        // Loop through days from 1 to n-1
        for(int i = 1; i < n; i++) {
            // If the current day is greater than or equal to 6, subtract the chicks born 6 days ago
            if(i >= 6)
                sum -= life[i % 6];
            
            // Calculate the chicks born today (double the sum of chicks from previous days)
            life[i % 6] = sum * 2;
            
            // Add the chicks born today to the total sum
            sum += life[i % 6];
        }
        
        // Return the total number of chicks after n days
        return sum;
    }
};



//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int N;
		cin >> N;
		Solution obj;
		long long int ans = obj.NoOfChicks(N);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends