#User function Template for python3

from collections import Counter

class alphanumeric:
    def __init__(self, name, count):
        self.name = name
        self.count = count

class Solution:
    def sortedStrings(self, N, A):
        # Dictionary to store frequency count of each string
        frequency_map = {}

        # Counting occurrences of each string in the list
        for i in range(N):
            if A[i] not in frequency_map:
                frequency_map[A[i]] = 1
            else:
                frequency_map[A[i]] += 1

        # Returning list of alphanumeric objects sorted by string name
        return (alphanumeric(name, frequency_map[name]) for name in sorted(frequency_map.keys()))

#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math
        
if __name__=='__main__':
    t=int(input())
    for _ in range(t):
        N=int(input())
        a=[]
        for i in range(N):
            x=input()
            a.append(x)
        ob=Solution()
        ans=ob.sortedStrings(N,a)
        for i in ans:
            print(i.name,end=" ")
            print(i.count)
        print("~")
# } Driver Code Ends