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
    // Custom priority map defining order of characters including "ng"
    unordered_map<string, int> priority = {
        {"a", 1}, {"b", 2}, {"c", 3}, {"d", 4}, {"e", 5},
        {"f", 6}, {"g", 7}, {"h", 8}, {"i", 9}, {"j", 10},
        {"k", 11}, {"l", 12}, {"m", 13}, {"n", 14}, {"ng", 15},
        {"o", 16}, {"p", 17}, {"q", 18}, {"r", 19}, {"s", 20},
        {"t", 21}, {"u", 22}, {"v", 23}, {"w", 24}, {"x", 25},
        {"y", 26}, {"z", 27}
    };

    int i = 0, j = 0; // Pointers to traverse both strings

    while (i < s1.length() && j < s2.length()) {
        string char1, char2;

        // Extract character or "ng" from s1
        if (s1[i] == 'n' && i + 1 < s1.length() && s1[i + 1] == 'g') {
            char1 = "ng";
            i += 2;
        } else {
            char1 = string(1, s1[i]);
            i++;
        }

        // Extract character or "ng" from s2
        if (s2[j] == 'n' && j + 1 < s2.length() && s2[j + 1] == 'g') {
            char2 = "ng";
            j += 2;
        } else {
            char2 = string(1, s2[j]);
            j++;
        }

        // Compare the extracted parts using their priority
        if (priority[char1] > priority[char2]) return 1;
        if (priority[char1] < priority[char2]) return -1;
    }

    // Handle cases where one string is a prefix of the other
    if (i < s1.length()) return 1;  // s1 is longer, so it's "greater"
    if (j < s2.length()) return -1; // s2 is longer, so it's "greater"
    
    // Both strings are equal
    return 0;
}
