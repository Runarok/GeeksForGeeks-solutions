#User function template for Python 3
class Solution:
    def majorityElement(self, arr):
        # Step 1: Find the candidate for majority element using Boyer-Moore Voting Algorithm
        candidate, count = None, 0
        
        for num in arr:
            if count == 0:
                candidate, count = num, 1
            elif num == candidate:
                count += 1
            else:
                count -= 1
        
        # Step 2: Verify if the candidate is the majority element
        if arr.count(candidate) > len(arr) // 2:
            return candidate
        else:
            return -1


#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math

from sys import stdin


def main():
    T = int(input())
    while (T > 0):

        A = [int(x) for x in input().strip().split()]

        obj = Solution()
        print(obj.majorityElement(A))

        T -= 1


if __name__ == "__main__":
    main()

# } Driver Code Ends