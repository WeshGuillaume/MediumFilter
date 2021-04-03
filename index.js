const links = document.getElementsByTagName('a')

Array.from(links).forEach(
  async node => {
    if (!node.href.startsWith("https://medium.com/")) {
      return;
    }
    chrome.runtime.sendMessage(node.href, (response) => {
      /**
       * This is a paying article
       */
      if (response === true) {
        node.parentNode.parentNode.style.opacity = "0.2";
        node.parentNode.parentNode.style.pointerEvents = "none";
      }
    });
  }
)
