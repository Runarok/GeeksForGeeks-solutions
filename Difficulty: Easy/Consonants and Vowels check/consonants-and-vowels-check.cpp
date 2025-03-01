//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

void checkString(string s);


// } Driver Code Ends

// User function Template for C++

void checkString(string s) {
    int v = 0;  // Counter for vowels
    int c = 0;  // Counter for consonants
    string vowels = "aeiou";  // String containing vowels

    // Iterate through each character in the string
    for (char ch : s) {
        // Check if the character is a vowel
        if (vowels.find(ch) != string::npos) {
            v++;
        } 
        // Check if the character is an alphabet (not a vowel)
        else if (isalpha(ch)) {
            c++;
        }
    }

    // Compare the counts of vowels and consonants
    if (v > c)
        cout << "Yes";   // More vowels than consonants
    else if (c > v)
        cout << "No";    // More consonants than vowels
    else
        cout << "Same";  // Equal vowels and consonants
    
    cout << endl;  // New line after output
}



//{ Driver Code Starts.

int main() {
	int t;
	cin>>t;
	cin.ignore();
	while(t--)
	{
	    
	    string s;
	    getline(cin,s);
	    
	    //function call
	    checkString(s);
	   
	
cout << "~" << "\n";
}
	return 0;
}


// } Driver Code Ends