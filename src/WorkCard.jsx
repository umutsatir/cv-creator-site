import "./styles/card.css";

function WorkCard({ infos, setInfos, setShowForm }) {
    const handleClick = (e) => {
        e.preventDefault(); // Prevents page reload

        const formData = new FormData(e.target);

        let item = {
            name: formData.get("company"),
            position: formData.get("position"),
            startDate: formData.get("startDate"),
            endDate: formData.get("endDate"),
            location: formData.get("location"),
            desc: formData.get("desc"),
        };

        setInfos((infos) => [...infos, item]);
        setShowForm(false);
    };

    return (
        <>
            <form className="infos" onSubmit={(e) => handleClick(e, setInfos)}>
                <h3>Work Experience</h3>
                <div className="info">
                    <label htmlFor="company">Company Name</label>
                    <input
                        type="text"
                        name="company"
                        placeholder="Enter company name"
                        required
                    />
                </div>
                <div className="info">
                    <label htmlFor="position">Position Title</label>
                    <input
                        type="text"
                        name="position"
                        placeholder="Enter your position title"
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
                        placeholder="Enter company's location (optional)"
                    />
                </div>
                <div className="info">
                    <label htmlFor="desc">Description</label>
                    <input
                        type="text"
                        name="desc"
                        placeholder="Enter description (optional)"
                    />
                </div>
                <button>Save</button>
            </form>
        </>
    );
}

export default WorkCard;
