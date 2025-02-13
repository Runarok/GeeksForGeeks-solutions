class Solution:
    def DivisibleByM(self, arr, k):
        n = len(arr)
        
        # Initialize a bytearray to track modulo values
        modseen = bytearray(k)
        
        # Mark the modulo of the first element
        modseen[arr[0] % k] = 1
        
        # Iterate over the rest of the array
        for i in range(1, n):
            # Keep track of the previous modseen array
            oldmod = modseen
            # Create a new modseen array for the current iteration
            modseen = bytearray(modseen)
            
            # Compute the modulo for the current element
            x = arr[i] % k
            modseen[x] = 1  # Mark the current element's modulo
            
            # Check and propagate possible remainders
            for r in range(k):
                if oldmod[r]:
                    modseen[(x + r) % k] = 1
            
            # If zero modulo is found, we can break early
            if modseen[0]: 
                break
        
        # Return whether it's divisible by k
        return modseen[0]
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    tc = int(input())
    while tc > 0:
        arr = list(map(int, input().strip().split()))
        k = int(input().strip())
        ob = Solution()
        ans = ob.DivisibleByM(arr, k)
        print(ans)
        print("~")
        tc -= 1

# } Driver Code Ends