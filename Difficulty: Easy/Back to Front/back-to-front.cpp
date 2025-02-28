//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

/* Function to print the vector in reverse order using reverse iterators
 * it1 : v.rbegin() - reverse iterator pointing to the last element
 * it2 : v.rend()   - reverse iterator pointing to the element before the first
 */
void reverseIterator(vector<int>::reverse_iterator it1,
                     vector<int>::reverse_iterator it2) {

    // Iterating over the vector in reverse order
    for (auto it = it1; it != it2; it++) {
        // Printing the value pointed to by the reverse iterator
        cout << *it << " ";
    }
    
    // Printing a new line after printing the vector in reverse order
    cout << endl;
}



//{ Driver Code Starts.

// Driver code
int main() {

    int testcase;
    cin >> testcase;

    while (testcase--) {
        int N;
        cin >> N;

        // Declaring vector
        vector<int> arr;

        // Taking input to vector
        for (int i = 0; i < N; i++) {
            int k;
            cin >> k;
            arr.push_back(k);
        }

        // Calling function
        reverseIterator(arr.rbegin(), arr.rend());
        cout << "~\n";
    }

    return 0;
}
// } Driver Code Ends