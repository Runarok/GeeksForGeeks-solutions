class Solution:
    def sortLastMelements(self, nums, n, m):
        # Step 1: Get the last m elements from the array
        last_m_elements = nums[n:]
        
        # Step 2: Sort the last m elements
        last_m_elements.sort()
        
        # Step 3: Replace the last m elements in the original array with the sorted ones
        nums[n:] = last_m_elements
        
        # The array is modified in-place, no need to return anything 
 # Driver Code Starts
		
if __name__ == '__main__':
    T=int(input())
    for i in range(T):
    	n, m = map(int, input().strip().split())
    	nums = list(map(int, input().strip().split()))
    	obj = Solution()
    	obj.sortLastMelements(nums, n, m)
    	for i in nums:
    		print(i, end = " ")
    	print()
# } Driver Code Ends