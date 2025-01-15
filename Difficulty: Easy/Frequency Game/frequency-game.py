from collections import Counter

def LargButMinFreq(arr, n):
    # Step 1: Count the frequency of each element using Counter
    freq = Counter(arr)
    
    # Step 2: Find the minimum frequency
    min_freq = min(freq.values())
    
    # Step 3: Find the largest element with the minimum frequency
    largest = -1
    for key, value in freq.items():
        if value == min_freq:
            largest = max(largest, key)
    
    return largest


#{ 
 # Driver Code Starts
#Initial Template for Python 3

t = int(input())
#Iterating over test cases
for _ in range(t):
    n = int(input())
    arr = [int(x) for x in input().split()]
    print(LargButMinFreq(arr, n))
    print("~")
# } Driver Code Ends