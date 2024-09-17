import { useState } from "react";
import "./App.css";
import Education from "./Education";
import Info from "./Info";
import Work from "./Work";
import Cv from "./Cv";

function App() {
    const [educationInfos, setEducationInfos] = useState([]);
    const [workInfos, setWorkInfos] = useState([]);
    const [infos, setInfos] = useState([]);

    return (
        <div className="body">
            <div className="edit">
                <Info infos={infos} setInfos={setInfos} />
                <Education
                    infos={educationInfos}
                    setInfos={setEducationInfos}
                />
                <Work infos={workInfos} setInfos={setWorkInfos} />
            </div>
            <div className="view">
                <Cv
                    infos={infos}
                    workInfos={workInfos}
                    educationInfos={educationInfos}
                />
            </div>
        </div>
    );
}

export default App;
