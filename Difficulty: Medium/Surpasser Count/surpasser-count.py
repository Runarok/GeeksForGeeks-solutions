#User function Template for python3

class Solution:
    def findSurpasser(self, arr):
        n = len(arr)
        # Step 1: Coordinate compression
        sorted_arr = sorted(arr)
        rank = {v: i + 1 for i, v in enumerate(sorted_arr)}  # Assign rank 1 to the smallest, n to the largest
        
        # Step 2: Initialize BIT and result array
        max_rank = n
        BIT = [0] * (max_rank + 1)
        
        # Function to update BIT
        def update(index, val):
            while index <= max_rank:
                BIT[index] += val
                index += index & -index
        
        # Function to query BIT
        def query(index):
            total = 0
            while index > 0:
                total += BIT[index]
                index -= index & -index
            return total
        
        # Step 3: Traverse from right to left and count surpassers
        result = [0] * n
        for i in range(n - 1, -1, -1):
            # Count how many numbers greater than arr[i] (ranked higher) have been encountered
            result[i] = query(max_rank) - query(rank[arr[i]])
            # Update BIT to include arr[i] in the BIT
            update(rank[arr[i]], 1)
        
        return result


#{ 
 # Driver Code Starts
# Initial Template for Python 3


def main():
    T = int(input())

    while T > 0:
        a = list(map(
            int,
            input().strip().split()))  # Convert input to list of integers
        print(" ".join(map(str, Solution().findSurpasser(a))))
        T -= 1


if __name__ == "__main__":
    main()

# } Driver Code Ends