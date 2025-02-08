//{ Driver Code Starts
//Initial template for C++

#include<bits/stdc++.h>
using namespace std;
typedef pair<int, int> PII;

int getMid(int s, int e) {  return s + (e -s)/2;  }

void constructSTUtil(int *arr, int ss, int se, PII *st, int si)
{
    if (ss == se)
    {
        st[si].first = st[si].second = arr[ss];
        return;
    }
    int mid = getMid(ss, se);
    constructSTUtil(arr, ss, mid, st, si*2+1);
    constructSTUtil(arr, mid+1, se, st, si*2+2);
    
    st[si].first = min(st[si*2+1].first, st[si*2+2].first);
    st[si].second = max(st[si*2+1].second, st[si*2+2].second);
    
    return;
}

PII *constructST(int *arr, int n)
{
    int x = (int)(ceil(log2(n)));
    int max_size = 2*(int)pow(2, x) - 1;
    PII *st = new PII[max_size];
    constructSTUtil(arr, 0, n-1, st, 0);
    return st;
}

void updateValue(int *, PII *, int, int, int);
PII getMinMax(PII *, int *, int, int, int);


// } Driver Code Ends

// User function template for C++

// arr : Given input array
// st  : Segment tree storing min and max values
// n   : Size of the array
// qs, qe : Range [qs, qe] to find the minimum and maximum values
// PII : Pair representing min and max values
// index : Index to be updated with a new value

typedef pair<int, int> PII;

// Recursive function to get the minimum and maximum values in a given range
PII getMiniMaxi(PII *segmentTree, int *arr, int n, int queryStart, int queryEnd, 
                int segmentStart, int segmentEnd, int segmentIndex, PII result) {
    
    // If the current segment is completely outside the query range, return default values
    if (segmentEnd < queryStart || segmentStart > queryEnd) {
        result.first = INT_MAX;
        result.second = INT_MIN;
        return result;
    }

    // If the current segment is completely inside the query range, return its stored values
    if (queryStart <= segmentStart && queryEnd >= segmentEnd)
        return segmentTree[segmentIndex];

    // Otherwise, split the segment into two halves
    int mid = (segmentStart + segmentEnd) / 2;

    // Recursively compute min and max from left and right subtrees
    PII leftResult = getMiniMaxi(segmentTree, arr, n, queryStart, queryEnd, segmentStart, mid, 2 * segmentIndex + 1, result);
    PII rightResult = getMiniMaxi(segmentTree, arr, n, queryStart, queryEnd, mid + 1, segmentEnd, 2 * segmentIndex + 2, result);

    // Compute the overall min and max values
    result.first = min(leftResult.first, rightResult.first);
    result.second = max(leftResult.second, rightResult.second);

    return result;
}

// Function to return the minimum and maximum of elements in the range [qs, qe]
PII getMinMax(PII *segmentTree, int *arr, int n, int queryStart, int queryEnd) {
    int segmentStart = 0, segmentEnd = n - 1, segmentIndex = 0;
    PII result;
    result.first = INT_MAX;
    result.second = INT_MIN;

    return getMiniMaxi(segmentTree, arr, n, queryStart, queryEnd, segmentStart, segmentEnd, segmentIndex, result);
}

// Recursive function to update the segment tree with a new value at the given index
void updateSegmentTree(int *arr, PII *segmentTree, int n, int index, int newValue, 
                       int segmentStart, int segmentEnd, int segmentIndex) {

    // If the index to update is outside the current segment, return
    if (index < segmentStart || index > segmentEnd)
        return;

    // If we reach the exact leaf node corresponding to the index, update it
    if (segmentStart == segmentEnd) {
        segmentTree[segmentIndex].first = newValue;
        segmentTree[segmentIndex].second = newValue;
        return;
    }

    // Otherwise, split into left and right halves and update the corresponding subtree
    int mid = (segmentStart + segmentEnd) / 2;

    if (segmentStart < segmentEnd) {
        updateSegmentTree(arr, segmentTree, n, index, newValue, segmentStart, mid, 2 * segmentIndex + 1);
        updateSegmentTree(arr, segmentTree, n, index, newValue, mid + 1, segmentEnd, 2 * segmentIndex + 2);
    }

    // Update the current node based on the updated children
    segmentTree[segmentIndex].first = min(segmentTree[2 * segmentIndex + 1].first, segmentTree[2 * segmentIndex + 2].first);
    segmentTree[segmentIndex].second = max(segmentTree[2 * segmentIndex + 1].second, segmentTree[2 * segmentIndex + 2].second);
}

// Function to update a value at a specific index in the array and segment tree
void updateValue(int *arr, PII *segmentTree, int n, int index, int newValue) {
    int segmentStart = 0, segmentEnd = n - 1, segmentIndex = 0;

    // Update the array with the new value
    arr[index] = newValue;

    // Recursively update the segment tree
    updateSegmentTree(arr, segmentTree, n, index, newValue, segmentStart, segmentEnd, segmentIndex);
}


//{ Driver Code Starts.

int main(){
	int t;
	cin>>t;
	while(t--){
		int num, query;
		cin>>num>>query;
		int arr[num];
		for(int i=0;i<num;i++)
			cin>>arr[i];
		
		PII *st = constructST(arr, num);
		int L, R, index , val;
		char type;
		while(query--){
		    cin.ignore(INT_MAX, '\n');
		    cin>>type;
		    if(type == 'G'){
		        cin>>L>>R;
		        PII ans = getMinMax(st, arr, num, L, R);
		        cout<<ans.first<<" "<<ans.second<<endl;
		    }
		    else{
		        cin>>index>>val;
		        updateValue(arr, st, num, index, val);
		    }
		    
		}	
	
cout << "~" << "\n";
}
	return 0;
}

// } Driver Code Ends