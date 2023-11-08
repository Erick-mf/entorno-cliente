google.charts.load("current", { packages: ["corechart", "geoChart"] });
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    barChart();
    pieChart();
    geoChart();
}

function barChart() {
    let data = google.visualization.arrayToDataTable([
        ["Partidos", "Diputadoa"],
        ["PP", 137],
        ["PSOE", 121],
        ["VOX", 33],
        ["SUMAR", 31],
        ["REPUBLICANO", 7],
        ["Junts per Catalunya", 7],
        ["Euskal Herreria Bildu", 6],
        ["EAJ-PNV", 5],
        ["Mixto", 3],
    ]);

    let options = {
        title: "Representación en el Congreso de los Diputados",
        legend: { position: "none" },
    };

    let chart = new google.visualization.BarChart(document.getElementById("barchart_div"));
    chart.draw(data, options);
}

function pieChart() {
    let data = google.visualization.arrayToDataTable([
        ["Partidos", "Diputadoa"],
        ["PP", 137],
        ["PSOE", 121],
        ["VOX", 33],
        ["SUMAR", 31],
        ["REPUBLICANO", 7],
        ["Junts per Catalunya", 7],
        ["Euskal Herreria Bildu", 6],
        ["EAJ-PNV", 5],
        ["Mixto", 3],
    ]);

    let options = {
        title: "Representación en el Congreso de los Diputados",
    };

    let chart = new google.visualization.PieChart(document.getElementById("piechart_div"));
    chart.draw(data, options);
}

function geoChart() {
    let data = google.visualization.arrayToDataTable([
        ["País", "Visitantes"],
        ["France", 89_000_000],
        ["Spain", 84_000_000],
        ["United States", 79_000_000],
        ["China", 66_000_000],
        ["Italy", 65_000_000],
        ["Turkey", 51_000_000],
        ["Mexico", 45_000_000],
        ["Thailand", 40_000_000],
    ]);

    let options = {
        title: "Ranking de los países más turísticos del mundo",
    };

    let chart = new google.visualization.GeoChart(document.getElementById("geochart_div"));
    chart.draw(data, options);
}

window.onload = drawCharts;
