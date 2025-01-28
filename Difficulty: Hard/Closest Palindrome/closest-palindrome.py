
class Solution:
    def closestPalindrome(self, num):
        def is_palindrome(x):
            return str(x) == str(x)[::-1]
        
        def create_palindrome(s):
            n = len(s)
            half = s[:(n + 1) // 2]
            if n % 2 == 0:
                return int(half + half[::-1])
            else:
                return int(half + half[-2::-1])
        
        num_str = str(num)
        n = len(num_str)
        
        # Edge cases for single digit numbers
        if n == 1:
            return num
        
        # Generate the closest palindrome candidates
        candidates = set()
        candidates.add(create_palindrome(num_str))
        
        # Create smaller and larger candidates
        prefix = int(num_str[:(n + 1) // 2])
        for diff in [-1, 0, 1]:
            new_prefix = str(prefix + diff)
            candidates.add(create_palindrome(new_prefix + num_str[(n + 1) // 2:]))
        
        # Add edge cases for all 9's and 10...01
        candidates.add(10**n + 1)
        candidates.add(10**(n-1) - 1)
        
        # Remove the original number if it's a palindrome
        if is_palindrome(num):
            return num
        
        # Find the closest palindrome
        closest = min(candidates, key=lambda x: (abs(x - num), x))
        
        return closest

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        num = int(input())
        obj = Solution()
        ans = obj.closestPalindrome(num)
        print(ans)
        print("~")

# } Driver Code Ends