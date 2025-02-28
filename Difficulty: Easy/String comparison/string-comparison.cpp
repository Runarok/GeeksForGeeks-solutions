//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


int stringComparsion(string s1, string s2);


int main() 
{


   	ios_base::sync_with_stdio(0);
    cin.tie(NULL);
    cout.tie(NULL);
   
   	int t;
   	cin >> t;
   	while(t--)
   	{
   		string s1, s2;
   		cin >> s1 >> s2;

   		
   		cout << stringComparsion(s1, s2) << "\n";
   	
cout << "~" << "\n";
}

    return 0;
}

// } Driver Code Ends

int stringComparsion(string s1, string s2) {
    int i = 0;
    int j = 0;

    // Direct check for complete equality
    if (s1 == s2) {
        return 0;
    }

    // Compare character by character until one string ends
    while (i < s1.size() && j < s2.size()) {
        if (s1[i] > s2[j]) {
            return 1; // s1 is lexicographically greater
        } else if (s1[i] < s2[j]) {
            return -1; // s2 is lexicographically greater
        }
        i++;
        j++;
    }

    // If both prefixes match completely, return 0
    return 0;
}
