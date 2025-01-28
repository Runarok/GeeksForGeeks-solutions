//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
// User function Template for C++

// TrieNode class defines a single node in the Trie.
class trieNode{
    public:
    
    trieNode* children[26];  // Array of pointers to the children nodes (26 letters).
    bool isEnd;               // Flag to indicate if this node marks the end of a word.
    
    // Constructor initializes the node's children to NULL and isEnd to false.
    trieNode(){
        for(int i=0;i<26;i++){
            this->children[i]=NULL;  // Initialize all child nodes to NULL.
        }
        this->isEnd=false;  // Mark the node as not the end of a word.
    }
};

// Solution class handles the operations on the Trie.
class Solution{
public:
    trieNode* root;  // Root of the Trie.

    // Constructor initializes the root of the Trie.
    Solution(){
        root=new trieNode();  // Create a new root node.
    }
    
    // Insert a string into the Trie.
    void insert(string s){
        int n=s.size();  // Get the length of the string.
        trieNode* curr=root;  // Start at the root node.
        for(int i=0;i<n;i++){
            char ch=s[i];  // Get the current character from the string.
            // Check if the child node for this character exists, if not create it.
            if(curr->children[ch-'a']==NULL){
                curr->children[ch-'a']=new trieNode();  // Create a new node for the character.
            }
            // Move to the child node corresponding to the current character.
            curr=curr->children[ch-'a'];
        }
        
        curr->isEnd=true;  // Mark the end of the string.
    }

    // Find the Trie node corresponding to the given prefix.
    trieNode* prefix(string s){
        int n=s.size();  // Get the length of the prefix.
        trieNode* curr=root;  // Start at the root node.
        for(int i=0;i<n;i++){
            char ch=s[i];  // Get the current character from the prefix.
            // If the child node for this character doesn't exist, return NULL.
            if(curr->children[ch-'a']==NULL){
                return NULL;  // No such prefix exists in the Trie.
            }
            // Move to the child node corresponding to the current character.
            curr=curr->children[ch-'a'];
        }
        
        return curr;  // Return the node corresponding to the prefix.
    }
    
    // Helper function to perform a prefix search and collect all words starting with the given prefix.
    void prefixSearch(vector<string> &s, string &str, trieNode* curr){
        // If the current node marks the end of a word, add the current string to the result.
        if(curr->isEnd){
                s.push_back(str);
        }
        
        // Iterate over all possible children (26 letters) and continue searching.
        for(int i=0;i<26;i++){
            if(curr->children[i]){  // If a child exists for this letter.
                str.push_back(i+'a');  // Append the letter to the string.
                trieNode* temp=curr;  // Save the current node (to revert back later).
                // Recurse into the child node.
                prefixSearch(s, str, curr->children[i]);
                str.pop_back();  // Backtrack by removing the last character.
                curr=temp;  // Revert to the previous node.
            }
        }
        return;  // Return after searching all children.
    }

    // Function to display contacts based on the given prefix string.
    vector<vector<string>> displayContacts(int n, string contact[], string s)
    {
        vector<vector<string>> res;  // Vector to store the result for each prefix.
        
        // Insert all contact strings into the Trie.
        for(int i=0;i<n;i++){
            insert(contact[i]);  // Insert each contact string into the Trie.
        }
        
        string str;  // String to store the current prefix.
        
        // Process each character of the given string s.
        for(int i=0;i<s.size();i++){
            str.push_back(s[i]);  // Add the current character to the prefix.
            
            trieNode* curr=prefix(str);  // Find the node for the current prefix.
            vector<string> v;  // Vector to store words that match the current prefix.
            
            // If no words match the prefix, return "0".
            if(!curr){
                v.push_back("0");
                res.push_back(v);
            }
            else{
                // Perform a prefix search to find all words that start with the current prefix.
                prefixSearch(v, str, curr);
                res.push_back(v);  // Add the result for this prefix to the result vector.
            }
        }
        
        return res;  // Return the final result.
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        string contact[n], s;
        for(int i = 0;i < n;i++)
            cin>>contact[i];
        cin>>s;
        
        Solution ob;
        vector<vector<string>> ans = ob.displayContacts(n, contact, s);
        for(int i = 0;i < ans.size();i++){
            for(auto u: ans[i])
                cout<<u<<" ";
            cout<<"\n";
        }
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends