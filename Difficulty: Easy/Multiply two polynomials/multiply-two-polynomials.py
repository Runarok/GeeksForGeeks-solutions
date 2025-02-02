class Solution:
    def polyMultiply(self, poly1, poly2, M, N):
        # Initialize a list to store the result of polynomial multiplication
        result = [0] * (M + N - 1)

        # Loop through each coefficient of the first polynomial
        for i in range(M):
            # Loop through each coefficient of the second polynomial
            for j in range(N):
                # Multiply and add the product to the appropriate position in the result list
                result[i + j] += poly1[i] * poly2[j]

        # Return the result of polynomial multiplication
        return result

#{ 
 # Driver Code Starts
#Initial Template for Python 3

#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range (t):
        M,N = input().split()
        M=int(M)
        N=int(N)
        Arr1 = input().split()
        for itr in range(M):
            Arr1[itr] = int(Arr1[itr])
        
        Arr2 = input().split()
        for itr in range(N):
            Arr2[itr] = int(Arr2[itr])
        
        ob = Solution()
        ans = ob.polyMultiply(Arr1,Arr2,M,N)
        for i in range(len(ans)):
        	print(ans[i], end = " ")
        print()
# } Driver Code Ends