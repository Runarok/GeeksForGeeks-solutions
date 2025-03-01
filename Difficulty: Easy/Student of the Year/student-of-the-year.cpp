//{ Driver Code Starts
//Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

//User function Template for C++

/*Function to sort students with respect to their marks
* v : vector input with student name and their marks
* N : size of vector
* Your need to implement comparator to sort on the basis of marks.
*/
bool custom(const pair<int,string>& a, const pair<int,string>& b) {
    // Compare based on marks first, then by name alphabetically if marks are equal
    if(a.first != b.first) {
        return a.first > b.first;  // Sort in descending order of marks
    }
    return a.second < b.second;  // Sort alphabetically by name if marks are equal
}

vector<pair<string, int>> sortMarks(vector<pair<string, int>> v, int N) {
    vector<pair<string, int>> ans;
    vector<pair<int, string>> temp;

    // Convert the input vector of pairs (name, marks) to (marks, name)
    for(int i = 0; i < N; i++) {
        temp.push_back({v[i].second, v[i].first});
    }

    // Sort the temporary vector using the custom comparator
    sort(temp.begin(), temp.end(), custom);

    // Convert the sorted vector back to (name, marks)
    for(int i = 0; i < temp.size(); i++) {
        ans.push_back({temp[i].second, temp[i].first});
    }

    return ans;
}



//{ Driver Code Starts.

// Driver code
int main() {
	
	int testcase;
	cin >> testcase;
	
	while(testcase--){
	    int N;
	    cin >> N;
	    
	    // Declaring vector
	    vector<pair<string, int>> v;
	    
	    // Taking input to vector
	    for(int i = 0;i<N;i++){
	        string s;
	        cin >> s;
	        int k;
	        cin >> k;
	        v.push_back(make_pair(s, k));
	    }
	    
	    // Calling function
	    v = sortMarks(v, N);
	    
	    // Printing student name with their marks
	    for(auto it = v.begin(); it!=v.end();it++){
	        cout << it->first << " " << it->second << endl;
	    }
	    
	
cout << "~" << "\n";
}
	
	return 0;
}
// } Driver Code Ends