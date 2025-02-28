//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

/*
a[], b[]: arrays whose corresponding values need to be returned
                as a pair array
n: size of arrays
pair<int, int> res[]: resultant pair array
*/
void corresPair(int a[], int b[], int n, pair<int, int> res[]) {
    // Loop through arrays to form pairs
    for (int i = 0; i < n; ++i) {
        // Pair corresponding elements of a and b
        res[i] = {a[i], b[i]};
    }
}


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        int n;
        cin >> n;
        cin.ignore();
        int a[n], b[n];

        string line;
        getline(cin, line);
        stringstream ss(line);
        for (int i = 0; i < n; i++) {
            ss >> a[i];
        }
        getline(cin, line);
        stringstream ss2(line);
        for (int i = 0; i < n; i++) {
            ss2 >> b[i];
        }
        pair<int, int> res[n];
        corresPair(a, b, n, res);
        for (int i = 0; i < n; i++)
            cout << "(" << res[i].first << "," << res[i].second << ")";
        cout << endl;
        cout << "~\n";
    }
}

// } Driver Code Ends