class Solution:
    def recreationalSpot(self, a, n):
        # If the list has fewer than 3 elements, a recreational spot can't exist
        if n < 3:
            return 0
        
        # Initialize 'ma' as the second element and 'mi' as the first element
        # These will track the maximum and minimum values we've seen so far
        ma, mi = a[1], a[0]
        
        # Iterate through the array starting from the third element (index 2)
        for i in range(2, n):
            # Check if current element a[i] is a potential recreational spot
            # It must be greater than the minimum and less than the maximum seen so far
            if a[i] < ma and a[i] > mi:
                return True
            
            # Update 'ma' to be the larger of the current element or the current maximum
            ma = max(a[i], ma)
            
            # If the previous element is smaller than the current 'mi' (min value),
            # update 'mi' to the previous element, unless it's the maximum
            if mi > a[i-1] and a[i-1] != ma:
                mi = a[i-1]
        
        # If no recreational spot was found, return False
        return False

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    tcs=int(input())
    for _ in range(tcs):
        n=int(input())
        arr=[int(x) for x in input().split()]
        ob = Solution()
        if ob.recreationalSpot(arr,n):
        	print("True")
        else:
        	print("False")




        print("~")
# } Driver Code Ends