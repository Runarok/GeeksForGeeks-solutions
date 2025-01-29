//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

#include <vector>
#include <string>
#include <map>
#include <algorithm>

using namespace std;

// Definition of TrieNode, used to build the Trie structure
struct TrieNode {
    map<char, TrieNode*> children;  // Stores child nodes mapped by characters
    bool isEnd = false;  // Indicates if the current node marks the end of a sentence
    int freq = 0;  // Keeps track of how many times the sentence appears
};

class AutoCompleteSystem {
private:
    TrieNode* root;  // Root node of the Trie structure
    string currentQuery;  // Holds the accumulated user input

public:
    // Initializes the Trie with the given sentences and their frequencies
    AutoCompleteSystem(vector<string>& sentences, vector<int>& times) {
        root = new TrieNode();
        for (int i = 0; i < sentences.size(); i++) {
            insert(sentences[i], times[i]);
        }
    }
    
    // Adds a sentence to the Trie while updating its occurrence count
    void insert(string sentence, int times) {
        TrieNode* node = root;
        for (char c : sentence) {
            if (!node->children.count(c)) {
                node->children[c] = new TrieNode();
            }
            node = node->children[c];
        }
        node->isEnd = true;  // Marks completion of a word
        node->freq += times;  // Increments the sentence frequency
    }
    
    // Traverses the Trie recursively to retrieve matching sentences
    void dfs(TrieNode* node, string sentence, vector<pair<int, string>>& sentences) {
        if (node->isEnd) {
            sentences.push_back({ node->freq, sentence });
        }
        for (auto& child : node->children) {
            dfs(child.second, sentence + child.first, sentences);
        }
    }

    // Processes user input character-by-character and provides suggestions
    vector<string> input(char c) {
        if (c == '#') {
            // When '#' is encountered, store the query and reset for new input
            insert(currentQuery, 1);
            currentQuery = "";  
            return {};  
        }

        currentQuery += c;  // Extend the ongoing query with the new character
        TrieNode* node = root;
        vector<pair<int, string>> sentences;  

        // Navigate the Trie using the current query characters
        for (char ch : currentQuery) {
            if (!node->children.count(ch)) {
                return {};  // If the prefix isn't found, return an empty list
            }
            node = node->children[ch];
        }

        // Retrieve all possible sentences starting from the last matched Trie node
        dfs(node, currentQuery, sentences);

        // Sorting based on frequency in descending order, with lexicographic tie-breaker
        sort(sentences.begin(), sentences.end(), [](pair<int, string>& a, pair<int, string>& b) {
            return a.first > b.first || (a.first == b.first && a.second < b.second);
        });

        // Extract up to 3 top-ranked results
        vector<string> result;
        for (int i = 0; i < min(3, (int)sentences.size()); ++i) {
            result.push_back(sentences[i].second);
        }
        return result;
    }
};

/**
 * Usage Example:
 * AutoCompleteSystem* obj = new AutoCompleteSystem(sentences, times);
 * vector<string> result = obj->input(c);
 */


//{ Driver Code Starts.

int main() {

    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        int n;
        cin >> n;
        cin.ignore();
        vector<string> sentences(n);
        vector<int> times(n);
        for (int i = 0; i < n; ++i) {

            getline(cin, sentences[i]);
            cin >> times[i];
            cin.ignore();
        }
        AutoCompleteSystem *obj = new AutoCompleteSystem(sentences, times);
        int q;
        cin >> q;
        cin.ignore();

        for (int i = 0; i < q; ++i) {
            string query;
            getline(cin, query);
            string qq = "";
            for (auto &x : query) {
                qq += x;
                vector<string> suggestions = obj->input(x);
                if (x == '#')
                    continue;
                cout << "Typed : \"" << qq << "\" , Suggestions: \n";
                for (auto &y : suggestions) {
                    cout << y << "\n";
                }
            }
        }
        cout << "~" << endl;
    }
    return 0;
}

// } Driver Code Ends