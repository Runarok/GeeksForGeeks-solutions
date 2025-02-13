//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

#include <bits/stdc++.h>
using namespace std;

#define all(x) x.begin(), x.end()

class Solution {
  public:
    string tinyMiny(int a, int n) {
        string v;
        int base = a;

        // Generate powers of 'a' and concatenate them into a string
        for (int i = 0; i < n; i++) {
            v += to_string(a);
            a *= base;
        }

        // Sort the string in ascending order
        sort(all(v));

        // Remove leading zeros and return the result
        string result;
        for (char ch : v) {
            if (ch != '0') {
                result += ch;
            }
        }
        return result;
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int a, n;
        cin >> a >> n;
        Solution ob;
        cout << ob.tinyMiny(a, n) << endl;
        cout << "~" << endl;
    }
    return 0;
}

// } Driver Code Ends