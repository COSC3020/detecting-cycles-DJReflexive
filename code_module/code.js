
export function hasCycle(graph) {
    let foundNodes = [];

    // if empty, there are no cycles
    if (graph.length == 0 || graph.length == 1) { return false; } 

    // Make every node be the starting node
    for (let i = 0; i < graph.length; i++) {
        foundNodes.push(graph[i]); // Add starting node
            
        if (findCycle(graph, foundNodes)) { // Recursively go down valid paths
            return true; // Found Cycle
        } else {
            foundNodes.pop(); // Remove starting node
            continue; // Didn't find cycle, try next node
        }
    }

    return false; // No cycles were found
}

// Recursively goes down paths until it finds a cycle
function findCycle(graph, foundNodes) {
    let currentNode = foundNodes[foundNodes.length-1];
    let edges = currentNode.getEdges();

    // Loops through edges, recursively traversing through each valid path
    for (let i = 0; i < edges.length; i++) {
        let childNode;

        // If there's an edge, get child node
        if (edges[i] == 1) { childNode = graph[i]; } 
        else { continue; } // Otherwise, skip to next edge

        // If there is a repeating node, a cycle is found
        if (foundNodes.includes(childNode)) { return true; }
        else { // Otherwise recursively go down next path
            foundNodes.push(childNode);

            if (findCycle(graph, foundNodes)) { return true; }

            foundNodes.pop(); // Backtrack
        }
    }

    return false; // Cycle was not found
}
