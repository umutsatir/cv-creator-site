import "./styles/info.css";
import "./styles/card.css";

function Info({ infos, setInfos }) {
    const handleClick = (e) => {
        e.preventDefault(); // Prevents page reload

        const formData = new FormData(e.target);

        let item = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            address: formData.get("address"),
        };

        setInfos(item);
    };

    return (
        <form className="infos" onSubmit={(e) => handleClick(e)}>
            <h3>Personal Details</h3>
            <div className="info">
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    required
                />
            </div>
            <div className="info">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                />
            </div>
            <div className="info">
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                />
            </div>
            <div className="info">
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    required
                />
            </div>
            <button>Save</button>
        </form>
    );
}

export default Info;
