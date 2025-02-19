import { createSecureContext } from "tls";

function getName(node) {
  return node.name;
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(node, collection) {
  let next = node.next;
  return collection[next];
}

function nodeAt(index, node, collection) {
  let currentNode = headNode(node, collection);
  for (let i = 0; i < index; i++) {
    currentNode = next(currentNode, collection);
  }
  return currentNode;
}

function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList;
  } else {
    let node = nodeAt(index - 1, linkedList, collection);
    return node.next;
  }
}

function indexAt(node, collection, linkedList) {
  let currentNode = headNode(linkedList, collection);
  let currentIndex = 0;
  while (currentNode !== node) {
    currentIndex++;
    currentNode = next(currentNode, collection);
  }
  return currentIndex;
}

function insertNodeAt(index, newNodeAddress, linkedList, collection) {
  let previosuNode = nodeAt(index - 1, linkedList, collection);
  let subsequentNode = nodeAt(index, linkedList, collection);
  //   let previousNodeIdx = indexAt(previousNode, collection, linkedList);
  //   let subsequentNodeIdx = indexAt(subsequentNode, collection, linkedList);
  //   let previousNodeAddress = addressAt(previousNode, linkedList, collection);
  let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection);
  previosuNode.next = newNodeAddress;
  let newNode = collection[newNodeAddress];
  newNode.next = subsequentNodeAddress;
}

function deleteNodeAt(index, linkedList, collection) {
  let previosuNode = nodeAt(index - 1, linkedList, collection);
  let currentNode = headNode(linkedList, collection);
  for (let i = 0; i < index; i++) {
    previosuNode = currentNode;
    currentNode = next(currentNode, collection);
  }
  previosuNode.next = currentNode.next;
}
