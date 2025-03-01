//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

#include <bits/stdc++.h>
using namespace std;

// Declare a global list of integers
list<int> l;

// Function to insert an element into the list
void insert(int x) {
    // Adds the integer 'x' to the end of the list
    l.push_back(x);
}

// Function to print the contents of the list
void print() {
    // Iterate through the list and print each element
    for (int value : l) {
        cout << value << " "; // Output each value in the list
    }
    cout << endl; // Move to the next line after printing the list
}

// Function to replace an element in the list with a sequence of integers
void replace(int x, vector<int> sequence) {
    // Find the position of element 'x' in the list
    auto it = find(l.begin(), l.end(), x);

    // If the element 'x' is found in the list
    if (it != l.end()) {
        // Remove the element 'x' from the list
        it = l.erase(it);
        
        // Insert the sequence of integers at the position of the removed element
        l.insert(it, sequence.begin(), sequence.end());
    }
}


//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        l.clear();
        string s, t;
        cin >> s >> t;
        int ind = 0;
        vector<string> function;
        string temp = "";
        for (int i = 0; i < s.size() - 1; i++) {
            if (isalpha(s[i])) {
                temp += s[i];
                if (!isalpha(s[i + 1])) {
                    function.push_back(temp);
                    temp = "";
                }
            }
        }
        temp = "";
        vector<int> ins;
        vector<pair<int, vector<int>>> rep;
        for (int i = 0; i < t.size() - 1;) {
            // cout<<t[i];
            if (isdigit(t[i]))
                temp += t[i];
            if (t[i + 1] == ']') {
                if (temp.empty()) {
                    if (ind == function.size()) {
                        assert(0);
                        return 0;
                    } else if (function[ind] == "print") {
                        print();
                        ind++;
                    } else {
                        assert(0);
                        // cout<<"invalid parameter input\n";
                        return 0;
                    }
                    i += 3;
                    continue;
                }
                if (ind == function.size()) {
                    assert(0);
                    // cout<<"invalid parameter input\n";
                    return 0;
                } else if (function[ind] == "insert") {
                    insert(stoi(temp));
                    ind++;
                } else {
                    assert(0);
                    // cout<<"invalid parameter input\n";
                    return 0;
                }
                temp = "";
                i += 3;
                continue;
            }
            if (t[i + 1] == ',') {
                int firstVal = stoi(temp);
                temp = "";
                vector<int> v;
                int j = t.size();
                for (j = i + 3; j < t.size(); j++) {
                    if (isdigit(t[j])) {
                        temp += t[j];
                    } else if (t[j] == ',') {
                        v.push_back(stoi(temp));
                        temp = "";
                    } else if (t[j] == ']') {
                        v.push_back(stoi(temp));
                        temp = "";
                        break;
                    }
                }

                if (ind == function.size()) {
                    assert(0);
                    // cout<<"invalid parameter input\n";
                    return 0;
                } else if (function[ind] == "replace") {
                    replace(firstVal, v);
                    ind++;
                } else {
                    assert(0);
                    // cout<<"invalid parameter input\n";
                    return 0;
                }
                i = j + 3;
            } else
                i++;
        }

        if (ind != function.size()) {
            assert(0);
            // cout<<"invalid function input\n";
        }
        cout << "~\n";
    }
    return 0;
}
// } Driver Code Ends