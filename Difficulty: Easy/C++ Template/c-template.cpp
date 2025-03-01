//{ Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

template <class T>
class minElement
{
    // Private variable to store the initial element
    private:
        T element;

    public:
        // Parameterized constructor to initialize the element
        minElement(T initialElement) {
            element = initialElement;
        }

        // Function to check and print the minimum of stored element and provided element
        void check(T otherElement) {
            if (element < otherElement) {
                cout << element << endl;
            } else {
                cout << otherElement << endl;
            }
        }

        // Overloaded < operator to compare the stored element with another element
        T operator<(const T otherElement) {
            return element < otherElement;
        }
};



//{ Driver Code Starts.

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int c;
        cin>>c;
        if(c==1)
        {
            string a,b;
            cin>>a>>b;
            minElement<string>obj1(a);
            obj1.check(b);
        }
        else if(c==2)
        {
            int a,b;
            cin>>a>>b;
            minElement<int>obj2(a);
            obj2.check(b);
        }
        else
        {
            char a,b;
            cin>>a>>b;
            minElement<char>obj3(a);
            obj3.check(b);
        }
    
cout << "~" << "\n";
}
}


// } Driver Code Ends