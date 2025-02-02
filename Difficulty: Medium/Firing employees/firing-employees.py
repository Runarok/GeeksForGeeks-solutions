# User function Template for python3
from collections import defaultdict

class Solution:
    def firingEmployees(self, arr, n):
        child_dic = defaultdict(list)
        
        # Identify the children of each node
        for i in range(n):
            if arr[i] != 0:
                child_dic[arr[i]].append(i+1)
            else:
                root = i+1  # The root node is the one whose parent is 0
        
        # Initialize count to store the answer
        count = 0
        
        # Start with depth = 1 for the root's children
        depth = 1
        
        # Store nodes at the current depth
        curr_level = child_dic[root]
        
        # Store nodes at the next level
        next_level = []
        
        while curr_level:
            tmp = curr_level.pop()
            
            # Add children of the current node to the next level
            next_level.extend(child_dic[tmp])
            
            # Increase count if the current node + depth is prime
            count += 1 if Solution.checkPrime(tmp + depth) else 0
            
            # If all nodes at current level have been processed
            if not curr_level:
                depth += 1
                curr_level = next_level[:]
                next_level = []
        
        return count
    
    @staticmethod
    def checkPrime(num):
        # Check if a number is prime
        if num <= 1:
            return False
        for d in range(2, int(num**0.5) + 1):
            if num % d == 0:
                return False
        return True


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int(input())
    for _ in range(t):
        n = int(input())
        arr = list(map(int, input().strip().split()))
        ob = Solution()
        print(ob.firingEmployees(arr,n))
        print("~")
# } Driver Code Ends