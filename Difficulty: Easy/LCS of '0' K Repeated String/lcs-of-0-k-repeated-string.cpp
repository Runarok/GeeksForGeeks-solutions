//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
public:
    // Function to find the maximum length of consecutive zeros in the given string `st`
    int lcsK(int k, string st) {
        // Variable to store the maximum length of consecutive zeros
        int maxi = 0;

        // Check if the string starts with '1'
        if(st[0] == '1') {
            // Iterate through the string to find the maximum length of consecutive zeros
            for(int i = 0; i < st.size(); ++i) {
                if(st[i] == '0') {
                    int cnt = 0;
                    // Count consecutive zeros
                    while(i < st.size() && st[i] == '0') {
                        cnt++;
                        i++;
                    }
                    // Update maxi with the maximum count of consecutive zeros
                    maxi = max(maxi, cnt);
                }
            }
            // Return the maximum length of consecutive zeros
            return maxi;
        } else {
            bool c = true;
            // Check if all characters in the string are '0'
            for(int i = 0; i < st.size(); ++i) {
                if(st[i] == '1') {
                    c = false;
                    break;
                }
            }

            // If all characters are '0', return the product of k and the size of the string
            if(c) return k * st.size();
            else {
                // Duplicate the string to handle circular cases
                st += st;
                // Iterate through the string again to find the maximum length of consecutive zeros
                for(int i = 0; i < st.size(); ++i) {
                    if(st[i] == '0') {
                        int cnt = 0;
                        // Count consecutive zeros
                        while(i < st.size() && st[i] == '0') {
                            cnt++;
                            i++;
                        }
                        // Update maxi with the maximum count of consecutive zeros
                        maxi = max(maxi, cnt);
                    }
                }
                // Return the maximum length of consecutive zeros
                return maxi;
            }
        }
    }
};



//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int k;
        cin>>k;
        string st;
        cin>>st;
        
        Solution ob;
        cout<<ob.lcsK(k, st)<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends