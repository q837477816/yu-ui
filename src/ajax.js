function http(method, url, options) {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.onload = () => {
        options.success && options.success(xhr.response)
    }
    xhr.onerror = () => {
        options.fail && options.fail(xhr)
    }
    xhr.send(options.data)
}
export default {
    get(url, options) {
        return http('get', url, options)
    },
    post(url, options) {
        return http('post', url, options)
    },
}