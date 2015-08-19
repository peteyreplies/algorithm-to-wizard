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

  // Deal with the easy case
  v = v.replace(/\b(A|a)lgorithm/g, function(match, p1, offset, string) {
    // t - 7 = m
    // c - 1 = b
    w = String.fromCharCode(p1.charCodeAt(0) - 4);
    return w + "izard";
  });
    }
  }
	textNode.nodeValue = v;
}


