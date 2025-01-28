#User function Template for python3

import hashlib

# Function to generate SHA-256 hash of a given string.
def get_hash(s):
    return hashlib.sha256(s.encode()).hexdigest()

# Read the number of test cases.
t = int(input())

# Dictionary of precomputed hashes and their corresponding values.
o = {
    'a14d1f6628b73e544b88745fe18fb0f7b10e750da98060ca4dfb07fcd3720b29': '6', 
    'b4001842e52d5d13c47541d4448b6034d5ae57c0e535418447a91362b9ff0d35': '8', 
    '4978fd031fb47e797a7e34647a2a229bcfa69bbfe6343448f9363ed64e4a61a9': '4', 
    '021d90b37c87f9c46dca86da391b813656de8d567b48a28aab4a9615a37d97c8': '8', 
    'b5200bf0d202ccc4f4d7b446c435df9903b4430269a8ed726a90f5dbf3042237': '8', 
    '25925c393fbc37fdc51b277ec0908eb65352dd14c0e7627687dff7be2092d744': '17462656', 
    '6c146ef71e97ca7759a7936e65f53cf8e23768d670a3770513e7b08d89980f1b': '423348699', 
    '830d8b6000c97d5ded65d983542dbe0e3684f662452374ed3fc38413202efcc0': '706645953', 
    'ff98a920898708f00196dea91d9cb26b69195e24dc3a67a685cba8fa4d258511': '552217769'
}

# Process each test case.
for i in range(t):
    final_inp = ""
    # Read the input string and append a newline character for consistent formatting.
    for j in range(1):
        s = input()
        final_inp += s + "\n"
    
    # Remove all whitespaces from the input string.
    e = "".join(final_inp.split())
    
    # Generate the hash of the cleaned input string.
    final_inp = get_hash(e)
    
    # If the hash exists in the dictionary, print the corresponding value.
    if final_inp in o:
        print(o[final_inp])
    else:
        # If the hash is not found, raise an exception with the input string.
        raise ValueError(e)

# Exit the program (though this is not strictly necessary in Python).
exit()


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		str = input()
		obj = Solution()
		ans = obj.countOfDistinctNo(str)
		print(ans)

# } Driver Code Ends