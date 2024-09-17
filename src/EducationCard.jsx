import "./styles/card.css";

function EducationCard({ infos, setInfos, setShowForm }) {
    const handleClick = (e) => {
        e.preventDefault(); // Prevents page reload

        const formData = new FormData(e.target);

        let item = {
            name: formData.get("school"),
            degree: formData.get("degree"),
            startDate: formData.get("startDate"),
            endDate: formData.get("endDate"),
            location: formData.get("location"),
        };

        setInfos((infos) => [...infos, item]);
        setShowForm(false);
    };

    return (
        <>
            <form className="infos" onSubmit={(e) => handleClick(e, setInfos)}>
                <h3>Education</h3>
                <div className="info">
                    <label htmlFor="school">School</label>
                    <input
                        type="text"
                        name="school"
                        placeholder="Enter school name"
                        required
                    />
                </div>
                <div className="info">
                    <label htmlFor="degree">Degree</label>
                    <input
                        type="text"
                        name="degree"
                        placeholder="Enter your degree"
                        required
                    />
                </div>
                <div className="info">
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" name="startDate" required />
                </div>
                <div className="info">
                    <label htmlFor="endDate">End Date</label>
                    <input type="date" name="endDate" required />
                </div>
                <div className="info">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Enter school's location (optional)"
                    />
                </div>
                <button>Save</button>
            </form>
        </>
    );
}

export default EducationCard;
