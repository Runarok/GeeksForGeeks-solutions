#User function Template for python3

class Solution:
    # Complete the below function
    def search(self, arr, x):
        # Traverse through the array
        for i in range(len(arr)):
            if arr[i] == x:
                return i  # Return the index of the first occurrence
        return -1  # Return -1 if the element is not found


#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math


def main():
    T = int(input())
    while (T > 0):

        A = [int(x) for x in input().strip().split()]

        x = int(input())
        ob = Solution()
        print(ob.search(A, x))
        print('~')
        T -= 1


if __name__ == "__main__":
    main()

# } Driver Code Ends