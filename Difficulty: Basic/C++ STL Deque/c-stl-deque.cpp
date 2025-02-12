//{ Driver Code Starts
//Initial Template for C++
#include<bits/stdc++.h>
using namespace std;
void print(deque <int> &A);
void add_in_back(deque <int> &A,int x);
void remove_from_back(deque <int> &A);
void remove_from_front(deque <int> &A);
void sort(deque <int> &A);
void reverse(deque <int> &A);
int size(deque <int> &A);
void add_in_front(deque <int> &A,int x);
int element_at_front(deque <int> &A);
int element_at_back(deque <int> &A);

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int q;
        cin>>q;
        deque<int> A;
        while(q--)
        {
            int c;
            cin>>c;
            switch(c)
            {
                case 1:{
                    int x;
                    cin>>x;
                    add_in_front(A,x);
                    print(A);
                    break;
                    }
                case 2: {
                    int x;
                    cin>>x;
                    add_in_back(A,x);
                    print(A);
                    break;
                    }
                case 3:{
                    if(A.empty())
                            cout<<"-1"<<endl;
                    else
                    {remove_from_front(A);
                    print(A);}
                    break;
                }
                case 4: {
                    if(A.empty())
                            cout<<"-1"<<endl;
                    else
                     {remove_from_back(A);
                     print(A);}
                     break;
                }
                case 5: {
                    if(A.empty())
                            cout<<"-1"<<endl;
                       else
                     {sort(A);
                     print(A);}
                     break;
                }
                case 6: {
                    if(A.empty())
                            cout<<"-1"<<endl;
                    else
                    {reverse(A);
                    print(A);}
                    break;
                }
                case 7:
                    {
                        if(A.empty())
                            cout<<"-1"<<endl;
                       else
                        print(A);
                        break;
                    }
                case 8:
                    {
                       cout<<size(A)<<endl;
                        break;
                    }
                case 9:
                    {
                        if(A.empty())
                            cout<<"-1"<<endl;
                       else
                       cout<<element_at_front(A)<<endl;
                        break;
                    }
                case 10:
                    {
                        if(A.empty())
                            cout<<"-1"<<endl;
                       else
                        cout<<element_at_back(A)<<endl;
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

/* Prints space-separated elements of the deque A */
void print(deque<int> &A) {
    if (!A.empty()) {
        for (const auto &elem : A) {
            cout << elem << " ";
        }
        cout << endl;
    } else {
        cout << -1 << endl;
    }
}

/* Inserts an element x at the front of the deque A */
void add_in_front(deque<int> &A, int x) {
    A.push_front(x);
}

/* Inserts an element x at the back of the deque A */
void add_in_back(deque<int> &A, int x) {
    A.push_back(x);
}

/* Removes an element from the back of the deque A */
void remove_from_back(deque<int> &A) {
    if (!A.empty()) {
        A.pop_back();
    } else {
        cout << -1;
    }
}

/* Removes an element from the front of the deque A */
void remove_from_front(deque<int> &A) {
    if (!A.empty()) {
        A.pop_front();
    } else {
        cout << -1 << " ";
    }
}

/* Sorts the deque A in ascending order */
void sort(deque<int> &A) {
    std::sort(A.begin(), A.end());
}

/* Reverses the deque A */
void reverse(deque<int> &A) {
    std::reverse(A.begin(), A.end());
}

/* Returns the size of the deque A */
int size(deque<int> &A) {
    return A.size();
}

/* Returns element at the front of the deque */
int element_at_front(deque<int> &A) {
    return A.front();
}

/* Returns element at the back of the deque */
int element_at_back(deque<int> &A) {
    return A.back();
}