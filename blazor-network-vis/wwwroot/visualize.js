function initiateD3() {

  var canvas = d3.select("#networkvis");
  var width = canvas.attr("width");
  var height = canvas.attr("height");
  var r = 6;
  var color = d3.scaleOrdinal(d3.schemeCategory20);
  var ctx = canvas.node().getContext("2d");

  var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function (d) {
        return d.id;
    }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

  // d3 data loading and display
  d3.json("network_vis.json", function (error, graph) {
    if (error) throw error;

    simulation
      .nodes(graph.nodes)
      .on("tick", update)  // should come before adding links
      .force("link").links(graph.links);

    canvas
      .call(d3.drag()
      .container(canvas.node())
      .subject(dragsubject)
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended)
    );

    function update() {
      ctx.clearRect(0, 0, width, height);  // clear the whole canvas to redraw
  
      ctx.beginPath();
      ctx.strokeStyle = "#aaa";
      graph.links.forEach(drawLink);
      ctx.stroke();
  
      graph.nodes.forEach(drawNode);
      
    }

    function dragsubject() {
      return simulation.find(d3.event.x, d3.event.y);
    }

  });

  function drawNode(d) {
    ctx.beginPath();
    ctx.fillStyle = color(d.div);  // choose a property of the node
    ctx.moveTo(d.x, d.y);
    ctx.arc(d.x, d.y, r, 0, r* Math.PI);
    ctx.fill();
  };
  
  function drawLink(l) {
    ctx.moveTo(l.source.x, l.source.y);
    ctx.lineTo(l.target.x, l.target.y)
  };

  // drag functions
  function dragstarted() {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d3.event.subject.fx = d3.event.subject.x;
    d3.event.subject.fy = d3.event.subject.y;
    console.log(d3.event.subject);
  }

  // Update the subject (dragged node) position during drag.
  function dragged() {
    d3.event.subject.fx = d3.event.x;
    d3.event.subject.fy = d3.event.y;
  }

  // Restore the target alpha so the simulation cools after dragging ends.
  // Unfix the subject position now that it’s no longer being dragged.
  function dragended() {
    if (!d3.event.active) simulation.alphaTarget(0);
    d3.event.subject.fx = null;
    d3.event.subject.fy = null;
  }

}



