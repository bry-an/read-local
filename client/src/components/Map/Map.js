import React from "react";
import * as d3 from "d3";
import * as topojson from "topojson";
import topology from "../../utils/topology.json";
import "./Map.css";

const drawMap = () => {

    var width = 960,
        height = 500,
        centered;

    var projection = d3.geo.albersUsa()
        .scale(1070)
        .translate([width / 2, height / 2]);

    var path = d3.geo.path()
        .projection(projection);

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);

    svg.append("rect")
        .attr("class", "background")
        .attr("width", width)
        .attr("height", height)
        .on("click", clicked);

    var g = svg.append("g");



    function clicked(d) {
    var x, y, k;

    if (d && centered !== d) {
        var centroid = path.centroid(d);
        x = centroid[0];
        y = centroid[1];
        k = 4;
        centered = d;
    } else {
        x = width / 2;
        y = height / 2;
        k = 1;
        centered = null;
    }

    g.selectAll("path")
        .classed("active", centered && function(d) { return d === centered; });

    g.transition()
        .duration(750)
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
        .style("stroke-width", 1.5 / k + "px");
    }
}

export const Map = () => (
    <div className="mapDiv">
      {drawMap}
    </div>
  );

// export default Map;
