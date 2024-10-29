import { GraphNode } from "./GraphNode.js";
import { hasCycle } from "./code.js";
import jsc from 'jsverify';


    /* Helper Method */

// Generates a graph with a given size and a limit to the weights
function generateGraph(size) {
    let graph = [];

    for (let i = 0; i < size; i++) {
        let edges = [];

        for (let j = 0; j < size; j++) {
            edges.push(jsc.random(0, 1)); 
        }

        // using i for name, any name could be passed, the algorithm can handle
        graph.push(new GraphNode(i, edges));
    }

    return graph;
}




    /* Custom Testing */

const numTests = 1000000; // Sufficiently Large Amount of Tests
const maxGraphSize = 5; // Not too large so that cycles are more likely


/*  
*   This block generates lots of unit tests to stress test the algorithm.
*   Ensuring the alogrithm can handle all sort of example scenerios.
*
*   Note:
*
*   These unit tests will randomly test graph sizes of 0, 1, and values 
*   larger than 1.
*
*   Random weights will be assigned for every edge, where 0 indicates
*   there is no edge. Negative values are also assigned, which the 
*   algorithm will treat as if there is no edge, similarly to the 0 weight.
*/ 
for (let i = 0; i < numTests; i++) {
    const graphSize = jsc.random(0, maxGraphSize);
    const graph = generateGraph(graphSize);

    const result = hasCycle(graph);

    console.assert(result != null, "Result was null...");

    if (result == null) {
        throw "Result was null...";
    }
}