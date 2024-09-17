import { useState } from "react";
import EducationCard from "./EducationCard";
import "./styles/card.css";

function Education({ infos, setInfos }) {
    const [showForm, setShowForm] = useState(false);
    return (
        <>
            {!showForm ? (
                <EducationCardView
                    infos={infos}
                    setInfos={setInfos}
                    setShowForm={setShowForm}
                />
            ) : (
                <EducationCard
                    infos={infos}
                    setInfos={setInfos}
                    setShowForm={setShowForm}
                />
            )}
        </>
    );
}

function EducationCardView({ infos, setInfos, setShowForm }) {
    const handleDelete = (indexToDelete) => {
        setInfos((prevInfos) =>
            prevInfos.filter((info, index) => index !== indexToDelete)
        );
    };

    return (
        <div className="infos">
            <h3>Education</h3>
            <div className="items">
                {infos.map((info, index) => (
                    <div className="item" key={index}>
                        <h3 className="itemName">{info.name}</h3>
                        <button onClick={() => handleDelete(index)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
            <button onClick={() => setShowForm(true)}>Create</button>
        </div>
    );
}

export default Education;
