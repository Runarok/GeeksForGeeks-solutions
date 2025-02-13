# User function Template for python3

def countPalinInRange(n, s, q1, q2):
    # Ensure q1 is less than or equal to q2
    if q1 > q2:
         q1, q2 = q2, q1
        
    start = q1  # Start index, no need to subtract 1 since q1 is already 0-based
    end = q2 + 1  # End index (q2 is included, so we take end as q2 + 1 for slicing)
    
    # Extract the relevant substring from the main string
    substring = s[start:end]
    
    # Variable to count palindromic substrings
    palindrome_count = 0
    
    # Helper function to expand around the center
    def expand(left, right):
        nonlocal palindrome_count
        while left >= 0 and right < len(substring) and substring[left] == substring[right]:
            palindrome_count += 1  # Increment the count for each palindrome
            left -= 1  # Expand to the left
            right += 1  # Expand to the right
    
    # Loop through each character in the substring
    for i in range(len(substring)):
        # Odd-length palindromes (centered on a single character)
        expand(i, i)
        # Even-length palindromes (centered between two characters)
        expand(i, i + 1)
    
    # Return the total count of palindromic substrings
    return palindrome_count
#{ 
 # Driver Code Starts
#Initial Template for Python 3

t = int (input ())
for tc in range (t):
    n = int (input ())
    s = input ()
    q1, q2 = list(map(int, input().split()))
    print (countPalinInRange (n, s, q1, q2))
    
    print("~")
# Contributed By: Pranay Bansal

# } Driver Code Ends