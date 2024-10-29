# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

# Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.


## My Runtime Analysis

When my hasCycle() algorithm runs, it first checks if the length of the graph is 0 or 1, which if it is, the algorithm runs in constant time, because graphs of those lengths don't have any cycles.

If the length is greater than 1, it reaches a nested for loop that loops through all nodes in the graph. Since every node is visited, this makes the run time of the nested for loop $\Theta(|V|^2)$. Since there are no other loop structures or function calls to go through, this is also the final complexity of the entire algorithm, $\Theta(|V|^2)$. This also happens to be the worst case scenerio since every node is checked - though if we wanted to be more specific, while asymtotically it will not change, if there is a graph with a spanning tree that connects all nodes without creating a loop, the algorithm will run just a little longer since there are more constant time operations that occur.


# Sources

- None

# Plagiarism Acknowledgement

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.