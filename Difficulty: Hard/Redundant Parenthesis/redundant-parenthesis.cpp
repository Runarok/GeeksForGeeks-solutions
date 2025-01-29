//{ Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

class Solution {
public: 
    string removeBrackets(string a) {
        stack<int> s, op; // Stack for brackets and operators
        int n = a.size();
        vector<int> del(n, 0); // Marks characters to be deleted
        
        for (int i = 0; i < n; i++) {
            char c = a[i];
            if (isalpha(c)) continue; // Skip alphabets
            
            if (c == ')') { // Closing bracket handling
                bool addSub = false, mulDiv = false;
                if (a[s.top()] == '(') { // Directly removable brackets
                    del[i] = 1;
                    del[s.top()] = 1;
                    s.pop();
                } else {
                    while (a[s.top()] != '(') { // Process operators inside brackets
                        char d = a[s.top()];
                        s.pop();
                        op.pop();
                        (d == '*' || d == '/') ? mulDiv = true : addSub = true;
                    }
                    
                    int ind = s.top(); // Opening bracket index
                    s.pop();
                    
                    if (op.empty()) { // If no surrounding operator, remove brackets
                        del[i] = 1;
                        del[ind] = 1;
                        continue;
                    }
                    
                    char d = a[op.top()];
                    if (d == '+' || ((d == '*' || d == '-') && !addSub)) {
                        del[i] = 1;
                        del[ind] = 1;
                    }
                }
            } 
            else if (c == '(') s.push(i); // Store index of opening bracket
            else { 
                s.push(i); // Store index of operator
                op.push(i);
            }
        }
        
        string ans = "";
        for (int k = 0; k < n; k++) if (!del[k]) ans.push_back(a[k]); // Build final string
        return ans;
    }
};


//{ Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        string Exp;
        cin >> Exp;
        
        Solution ob;
        cout << ob.removeBrackets(Exp) << endl;
    
cout << "~" << "\n";
}
    return 0; 
} 

// } Driver Code Ends