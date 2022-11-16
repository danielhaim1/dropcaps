/**
 * Accessible Drop Caps
 * @version 1.0.0
 * @link
 * @example https://codepen.io/danielhaim/pen/poLgNrx
 * 
 * @param [node] {object} - The DOM node to apply the drop cap to
 * @retun {object} - The DOM node with the drop cap applied
 * @return {null} - If the text has no first paragraph, or the first letter is not a letter.
 * 
 * https://www.w3.org/WAI/tutorials/page-structure/headings/#dropcaps
 * https://adrianroselli.com/2019/10/accessible-drop-caps.html
 * https://product.voxmedia.com/2019/6/17/18524029/the-ballad-of-drop-caps-and-design-systems
 * https://www.youtube.com/watch?v=nt7p3CuxUzA
 */

const dropcap = (() => {
    const node = document.querySelector("p[data-dropcap]");

    if (node) {
        // add the dropcap class to the paragraph.
        let content = node.textContent; // get the paragraph content.
        content = content.trim(); // remove whitespace from both ends of the string.
        content = content.split(" "); // divide string into an order list of substrings.
        content = content.map((word, index) => {
            // create a new array populated with results.
            // wrap the first word in a span[role="text"].
            if (index === 0) {
                return `<span class="dropcap" role="text">${word}</span>`;
            } else {
                return word;
            }
        });

        node.innerHTML = content.join(" "); // join the substrings together.

        let firstWord = node.querySelector(".dropcap").textContent; // get the first word of the paragraph.
        let firstLetter = firstWord.charAt(0); // get the first letter of the first word.
        let restOfWord = firstWord.slice(1); // get the rest of the letters of the first word.

        console.log(firstLetter, restOfWord);

        // check if the firstLetter is a letter, number, or symbol.
        if (firstLetter.match(/[a-z]/i)) {
            // create an accessible dropcap element
            let dropcapElement = `<span aria-hidden="true"><span class="dropcap-letter dropcap-letter-${firstLetter.toLowerCase()}">${firstLetter}</span>${restOfWord}</span><span class="sr-only">${firstWord}</span>`;

            // replace the first word with the dropcap element.
            node.innerHTML = node.innerHTML.replace(firstWord, dropcapElement);
        }
    } else {
        return null;
    }
})();
