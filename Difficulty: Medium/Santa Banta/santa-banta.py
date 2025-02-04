from collections import deque

class Solution:
    # Precompute prime numbers up to 1000005 using Sieve of Eratosthenes
    def precompute(self):
        self.primes = []
        n = 1000005
        prime = [True for i in range(n + 1)]
     
        p = 2
        # Implement sieve to mark non-prime numbers
        while (p * p <= n):
            if (prime[p] == True):
                for i in range(p * p, n + 1, p):
                    prime[i] = False
            p += 1
        
        # Collect all prime numbers in the range
        for p in range(2, n + 1):
            if prime[p]:
                self.primes.append(p)
    
    # Function to help Santa find the largest connected component's prime number
    def helpSanta(self, n, m, g):
        # If there are no edges, return -1
        if m == 0:
            return -1
        
        # Initialize visited array and adjacency list for the graph
        visit = [0] * (n + 1)
        adj = [[] for _ in range(n + 1)]
        
        # Build the graph from the given edges
        for i in g:
            adj[i[0]].append(i[1])
            adj[i[1]].append(i[0])
        
        # Helper function to perform BFS and find the connected component
        def fun(start, lis):
            q = deque()
            lis.append(start)
            visit[start] = 1
            q.append(start)
            
            while q:
                u = q.popleft()
                for v in adj[u]:
                    if visit[v] == 0:
                        lis.append(v)
                        q.append(v)
                        visit[v] = 1
            return lis
        
        ans = 0
        # Explore all nodes and find the largest connected component
        for i in range(1, n + 1):
            if visit[i] == 0:
                lis = fun(i, [])
                ans = max(ans, len(lis))
        
        # Return the prime corresponding to the size of the largest connected component
        return self.primes[ans - 1]


#{ 
 # Driver Code Starts
#Initial Template for Python 3

    

ob = Solution()
ob.precompute()
for _ in range(int(input())):
    n, m = map(int, input().split())
    arr = []
    for i in range(m):
        arr.append(list(map(int, input().split())))
    ans = ob.helpSanta(n, m, arr)
    print(ans)
    print("~")
# } Driver Code Ends