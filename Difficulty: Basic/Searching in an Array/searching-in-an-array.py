from typing import List

class Solution:
    def search(self, k: int, arr: List[int]) -> int:
        for i in range(len(arr)):
            if arr[i] == k:
                return i + 1  # Return 1-based index
        return -1  # Return -1 if k is not found




#{ 
 # Driver Code Starts
if __name__ == "__main__":
    t = int(input())  # Read number of test cases
    for _ in range(t):
        k = int(input())  # Read the element to search
        arr = list(map(int, input().split()))  # Read the array elements

        obj = Solution()
        res = obj.search(k, arr)

        print(res)
        print("~")

# } Driver Code Ends