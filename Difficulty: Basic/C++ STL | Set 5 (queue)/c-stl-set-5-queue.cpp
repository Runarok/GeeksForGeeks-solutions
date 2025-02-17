//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

void push(queue<int> &q,int x);

int pop(queue<int> &q);
int getSize(queue<int> &q);


int getBack(queue<int> &q);

int getFront(queue<int> &q);
int main() {
	// your code goes here
	int t;
	cin>>t;
	while(t--)
	{
		queue<int> s;
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
				cout<<getFront(s)<<" ";
			}
			if(c=='e')
			{
				cout<<getBack(s)<<" ";
			}
		
		
		
		}
cout<<endl;
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends

/*inserts an element x at 
the back of the queue q */
void push(queue<int> &q, int x)
{
    // Insert element at the back of the queue
    q.push(x);
}

/*pop out the front element 
from the queue q and returns it */
int pop(queue<int> &q)
{
   // Check if the queue is empty before popping
   if(q.empty())
   {
       return -1;  // Return -1 if the queue is empty
   }
   // Get the front element and pop it
   int n = q.front();
   q.pop();
   return n;  // Return the popped element
}

/*returns the size of the queue q */
int getSize(queue<int> &q)
{
    // Return the size of the queue
    return q.size();
}

/*returns the last element of the queue */
int getBack(queue<int> &q)
{
    // Variable to store the last element
    int last = -1;
    // Pop all elements to get the last one
    while(!q.empty())
    {
        last = q.front();
        q.pop();
    }
    return last;  // Return the last element
}

/*returns the first element of the queue */
int getFront(queue<int> &q)
{
    // If the queue is empty, return -1
    if(q.empty())
        return -1;
    // Return the front element of the queue
    return q.front();
}
