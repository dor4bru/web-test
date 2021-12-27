import './App.css';
import MonitorType from './component/MonitorType'
import Legend from './component/Legend'
import React, { useState } from "react";
//import Monitor from './component/Monitor';

var data = require('./data/Legends.json');
const themeColors = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'];

function getMonitorsData(monitorsTypes, monitors) {
    const typesDict = {};
    monitorsTypes.forEach((mt) => {
        typesDict[mt.Id] = {...mt, monitors: []};
    });
    monitors.forEach((m) => {
        typesDict[m.MonitorTypeId] && typesDict[m.MonitorTypeId].monitors.push(m);
    });
    return typesDict;
}


function getLegendsData(legends) {
    const legendsData = {};
    legends.forEach((l) => {
        legendsData[l.Id] = l;
    });
    return legendsData;
}

function App() {

    const monitorsData = getMonitorsData(data.MonitorType, data.Monitor);
    const legendsData = getLegendsData(data.Legends);

    const [selectedLegend, setSelectedLegend] = useState({tags:[]});
    const [selectedMonitor, setSelectedMonitor] = useState({});

    function onChange(monitorId, monitorTypeId) {
        
        const legendId = monitorsData[monitorTypeId.toString()].LegendId;
        setSelectedLegend(legendsData[legendId.toString()]);
        setSelectedMonitor(monitorsData[monitorTypeId.toString()]);
        
        
    }

    return (
        <div className="App">
            <div>
                <h2>Select Monitor Type and Monitor</h2>
                {Object.values(monitorsData).map((m, index) => {
                    return (<MonitorType id={m.Id}
                                         key={m.Id}
                                         variant={themeColors[index % themeColors.length]}
                                         name={m.Name}
                                         ledgendId={m.LegendId}
                                         description={m.description}
                                         monitors={m.monitors}
                                         onClick={onChange}/>)
                })}
            </div>
            {selectedMonitor.Name && (<div>Monitor: {selectedMonitor.Name}</div>)}
            
            <Legend key={selectedLegend.Id} tags={selectedLegend.tags}/>
        </div>
    );
}

export default App;
