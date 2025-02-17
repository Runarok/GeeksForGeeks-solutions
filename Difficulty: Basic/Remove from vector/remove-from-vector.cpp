//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// Back-end complete function Template for C++

void removeWithinRange(vector<int> &V, int start, int end) {
    // Define iterators pointing to the start and end positions
    vector<int>::iterator itStart, itEnd;
    
    itStart = V.begin() + start; // Iterator to the starting index
    itEnd = V.begin() + end;     // Iterator to the ending index (exclusive)
    
    // Erase the elements within the specified range
    V.erase(itStart, itEnd);
}

//{ Driver Code Starts.

vector<int> inputLine() {
    string str;
    getline(cin, str);
    stringstream ss(str);
    int num;
    vector<int> res;
    while (ss >> num) {
        res.push_back(num);
    }
    return res;
}

int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        vector<int> V = inputLine();

        int start, end;
        cin >> start >> end;
        cin.ignore();

        removeWithinRange(V, start, end);

        if (V.size() == 0)
            cout << "Empty" << endl;
        else {
            for (auto itr = V.begin(); itr != V.end(); itr++)
                cout << *itr << " ";
            cout << endl;
        }
        cout << "~" << endl;
    }
}

// } Driver Code Ends