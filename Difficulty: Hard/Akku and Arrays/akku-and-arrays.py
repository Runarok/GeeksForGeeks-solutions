#User function Template for python3
class Solution:
    # Function to check if the subsequence is strictly increasing, strictly decreasing, or neither.
    def testit(self, seq):
        # If the sequence has 1 or fewer elements, it is neither increasing nor decreasing.
        if len(seq) <= 1:
            return -1
        
        # Initialize the first element and the status of the sequence
        that = seq[0]  # The first element is the starting point.
        status = "="  # Initially, the sequence is considered neutral (neither increasing nor decreasing).
        
        # Iterate through the rest of the sequence
        for it in seq[1:]:
            if it == that:
                pass  # If the element is equal to the previous one, continue checking.
            elif it > that:  # If the current element is greater than the previous one.
                if status == "<":  # If we have previously found a decreasing sequence, return -1 (invalid).
                    return -1
                elif status == "=":  # If the sequence is neutral so far, mark it as increasing.
                    status = ">"
                that = it  # Update 'that' to the current element.
            else:  # it < that (current element is less than the previous one).
                if status == ">":  # If we have previously found an increasing sequence, return -1 (invalid).
                    return -1
                elif status == "=":  # If the sequence is neutral so far, mark it as decreasing.
                    status = "<"
                that = it  # Update 'that' to the current element.
        
        # Return 0 if the sequence is strictly increasing, 1 if strictly decreasing, or -1 if invalid.
        return 0 if status == ">" else 1 if status == "<" else -1

    # Function to solve queries
    def solveQueries(self, nums, Queries):
        result = []  # To store the results of each query.
        
        # Process each query
        for this in Queries:
            if this[0] == 1:  # Update query: Change the value of the element at position this[1].
                nums[this[1] - 1] = this[2]
            else:  # Range query: Check if the subsequence from nums[this[1]-1] to nums[this[2]] is valid.
                value = self.testit(nums[this[1] - 1:this[2]])  # Check the subsequence.
                result.append(value)  # Add the result to the result list.
        
        return result  # Return the final list of results.

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		n = int(input())
		nums=  list(map(int, input().split()))
		q = int(input())
		Queries = []
		for _ in range(q):
			Queries.append(list(map(int, input().split())))
		obj = Solution()
		ans = obj.solveQueries(nums, Queries)
		for _ in ans:
			print(_)

# } Driver Code Ends