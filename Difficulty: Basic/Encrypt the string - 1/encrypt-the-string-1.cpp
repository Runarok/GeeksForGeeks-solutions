//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
public:
    string encryptString(string s){
        char prev = s[0]; // To keep track of the current character
        int count = 1; // Initialize count for the current character
        string ans; // To store the result

        // Iterate through the string starting from the second character
        for(int i = 1; i < s.size(); i++){
            if(s[i] == prev) {
                count++; // Increment the count if the character matches the previous one
            }
            else {
                ans += prev; // Append the previous character to the result
                string countans;
                
                // Convert the count to string and append it to the result
                while(count != 0) {
                    int a = count % 10;
                    count = count / 10;
                    countans += a + '0';
                }

                reverse(countans.begin(), countans.end()); // Reverse the count string to get correct order
                ans += countans; // Append the count to the result
                count = 1; // Reset count for the new character
                prev = s[i]; // Update the previous character to the current one
            }
        }
        
        // Handle the last character and its count
        if(count >= 1) {
            ans += prev; // Append the last character
            string countans;
            
            // Convert the last count to string
            while(count != 0) {
                int a = count % 10;
                count = count / 10;
                countans += a + '0';
            }
            
            reverse(countans.begin(), countans.end()); // Reverse the count string
            ans += countans; // Append the count to the result
        }

        reverse(ans.begin(), ans.end()); // Reverse the final result string
        return ans; // Return the encrypted string
    }
};


//{ Driver Code Starts.
int main()
{
	int t;
	cin>>t;
	while(t--){
	    string s;
		cin>>s;
		Solution ob;
		string ans = ob.encryptString(s);
		cout<<ans<<endl;
	
cout << "~" << "\n";
}
}

// } Driver Code Ends