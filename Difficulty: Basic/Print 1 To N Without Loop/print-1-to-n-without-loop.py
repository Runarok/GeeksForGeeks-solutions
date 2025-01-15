#User function Template for python3

class Solution:
    def printNos(self, n):
        # Base case: stop recursion if current number is greater than n
        if n == 0:
            return
        # Recursive call: print numbers from 1 to n-1
        self.printNos(n - 1)
        # Print the current number after the recursive call
        print(n, end=" ")

#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math


def main():

    T = int(input())

    while (T > 0):

        N = int(input())

        ob = Solution()

        ob.printNos(N)
        print()
        T -= 1

        print("~")


if __name__ == "__main__":
    main()

# } Driver Code Ends