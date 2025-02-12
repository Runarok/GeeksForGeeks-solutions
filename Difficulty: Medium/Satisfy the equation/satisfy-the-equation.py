from collections import defaultdict

class Solution:
    def satisfyEqn(self, a, n):
        # Create a map to store sum of pairs and their indices
        map = defaultdict(list)
        ans = 0  # Initialize the result variable to store the answer

        # Loop through each pair of elements in the array
        for i in range(len(a)):
            for j in range(i+1, len(a)):
                # Calculate the sum of the current pair
                pair_sum = (a[i] + a[j])
                
                # If the sum is already present in the map
                if pair_sum in map:
                    # Check if the current pair of indices does not overlap with previous ones
                    if map[pair_sum][0] != i and map[pair_sum][1] != j and map[pair_sum][0] != j and map[pair_sum][1] != i:
                        # Create a new list of indices (the first two are from the existing pair, and the last two are the current pair)
                        new_indices = map[pair_sum][:2] + [i, j]
                        
                        # If the answer has not been found yet or the new indices are lexicographically smaller, update the answer
                        if not ans or ans > new_indices:
                            # Clear the existing list for this sum and add the new pair of indices
                            while map[pair_sum]:
                                map[pair_sum].pop()
                            map[pair_sum].extend(new_indices)
                            
                            # Update the answer
                            ans = map[pair_sum]
                else:
                    # If the sum is not present in the map, add the current pair to the map
                    map[pair_sum].extend([i, j])

        # If no valid answer is found, return [-1, -1, -1, -1], else return the answer
        return ([-1, -1, -1, -1]) if not ans else ans
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        N=int(input())
        A=list(map(int,input().split()))
        
        ob = Solution()
        ptr=ob.satisfyEqn(A,N)
        print(*ptr)
        print("~")
# } Driver Code Ends