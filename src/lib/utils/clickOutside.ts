/** Dispatch event on click outside of node */
export function clickOutside(node: Node) {

    function handleClick(event: Event) {
        if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
            node.dispatchEvent(
                new CustomEvent('click_outside')
            )
        }
    }

    document.addEventListener('click', handleClick, true);

    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    }
}