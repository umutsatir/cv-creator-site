import "./styles/cv.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaHome } from "react-icons/fa";

function Cv({ infos, workInfos, educationInfos }) {
    return (
        <div className="cv">
            <div className="cvHeader">
                <h1>{infos.name}</h1>
                <div className="cvInfos">
                    <p className="cvInfoP">
                        <MdEmail />
                        {infos.email}
                    </p>
                    <p className="cvInfoP">
                        <FaPhoneAlt />
                        {infos.phone}
                    </p>
                    <p className="cvInfoP">
                        <FaHome />
                        {infos.address}
                    </p>
                </div>
            </div>
            <div className="cvBody">
                <h2>Educations</h2>
                <div className="educations">
                    {educationInfos.map((educationInfo, index) => (
                        <div className="education" key={index}>
                            <div className="experienceLeft">
                                <p>
                                    {educationInfo.startDate} -{" "}
                                    {educationInfo.endDate}
                                </p>
                                <p>{educationInfo.location}</p>
                            </div>
                            <div className="experienceRight">
                                <h3>{educationInfo.name}</h3>
                                <p>{educationInfo.degree}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <h2>Work Experiences</h2>
                <div className="works">
                    {workInfos.map((workInfo, index) => (
                        <div className="work" key={index}>
                            <div className="experienceLeft">
                                <p>
                                    {workInfo.startDate} - {workInfo.endDate}
                                </p>
                                <p>{workInfo.location}</p>
                            </div>
                            <div className="experienceRight">
                                <h3>{workInfo.name}</h3>
                                <p>{workInfo.position}</p>
                                <p>{workInfo.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cv;
