class Solution:
    def DistinctSum(self, nums):
        """
        Function to find all distinct subset sums of the given list.
        :param nums: List of integers
        :return: Sorted list of distinct subset sums
        """
        memo = set()  # Memoization to store visited (index, sum) pairs
        results = set()  # Store unique sums
        
        def findSums(index, currentSum):
            # Base case: If index exceeds the array length, add sum to result
            if index == len(nums):
                results.add(currentSum)
                return
            
            # Check if this state was already processed
            if (index, currentSum) in memo:
                return
            memo.add((index, currentSum))
            
            # Include the current element
            findSums(index + 1, currentSum + nums[index])

            # Exclude the current element
            findSums(index + 1, currentSum)
        
        # Start recursion from index 0 with sum 0
        findSums(0, 0)
        
        return sorted(results)  # Return sorted list of distinct sums
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		n = int(input())
		nums = list(map(int, input().split()))
		obj = Solution()
		ans = obj.DistinctSum(nums)
		for _ in ans:
		    print(_, end = " ")
		print()

# } Driver Code Ends