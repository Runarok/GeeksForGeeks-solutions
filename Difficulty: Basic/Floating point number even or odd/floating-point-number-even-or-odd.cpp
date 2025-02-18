//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;
bool isEven(string s,int n);
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        cin>>n;
        string s;
        cin>>s;
        if (isEven(s,n))
           cout << "EVEN\n";
        else
           cout << "ODD\n";
        
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends

bool isEven(string s, int n) {
    int i = n - 1;

    // Traverse the string from the last character, ignoring trailing zeros and dots
    while ((s[i] - '0') == 0 || s[i] == '.') {
        i--;
    }

    // Check if the last significant digit is even
    return (s[i] - '0') % 2 == 0;
}
