
export function hasCycle(graph) {
    let foundNodes = [];

    // if empty, there are no cycles
    if (graph.length == 0 || graph.length == 1) { 
        return false; 
    } 

    
    // Loop through graph
    for (let i = 0; i < graph.length; i++) {
        let node = graph[i];
        let edges = node.getEdges();

        for (let j = 0; j < edges.length; j++) {
            let childName;

            // Decide which element to push first, if node is empty, find next node
            if (edges[j] == 1 && foundNodes.length == 0) { // Should 
                foundNodes.push(graph[i].getName());
                break;
            }

            // If there's an edge, get child node
            if (edges[j] == 1) { childName = graph[j].getName(); } 
            else { continue; } // Otherwise, skip

            // Check edge to next node, whether that node has already been found
            if (foundNodes.includes(childName)) { return true; } 
            else { foundNodes.push(childName); } // add the edge
        }
    }

    return false;
}
