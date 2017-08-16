/**
 * Created by jlu122 on 2017/8/16.
 */

// this filter is used to filter search key when search key is a long string which can be split by "" , example "jay lu"
// it will filter out the list either contains "jay" of "lu".
// the optional boolean option 'isCaseSense' is used to decide whether the filter care about lower case or upper case , default as false.
function indefiniteFilter (sourceArray, filterString, isCaseSense) {
	if(Object.prototype.toString.call(sourceArray).slice(8,-1) !== "Array" || sourceArray.length === 0) {
		console.log("Input error: The source should be Array and the length shouldn't be 0.")
		return []
	}
	isCaseSense ? isCaseSense = true : isCaseSense = false;
	if (filterString.indexOf(" ") === -1) {
		// single word no indefinite filter
		var singleFilterList = [];
		if (isCaseSense) {
			sourceArray.forEach(function (item) {
				if (JSON.stringify(item).toLowerCase().indexOf(filterString.toLowerCase()) !== -1) {
					singleFilterList.push(item);
				}
			})
		} else {
			sourceArray.forEach(function (item) {
				if (JSON.stringify(item).indexOf(filterString) !== -1) {
					singleFilterList.push(item);
				}
			})
		}
		return singleFilterList;
	} else {
		var indefiniteFilterList = [];
		var filterArray = filterString.split(" ");
		if (isCaseSense) {
			sourceArray.forEach(function (item) {
				var itemString = JSON.stringify(item).toLowerCase();
				var ifIndefiniteFiltered = false;
				filterArray.forEach(function (filterSingleString) {
					if (filterSingleString != " " && itemString.includes(filterSingleString.toLowerCase())) {
						ifIndefiniteFiltered = true;
					}
				});
				if (ifIndefiniteFiltered) {
					indefiniteFilterList.push(item);
				}
			})
		} else {
			sourceArray.forEach(function (item) {
				var itemString = JSON.stringify(item);
				var ifIndefiniteFiltered = false;
				filterArray.forEach(function (filterSingleString) {
					if (itemString.includes(filterSingleString)) {
						ifIndefiniteFiltered = true;
					}
				});
				if (ifIndefiniteFiltered) {
					indefiniteFilterList.push(item);
				}
			})
		}
		return indefiniteFilterList
	}
}
module.exports = indefiniteFilter;
