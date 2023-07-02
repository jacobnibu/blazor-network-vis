# blazor-network-vis
Network Visualization using Plotly in Blazor Server app.

## Dataset
Network data generated synthetically using Faker Python library in Jupyter notebook (included in this repository root folder). The data consists of 3 CSV files:
(1) Positions data has 100 position records of a fictitious company with offices at two locations of Boston and Chicago.  These positions are distributed among two departments (Logistics, Research) with one Corporate office located in Boston. Each department has 3 Divisions under it.
(2) Employees data has 90 employee records.
(3) Relationship data has reporting relationship between positions.  Positions in a certain Division all report to the Supervisor of the Division, who in turn report to a Department Manager.
