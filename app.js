d3.csv("test.csv").then(function(wine_data) {
    var tbody = d3.select("tbody");
    tbody.html("");
    console.log(wine_data);
    wine_data.forEach(function(appending) {
        tbody.append("tr");
        Object.entries(appending).forEach(function([key, value]) {
            tbody.append("td").text(value);
        })
    })
})