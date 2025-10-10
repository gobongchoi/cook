import React from 'react'
import { useState } from 'react'

function PopUp() {

        const buttonStyle: React.CSSProperties = {
            backgroundColor: "#dbaf21ff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            padding: "10px 16px",
            cursor: "pointer",
        }
    
        const popBack: React.CSSProperties = {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }
    
        const popBackCard: React.CSSProperties = {
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            width: "400px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        }
    
        const cancelButton: React.CSSProperties = {
            backgroundColor: "#ccc",
            border: "none",
            padding: "8px 12px",
            borderRadius: "6px",
            cursor: "pointer",
        }
    
        const saveButton: React.CSSProperties = {
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            marginLeft: '20px',
        }
    
        const [isOpen, setIsOpen] = useState(false);
        const [formData, setFormData] = useState({
            title: "",
            name: "",
            ingredients: "",
        });
    
        const handleChange = (
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };
    
        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            console.log("Submitted:", formData);
            setIsOpen(false); // close popup after submitting
        };
    
  return (

    <div>
        <button onClick={() => setIsOpen(true)} style={buttonStyle}> Create New Recipe </button>

            {isOpen && (
                    <div style={popBack}>
                        <div style={popBackCard}>

                            <h2>Create Item</h2>
                            <form onSubmit={handleSubmit}>

                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                                />

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                                />

                                <textarea
                                    name="ingredients"
                                    placeholder="Ingredients"
                                    value={formData.ingredients}
                                    onChange={handleChange}
                                    style={{ width: "100%", height: "80px", padding: "8px" }}
                                />

                                <div>
                                    <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    style={cancelButton}
                                    >
                                    Cancel
                                    </button>

                                    <button
                                    type="submit"
                                    style={saveButton}
                                    >
                                    Save
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
            )}
    </div>
  )
}

export default PopUp