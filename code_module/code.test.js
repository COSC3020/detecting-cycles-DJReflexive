import { GraphNode } from "./GraphNode.js";
import { hasCycle } from "./code.js";


    /* Example Graphs */

// Empty Graph
let graph1 = []; 

// Graph of 1x1 element
let graph2 = [ new GraphNode("N", [0])]; 

// Graph of 2x2 elements w/ no loop
let graph3 = [ 
    new GraphNode("A", [0, 0]),
    new GraphNode("B", [0, 0])
]; 

// Graph of 2x2 elements w/ loop
let graph4 = [
    new GraphNode("X", [0, 1]),
    new GraphNode("Y", [1, 0])
]; 

// More complex graph (5x5) w/ no loop
let graph5 = [
    new GraphNode("L", [0, 1, 0, 0, 0]),
    new GraphNode("M", [0, 0, 0, 0, 1]),
    new GraphNode("N", [0, 0, 0, 0, 0]),
    new GraphNode("O", [0, 0, 1, 0, 0]),
    new GraphNode("P", [0, 0, 0, 1, 0])
];

// More complex graph (6x6) w/ no loop
let graph6 = [
    new GraphNode("123", [0, 0, 0, 0, 0, 0]),
    new GraphNode("456", [0, 0, 0, 0, 0, 0]),
    new GraphNode("789", [0, 0, 0, 1, 0, 0]),
    new GraphNode("147", [1, 0, 0, 0, 0, 0]),
    new GraphNode("258", [0, 0, 0, 0, 0, 0]),
    new GraphNode("369", [0, 0, 0, 0, 0, 0])
];

// More complex graph (4x4) w/ loop
let graph7 = [
    new GraphNode("1", [0, 0, 0, 0]),
    new GraphNode("2", [0, 0, 1, 0]),
    new GraphNode("3", [0, 0, 0, 1]),
    new GraphNode("4", [0, 1, 0, 0])
];

// More complex graph (8x8) w/ loop
let graph8 = [
    new GraphNode("z", [0, 1, 0, 0, 1, 1, 0, 0]),
    new GraphNode("y", [0, 0, 0, 0, 0, 0, 0, 0]),
    new GraphNode("x", [0, 0, 0, 1, 0, 1, 0, 1]),
    new GraphNode("w", [1, 0, 0, 0, 1, 0, 0, 1]),
    new GraphNode("v", [0, 0, 1, 0, 0, 0, 0, 0]),
    new GraphNode("u", [0, 1, 0, 0, 1, 0, 0, 1]),
    new GraphNode("t", [1, 0, 1, 0, 0, 1, 0, 0]),
    new GraphNode("s", [1, 0, 1, 0, 1, 0, 1, 0]),
];



    /* Custom Testing */

const result1 = hasCycle(graph1); 
const result2 = hasCycle(graph2);
const result3 = hasCycle(graph3);
const result4 = hasCycle(graph4);
const result5 = hasCycle(graph5);
const result6 = hasCycle(graph6);
const result7 = hasCycle(graph7);
const result8 = hasCycle(graph8);

console.assert(result1 == false, "Result1 was true...");
if (result1 == true) {
    throw "Result1 was true, should be false";
}

console.assert(result2 == false, "Result2 was true...");
if (result2 == true) {
    throw "Result2 was true, should be false";
}

console.assert(result3 == false, "Result3 was true...");
if (result3 == true) {
    throw "Result3 was true, should be false";
}

console.assert(result4 == true, "Result4 was false...");
if (result4 == false) {
    throw "Result4 was false, should be true";
}

console.assert(result5 == false, "Result5 was true...");
if (result5 == true) {
    throw "Result5 was true, should be false";
}

console.assert(result6 == false, "Result6 was true...");
if (result6 == true) {
    throw "Result6 was true, should be false";
}

console.assert(result7 == true, "Result7 was false...");
if (result7 == false) {
    throw "Result7 was false, should be true";
}

console.assert(result8 == true, "Result8 was false...");
if (result8 == false) {
    throw "Result8 was false, should be true";
}
