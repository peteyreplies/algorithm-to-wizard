walk(document.body);

function walk(node) 
{
  // I stole this function from here:
  // http://is.gd/mwZp7E
  
  var child, next;

  switch ( node.nodeType )  
  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child ) 
      {
        // Text in element nodes
        if (node.nodeType === 1 && node.textContent === child.textContent)
          handleTag(node);
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
      break;
  }
}


function handleText(textNode) {
  var v = textNode.nodeValue;

  // fix 'an', althouhg it doesn't work for certain bolded/italicized wizards 
  v = v.replace(/\b(A|a)n\s(A|a)lgorithm/g, function(match, p1, offset, string) {
    a = String.fromCharCode(p1.charCodeAt(0));
    w = String.fromCharCode(p1.charCodeAt(0) + 22);
    return a + " wizard";
  });

  // Deal with the easy case
  v = v.replace(/\b(A|a)lgorithm/g, function(match, p1, offset, string) {
    w = String.fromCharCode(p1.charCodeAt(0) + 22);
    return w + "izard";
  });

  textNode.nodeValue = v;
}

function handleTag(elementNode) {
  p = elementNode.previousSibling;
  
  if (p && elementNode.textContent.match(/\b(A|a)lgorithm/g)) {
    v = p.nodeValue;

    // If previous node ends with 'an', replace with 'a'
    v = v.replace(/\b(A|a)n $/g, function(match, p1, offset, string) {
      a = String.fromCharCode(p1.charCodeAt(0));
      return a + " ";
    });

    p.nodeValue = v;
  }
}
