//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

void sortArray(int a[], char b[], int n) {

    // Create an array of pairs to store elements from both arrays
    pair<int, char> p[n];

    // Combine both arrays into pairs: each pair consists of an element from 'a' and 'b'
    for (int i = 0; i < n; i++) {
        p[i] = {a[i], b[i]};
    }

    // Sort the array of pairs based on the first element (a[i])
    sort(p, p + n);

    // Extract the sorted characters back into the original 'b' array
    for (int i = 0; i < n; i++) {
        b[i] = p[i].second;
    }
}



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        int a[n];
        for (int i = 0; i < n; i++) {
            cin >> a[i];
        }

        char b[n];
        for (int i = 0; i < n; i++) {
            cin >> b[i];
        }

        sortArray(a, b, n);
        for (auto it : b)
            cout << it << " ";
        cout << endl;

        cout << "~"
             << "\n";
    }
}
// } Driver Code Ends