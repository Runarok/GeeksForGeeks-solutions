//{ Driver Code Starts
//Initial Template for C++
#include<bits/stdc++.h>
using namespace std;
void addElement(priority_queue<int> &A,int x);
void remove_Element(priority_queue<int> &A);
int getSize(priority_queue<int> &A);
int getElement_at_top(priority_queue<int> &A);
void print(priority_queue<int> &A);

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int q;
        cin>>q;
        priority_queue<int> A;
        while(q--)
        {
            int c;
            cin>>c;
            switch(c)
            {
            case 1:{
                int x;
                cin>>x;
                addElement(A,x);
                print(A);
                break;
            }
            case 2:
                {
                    remove_Element(A);
                    break;
                }
            case 3:
                {
                    cout<<getElement_at_top(A)<<endl;
                    break;
                }
            case 4:
                {
                    cout<<getSize(A)<<endl;
                    break;
                }
            case 5:
                {
                    print(A);
                    break;
                }
            default: return 0;
            }
        }
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends

// User function Template for C++

// Add an element to the priority queue
void addElement(priority_queue<int> &A, int x)
{
    // Push the element x into the priority queue A
    A.push(x);
}

// Remove the top element from the priority queue
void remove_Element(priority_queue<int> &A)
{
    // If the priority queue is not empty
    if(A.size() > 0)
    {
        // Output the top element and remove it from the priority queue
        cout << A.top() << "\n";
        A.pop();
    }
    else
    {
        // If the priority queue is empty, print -1
        cout << -1 << "\n";
    }
}

// Return the top element of the priority queue
int getElement_at_top(priority_queue<int> &A)
{
    // If the priority queue is empty, return -1
    if(A.size() == 0)
    {
        return -1;
    }
    else
    {
        // Return the top element
        return A.top();
    }
}

// Return the size of the priority queue
int getSize(priority_queue<int> &A)
{
    // If the priority queue is empty, return -1
    if(A.size() == 0)
    {
        return -1;
    }
    else
    {
        // Return the size of the priority queue
        return A.size();
    }
}

// Print all elements in the priority queue
void print(priority_queue<int> &A)
{
    // If the priority queue is empty, print -1 and return
    if(A.size() == 0)
    {
        cout << -1 << "\n";
        return;
    }

    // Create a copy of the priority queue to print the elements
    priority_queue<int> q = A;
    
    // Print elements from the priority queue
    while(!q.empty())
    {
        cout << q.top() << " ";
        q.pop();
    }
    
    // Print a newline at the end
    cout << "\n";
}
