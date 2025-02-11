//{ Driver Code Starts
// Initial Template for C++

// unordered_set::hash_function
#include <iostream>
#include <string>
#include <unordered_set>

using namespace std;


// } Driver Code Ends
// User function Template for C++

// Complete the function

long int HashMe(std::unordered_set<std::string> myset, std::string str) {
    // Insert the given string into the unordered set
    myset.insert(str);

    // Compute and return the hash value of the inserted string
    return std::hash<std::string>{}(str);
}



//{ Driver Code Starts.

int main() {

    int t;
    cin >> t;

    while (t--) {

        string str;
        cin >> str;

        unordered_set<string> myset;

        cout << HashMe(myset, str) << endl;

        cout << "~"
             << "\n";
    }

    return 0;
}

// } Driver Code Ends