# blazor-network-vis
Network Visualization using d3.js in Blazor Server app.

## Dataset
Network data generated synthetically using Faker Python library in Jupyter notebook (included in this repository root folder). The data consists of 3 CSV files:<br/>
(1) Positions data has 100 position records of a fictitious company with offices at two locations of Boston and Chicago.  These positions are distributed among two departments (Logistics, Research) with one Corporate office located in Boston. Each department has 3 Divisions under it.<br/>
(2) Employees data has 90 employee records.<br/>
(3) Relationship data has reporting relationship between positions.  Positions in a certain Division all report to the Supervisor of the Division, who in turn report to a Department Manager.<br/><br/>

Another Jupyter Notebook named "networkx_visualization" included in this repository has the Python code to generate a graph dataset using NetworkX library.  This graph dataset is exported from the notebook as JSON file and imported into the Blazor app for use by D3 JavaScript library.
