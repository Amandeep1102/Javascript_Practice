/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
     if (n === 0) return arr

    const flatArr = []

    arr.forEach(el => 
        (Array.isArray(el) && n > 0) ? flatArr.push(...flat(el, n - 1)) : flatArr.push(el)
    )

    return flatArr
};