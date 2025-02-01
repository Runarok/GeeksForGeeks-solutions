//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
/*
The structure of the class is as follows
class _stack{
stack<int> s;
int minEle;
public :
    int getMin();
    int pop();
    void push(int);
};
*/

class Solution{
    int minEle;  // Variable to store the minimum element
    stack<int> s;  // Stack to store elements

public:

    /* Returns the minimum element from the stack */
    int getMin(){
        if(s.empty())  // If the stack is empty, return -1
            return -1;
        else
            return s.top() % 101;  // Extract the minimum element (encoded in the stack)
    }

    /* Pops the top element from the stack */
    int pop(){
        if(s.empty())  // If the stack is empty, return -1
            return -1;
        int element = s.top() / 101;  // Retrieve the actual element by decoding it
        s.pop();  // Remove the element from the stack
        return element;  // Return the popped element
    }

    /* Pushes element 'x' into the stack */
    void push(int x){
        if(s.empty()){
            s.push(x * 101 + x);  // Encode the element by combining value and itself as min value
        }
        else{
            int currentMin = s.top() % 101;  // Get the current minimum element from the stack
            int newMin = min(currentMin, x);  // Determine the new minimum
            s.push(x * 101 + newMin);  // Push the encoded value with the new minimum
        }
    }
};


//{ Driver Code Starts.

int main()
 {
    long long t;

    cin>>t;
    while(t--)
    {
        int q;
        cin>>q;
        Solution ob;
        while(q--){
           int qt;
           cin>>qt;
           if(qt==1)
           {
              //push
              int att;
              cin>>att;
              ob.push(att);
           }
           else if(qt==2)
           {
              //pop
              cout<<ob.pop()<<" ";
           }
           else if(qt==3)
           {
              //getMin
              cout<<ob.getMin()<<" ";
           }
       }
       cout<<endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends