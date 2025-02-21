//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;
void print(list<int> &A);
void add_to_list(list<int> &A,int x);
void remove_from_back(list<int> &A);
void remove_from_front(list<int> &A);
void sort_list(list<int> &A);
void reverse_list(list<int> &A);
int size_of_list(list<int> &A);
void add_from_front(list<int> &A,int x);


int main() {
	// your code goes here
	int t;
	char d;
	cin>>t;
	while(t--)
	{
		list<int> A;
		int q;
		cin>>q;
		while(q--)
		{
			int c;
			cin>>c;
			if(c==1)
			{
				int x;
				cin>>x;
				add_to_list(A,x);
				print(A);
			}
			else if(c==2)
			{
			     if(A.empty())
                   cout<<"-1"<<endl;
				else
                {sort_list(A);
				    print(A);
                }
			}
			else if(c==3)
			{
			    
			     if(A.empty())
                   cout<<"-1"<<endl;
                   else
				{reverse_list(A);
				print(A);
			}
			}
			else if(c==4)
			{
				cout<<size_of_list(A)<<endl;
			}
			else if(c==5)
			{
				print(A);

			}
			else if(c==6)
			{
			    
			     if(A.empty())
                   cout<<"-1"<<endl;
				else
                {remove_from_back(A);
				print(A);
			}}
			else if(c==7)
            {
                
			     if(A.empty())
                   cout<<"-1"<<endl;
                else
                {remove_from_front(A);
                print(A);
            }}
            else if(c==8)
            {
                int x;
                cin>>x;
                add_from_front(A,x);
                print(A);
            }

		}
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends


//User function Template for C++
/*You are required to complete below methods*/
// Function to print the elements of the list
void print(list<int> &A)
{
    // If the list is empty, print "-1"
    if (A.empty()) {
        cout << "-1" << endl;
    } else {
        // Iterate through the list and print each element
        list<int>::iterator it;
        for (it = A.begin(); it != A.end(); it++) {
            cout << *it << " ";
        }
        cout << endl;
    }
}

// Function to remove an element from the back of the list
void remove_from_back(list<int> &A)
{
    // Remove the last element from the list
    A.pop_back();
    // print(A);  // Uncomment to print list after removing element
}

// Function to remove an element from the front of the list
void remove_from_front(list<int> &A)
{
    // Remove the first element from the list
    A.pop_front();
    // print(A);  // Uncomment to print list after removing element
}

// Function to add an element to the back of the list
void add_to_list(list<int> &A, int x)
{
    // Add element to the back of the list
    A.push_back(x);
    // print(A);  // Uncomment to print list after adding element
}

// Function to sort the elements of the list in ascending order
void sort_list(list<int> &A)
{
    // Sort the list in ascending order
    A.sort();
}

// Function to reverse the order of elements in the list
void reverse_list(list<int> &A)
{
    // Reverse the list
    A.reverse();
}

// Function to get the size of the list
int size_of_list(list<int> &A)
{
    // Return the size of the list
    return A.size();
    // print(A);  // Uncomment to print list after getting size
}

// Function to add an element to the front of the list
void add_from_front(list<int> &A, int x)
{
    // Add element to the front of the list
    A.push_front(x);
}





