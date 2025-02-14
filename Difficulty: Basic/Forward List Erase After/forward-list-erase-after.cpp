//{ Driver Code Starts
// Initial Template for C++

// Erasing from forward_list
#include <forward_list>
#include <iostream>

using namespace std;


// } Driver Code Ends

// User function Template for C++

// Function to erase the second element from the forward_list
forward_list<int> eraseMe(forward_list<int> fwdlist) {
    // Ensure the list has more than one element before erasing
    if (!fwdlist.empty()) {
        fwdlist.erase_after(fwdlist.begin());
    }
    return fwdlist;
}



//{ Driver Code Starts.

int main() {

    int t;
    cin >> t;

    while (t--) {
        int n;
        cin >> n;

        int arr[n];

        for (int i = 0; i < n; i++) {
            int x;
            cin >> x;
            arr[i] = x;
        }

        forward_list<int> fwdlist;

        auto it = fwdlist.before_begin();

        for (int i = 0; i < n; ++i) {
            it = fwdlist.insert_after(it, arr[i]);
        }

        forward_list<int> res = eraseMe(fwdlist);

        for (int &x : res)
            cout << x << ' ';
        cout << endl;

        cout << "~"
             << "\n";
    }

    return 0;
}

// } Driver Code Ends