class Solution:
    def sortArray(self, arr, n, A, B, C):
        # Modify each element of the array according to the formula
        for i in range(len(arr)):
            arr[i] = A * arr[i] * arr[i] + B * arr[i] + C
        
        # Sort the array in ascending order
        arr.sort()
        
        # Return the sorted array
        return arr

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		a, b, c = input().split()
		a = int(a)
		b = int(b)
		c = int(c)
		n = int(input())
		arr = list(map(int, input().split()))
		ob = Solution()
		ans = ob.sortArray(arr, n, a, b, c)
		for each in ans:
		    print(each,end=" ")
		print()
# } Driver Code Ends