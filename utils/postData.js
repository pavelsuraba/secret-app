import 'whatwg-fetch';

export default (url, playload = {}) => {

    const serialize = function(obj) {
        var str = [];
        for(var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    }

    const opt = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: serialize(playload)
    };

    return fetch(url, opt)
        .then(response => response.json());
}