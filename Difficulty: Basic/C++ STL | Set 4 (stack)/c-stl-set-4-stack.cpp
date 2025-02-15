//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

void push(stack<int> &s,int x);
int pop(stack<int> &s);

int getSize(stack<int> &s);

int getTop(stack<int> &s);
int main() {
	// your code goes here
	int t;
	cin>>t;
	while(t--)
	{
		stack<int> s;
		int q;
		cin>>q;
		while(q--)
		{
			char c;
			cin>>c;
			if(c=='a')
			{
				int x;
				cin>>x;
				push(s,x);
			}
			if(c=='b')
			{
				cout<<pop(s)<<" ";
			}
			if(c=='c')
			{
				cout<<getSize(s)<<" ";
			}
			if(c=='d')
			{
				cout<<getTop(s)<<" ";
			}
		
		
		
		}
cout<<endl;
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends

/* You are required to complete the below methods */

/* Function to push an element x into the stack s */
void push(stack<int> &s, int x)
{
    // Pushing the element onto the stack
    s.push(x);
}

/* Function to pop the top element of the stack and return it */
int pop(stack<int> &s)
{
    // Checking if the stack is not empty before popping
    if (!s.empty())
    {
        int topElement = s.top(); // Storing the top element
        s.pop(); // Removing the top element
        return topElement; // Returning the popped element
    }
    else
    {
        return -1; // Returning -1 if stack is empty
    }
}

/* Function to return the size of the stack */
int getSize(stack<int> &s)
{
    // Returning the current size of the stack
    return s.size();
}

/* Function to return the top element of the stack */
int getTop(stack<int> &s)
{
    // Checking if the stack is not empty before accessing the top element
    if (!s.empty())
    {
        return s.top(); // Returning the top element of the stack
    }
    else
    {
        return -1; // Returning -1 if stack is empty
    }
}
