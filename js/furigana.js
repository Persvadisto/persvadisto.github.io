(function() {
    let posts = document.getElementsByClassName('post-body');
    document.querySelectorAll('code').forEach(node => {
        var list = node.textContent.split(' ');
        if (list.length === 3 && list[0] === "@") {
            var written = list[1];
            var read = list[2];
            var rubyElement = document.createElement('ruby');
            var rp1 = document.createElement('rp');
            var rp2 = document.createElement('rp');
            var rt = document.createElement('rt');
            rp1.textContent = '(';
            rp2.textContent = ')';
            rt.textContent = read;
            var writtenNode = document.createTextNode(written);
            rubyElement.appendChild(writtenNode);
            rubyElement.appendChild(rp1);
            rubyElement.appendChild(rt);
            rubyElement.appendChild(rp2);
            node.parentNode.replaceChild(rubyElement, node);
        }
    });
})();