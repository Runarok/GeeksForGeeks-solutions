# User function Template for python3
import math

class Solution:

    # Generate all divisors of n (unordered):
    def divisors(self, n):
        if n < 1: return
        yield 1
        if n == 1: return
        yield n
        d = 2
        while d * d < n:
            q, r = divmod(n, d)
            if r == 0:
                yield d
                yield q
            d += 1
        if d * d == n: 
            yield d

    # Find the number of positive integer values k such that:
    #   x % k == y % x for all x, y in arr
    def printEqualModNumbers(self, arr):
        amax = max(arr)
        amin = min(arr)
        if amax == amin: return -1
        r = amax - amin
        for i, x in enumerate(arr):
            d = x - amin
            if d % r != 0:
                r = math.gcd(d, r)
                if r == 1: break

        return sum(1 for d in self.divisors(r))



#{ 
 # Driver Code Starts
#Initial Template for Python 3

t = int(input())
for _ in range(0, t):

    a = list(map(int, input().split()))
    ob = Solution()
    print(ob.printEqualModNumbers(a))

    print("~")

# } Driver Code Ends