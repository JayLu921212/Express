console.log("this is index.js");

document.getElementById("entranceSearch").addEventListener("input", function () {
    var searchValue = event.target.value;
    if (searchValue.length >= 3) {
        entranceSearch(searchValue);
    }
});

function entranceSearch(key) {
    $.ajax({
        url: '/entranceSearch',
        dataType: 'json',
        type: "post",
        data: {
            key: key
        },
        async: true,
        success: function (data) {
            console.log(data.data);
            showSearchResult(data.data)
        }
    });
}

function showSearchResult(dataList) {
    if (document.getElementById("searchResult")) {
        document.getElementById("searchResult").remove();
    }
    var ul = document.createElement("ul");
    ul.id = "searchResult";
    dataList.forEach(function (t) {
        var li =  document.createElement("li");
        var a  =  document.createElement("a");
        a.setAttribute("href", t.href);
        a.text = t.tag;
        li.append(a);
        ul.append(li);
    });
    document.getElementById("searchContainer").append(ul);
}
// httpRequest();
