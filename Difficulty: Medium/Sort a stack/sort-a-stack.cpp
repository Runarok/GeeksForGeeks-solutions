//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

class SortedStack{
public:
	stack<int> s;
	void sort();
};

void printStack(stack<int> s)
{
    while (!s.empty())
    {
        printf("%d ", s.top());
       	s.pop();
    }
    printf("\n");
}

int main()
{
int t;
cin>>t;
while(t--)
{
	SortedStack *ss = new SortedStack();
	int n;
	cin>>n;
	for(int i=0;i<n;i++)
	{
	int k;
	cin>>k;
	ss->s.push(k);
	}
	ss->sort();
	printStack(ss->s);

cout << "~" << "\n";
}
}
// } Driver Code Ends

/* The structure of the class is
class SortedStack{
public:
    stack<int> s;
    void sort();
};
*/

/* Helper function to insert an element into a sorted stack */
void insertInSortedOrder(stack<int> &st, int value) {
    if (st.empty() || st.top() <= value) {
        st.push(value);
        return;
    }
    
    int topElement = st.top();
    st.pop();
    insertInSortedOrder(st, value);
    st.push(topElement);
}

/* Recursive function to sort the stack */
void sortStack(stack<int> &st) {
    if (st.size() <= 1) return;
    
    int topElement = st.top();
    st.pop();
    sortStack(st);
    insertInSortedOrder(st, topElement);
}

/* Function to sort the stack */
void SortedStack::sort() {
    sortStack(s);
}
