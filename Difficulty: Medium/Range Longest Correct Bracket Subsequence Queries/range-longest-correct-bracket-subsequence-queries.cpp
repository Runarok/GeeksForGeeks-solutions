//{ Driver Code Starts
// Initial template for C++

#include <bits/stdc++.h>
using namespace std;

struct Node {
    int pairs;
    int open;   // unused
    int closed; // unused

    Node() { pairs = open = closed = 0; }
};

int getMid(int s, int e) {
    return s + (e - s) / 2;
}

Node merge(Node leftChild, Node rightChild) {
    Node parentNode;
    int minMatched = min(leftChild.open, rightChild.closed);
    parentNode.pairs = leftChild.pairs + rightChild.pairs + minMatched;
    parentNode.open = leftChild.open + rightChild.open - minMatched;
    parentNode.closed = leftChild.closed + rightChild.closed - minMatched;
    return parentNode;
}

void constructSTUtil(string str, int ss, int se, Node* st, int si) {
    if (ss == se) {
        st[si].pairs = 0;
        if (str[ss] == '(')
            st[si].open = 1;
        else
            st[si].closed = 1;

        return;
    }

    int mid = getMid(ss, se);
    constructSTUtil(str, ss, mid, st, si * 2 + 1);
    constructSTUtil(str, mid + 1, se, st, si * 2 + 2);

    st[si] = merge(st[si * 2 + 1], st[si * 2 + 2]);
}

Node* constructST(string str, int n) {
    int x = (int)(ceil(log2(n)));

    int max_size = 2 * (int)pow(2, x) - 1;
    Node* st = new Node[max_size];

    constructSTUtil(str, 0, n - 1, st, 0);
    return st;
}


// } Driver Code Ends

// User function template for C++

class Solution {
  public:
    // Function to return the maximum length of correct bracket subsequence
    // between starting and ending indexes.
    // st : segment tree of the given string (array of Node type)
    // qs : starting index of the range
    // qe : ending index of the range
    // ss : start index of the segment
    // se : end index of the segment
    // si : current segment index in the segment tree array
    Node getLongestSequenceUtil(Node* st, int qs, int qe, int ss, int se, int si) {
        // If the range [qs, qe] is completely outside the current segment [ss, se]
        if (qs > se || ss > qe) {
            // Return a default Node which represents an empty range
            Node nn;
            return nn;
        }
        // If the current segment is completely within the query range [qs, qe]
        else if (qs <= ss && qe >= se) {
            // Return the stored node for this segment
            Node nn;
            nn.pairs = st[si].pairs;
            nn.open = st[si].open;
            nn.closed = st[si].closed;
            return nn;
        }
        // If the current segment partially overlaps with the query range [qs, qe]
        else {
            // Find the middle index of the current segment
            int m = (ss + se) / 2;

            // Recursively query the left and right subtrees
            Node a = getLongestSequenceUtil(st, qs, qe, ss, m, 2 * si + 1);  // Left subtree
            Node b = getLongestSequenceUtil(st, qs, qe, m + 1, se, 2 * si + 2);  // Right subtree

            // Merge the results of the left and right subtrees
            return merge(a, b);
        }
    }

    // Function to return the maximum length of correct bracket subsequence
    // between the given range [qs, qe]
    int getLongestSequence(Node* st, string str, int qs, int qe, int n) {
        // Query the segment tree to get the result for the range [qs, qe]
        Node a = getLongestSequenceUtil(st, qs, qe, 0, n - 1, 0);

        // The length of the correct bracket subsequence is 2 times the number of pairs
        return 2 * a.pairs;
    }
};



//{ Driver Code Starts.

// Driver Code
int main() {
    int t;
    cin >> t;
    while (t--) {
        int query;
        string str;

        cin >> str >> query;
        int n = str.length();

        Node* st = constructST(str, n);

        int startIndex, endIndex;
        while (query--) {
            cin >> startIndex >> endIndex;
            Solution obj;
            cout << obj.getLongestSequence(st, str, startIndex, endIndex, n) << endl;
        }

        cout << "~"
             << "\n";
    }

    return 0;
}

// } Driver Code Ends