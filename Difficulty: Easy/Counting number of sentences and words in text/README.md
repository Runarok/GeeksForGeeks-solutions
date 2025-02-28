<h2><a href="https://www.geeksforgeeks.org/problems/counting-number-of-sentences-and-words-in-text3226/1?page=2&category=Strings&status=unsolved,attempted&sortBy=accuracy">Counting number of sentences and words in text</a></h2><h3>Difficulty Level : Difficulty: Easy</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given&nbsp;a&nbsp;text, <strong>text</strong>.&nbsp;The task is to count the number of sentences and words in the text.&nbsp;</span><br>
<span style="font-size:18px"><strong>Definition of a sentence :-</strong>&nbsp;Sentences are defined as contiguous space-separated&nbsp;strings of characters ending with a&nbsp;sentence punctuation (' <strong>.</strong> ',&nbsp; ' <strong>!</strong> ' or ' <strong>?</strong> ') or the last contiguous set of space-separated&nbsp;strings, even if they don't end with a punctuation mark.</span><br>
<span style="font-size:18px"><strong>Definition of a word :- </strong>Words&nbsp;are defined as a&nbsp;string&nbsp;of alphabetic characters&nbsp;<em>i.e. </em>any upper or lower case characters a-z or A-Z.</span></p>

<p><strong><span style="font-size:18px">Example 1:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> text = "Sentences"
<strong>Output:</strong> 1 1
<strong>Explaination:</strong> There is only one word and 
sentence in the given text.</span></pre>

<p><strong><span style="font-size:18px">Example 2:</span></strong></p>

<pre><span style="font-size:18px"><strong>Input:</strong> text = "many??? Sentences are"
<strong>Output:</strong> 2 3
<strong>Explaination:</strong> There are two sentences and 
three words.</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You do not need to read input or print anything. Your task is to complete the function <strong>sentenceWord()</strong> which takes text as input parameters and returns a list containing number of sentences and words respectively.</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(|text|)<br>
<strong>Expected Auxiliary Space:</strong> O(1)</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 ≤ |text| ≤ 250&nbsp;</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;