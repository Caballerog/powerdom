class PageManager {
    static init() {
        let current = 0, data = [];

        for (let i = 0; i < window.config.pages.length; ++i) {
            let page = window.config.pages[i];

            if (page.hasOwnProperty('default') && page.default) {
                current = i;
                delete page.default;
            }


            data.push(page);
        }

        PageManager.prototype.current = current;
        PageManager.prototype.data = data;
    }

    static setCurrentIndex(index) {
        let max = PageManager.prototype.data.length;

        if (index >= 0 && index < max) {
            PageManager.prototype.current = index;
            PageManager.loadCurrent();
        }
    }

    static setCurrentPath(path) {
        let i = 0, index = 0;
        let max = PageManager.prototype.data.length;
        let data = PageManager.prototype.data;

        do {
            if (path != data[i].path) {
                ++i;
            } else {
                index = i;
                i = max;
            }

        } while (i < max);

        if (index > 0)
            PageManager.setCurrentIndex(index);
    }

    static getInfo() {
        return {
            current: PageManager.prototype.current,
            data: PageManager.prototype.data
        };
    }

    static loadCurrent() {
        let page = PageManager.prototype.data[PageManager.prototype.current];
        let link = document.createElement('link');

        link.rel = 'import';
        link.href = page.path;
        link.onload = (e) => {
            if (!page.instance)
                page.instance = page.onload(e.path);
            else
                page.instance.rebuild();
        };

        document.getElementById('main').appendChild(link);
    }

    static currentInstance(){
        let page = PageManager.prototype.data[PageManager.prototype.current];
        return page.instance;
    }
}