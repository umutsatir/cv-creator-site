import WorkCard from "./WorkCard";
import { useState } from "react";

function Work({ infos, setInfos }) {
    const [showForm, setShowForm] = useState(false);
    return (
        <>
            {!showForm ? (
                <WorkCardView
                    infos={infos}
                    setInfos={setInfos}
                    setShowForm={setShowForm}
                />
            ) : (
                <WorkCard
                    infos={infos}
                    setInfos={setInfos}
                    setShowForm={setShowForm}
                />
            )}
        </>
    );
}

function WorkCardView({ infos, setInfos, setShowForm }) {
    const handleDelete = (indexToDelete) => {
        setInfos((prevInfos) =>
            prevInfos.filter((info, index) => index !== indexToDelete)
        );
    };

    return (
        <div className="infos">
            <h3>Work Experience</h3>
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

export default Work;
