from typing import List

class Solution:
    def LongestBitonicSequence(self, n: int, nums: List[int]) -> int:
        """
        Function to find the length of the longest bitonic subsequence.

        :param n: Length of the array
        :param nums: List of integers
        :return: Length of the longest bitonic subsequence
        """
        # Initialize two DP arrays to store LIS from the left and right
        dp1 = [1] * n  # Longest Increasing Subsequence (LIS) from the left
        dp2 = [1] * n  # Longest Decreasing Subsequence (LDS) from the right

        # Compute LIS from left to right
        for i in range(n):
            for j in range(i):
                if nums[j] < nums[i] and dp1[j] + 1 > dp1[i]:
                    dp1[i] = 1 + dp1[j]

        # Compute LIS from right to left (LDS)
        for i in range(n - 1, -1, -1):
            for j in range(n - 1, i, -1):
                if nums[j] < nums[i] and dp2[j] + 1 > dp2[i]:
                    dp2[i] = 1 + dp2[j]

        # Find the maximum bitonic sequence length
        max_length = 0
        for i in range(n):
            if dp1[i] != 1 and dp2[i] != 1:  # Ensure it's a valid bitonic sequence
                max_length = max(max_length, dp1[i] + dp2[i] - 1)

        return max_length
#{ 
 # Driver Code Starts
class IntArray:

    def __init__(self) -> None:
        pass

    def Input(self, n):
        arr = [int(i) for i in input().strip().split()]  #array input
        return arr

    def Print(self, arr):
        for i in arr:
            print(i, end=" ")
        print()


if __name__ == "__main__":
    t = int(input())
    for _ in range(t):

        n = int(input())

        nums = IntArray().Input(n)

        obj = Solution()
        res = obj.LongestBitonicSequence(n, nums)

        print(res)
        print("~")

# } Driver Code Ends