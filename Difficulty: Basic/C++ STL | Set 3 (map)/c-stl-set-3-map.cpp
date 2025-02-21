//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

void add_value(map<int,int> &m,int x,int y);

int find_value(map<int,int> &m,int x);
void print_contents(map<int,int> &m);
int main() {
	// your code goes here
	int t;
	cin>>t;
	while(t--)
	{
		map<int,int> m;
		int q;
		cin>>q;
		while(q--)
		{
			char c;
			cin>>c;
			if(c=='a')
			{
				int x,y;
				cin>>x>>y;
				add_value(m,x,y);
			}
			if(c=='b')
			{
				int y;
				cin>>y;
				cout<<find_value(m,y)<<" ";
			}
			if(c=='c')
			{
				print_contents(m);
			}
		
		
		
		}
cout<<endl;
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends

/* Adds a value with key x and value y to the map*/
void add_value(map<int, int> &m, int x, int y)
{
    // Insert or update the key-value pair in the map
    m[x] = y;
}

/* Returns the value of the key x if present, else returns -1 */
int find_value(map<int, int> &m, int x)
{
    // Iterator to traverse the map
    map<int, int>::iterator it;
    
    // Check if the key exists in the map using find
    if (m.find(x) == m.end())
        return -1;  // Key not found, return -1
    else
    {
        // If key is found, return its corresponding value
        it = m.find(x);
        return it->second;
    }
}

/* Prints contents of the map i.e. keys and values */
void print_contents(map<int, int> &m)
{
    // If the map is empty, do nothing
    if (m.begin() == m.end())
        return;
    
    // Iterator to loop through the map and print key-value pairs
    map<int, int>::iterator it;
    
    for (it = m.begin(); it != m.end(); it++)
    {
        // Print key and corresponding value
        cout << it->first << " " << it->second << " ";
    }
}
