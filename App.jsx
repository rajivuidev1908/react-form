import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] =
    useState("");
  const [about, setAbout] = useState("");

  const [formData, setFormData] = useState({
    firstname,
    lastname,
    email,
    contact,
    gender,
    selectedOption,
    subjects,
    resume,
    url,
    about
  });

  // Handle change for input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FormData = ",formData);
    // Add your form submission logic here
  };

  const handleReset = () => {
    // Reset all state variables here
    setFirstname("");
    setLastname("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };



  return (
    <>
      <div className="App">
        <h1>React Form</h1>
        <fieldset>
          <form action="#" method="get">
            <label htmlFor="firstname">First Name:</label>
            <input type="text" value={formData.firstname} onChange={handleChange} id="firstname" name="firstname" />

            <label htmlFor="lastname">Last Name:</label>
            <input type="text" value={formData.lastname} onChange={handleChange} id="lastname" name="lastname" />

            <label htmlFor="email">Email:</label>
            <input type="email" value={formData.email} onChange={handleChange} id="email" name="email" />

            <label htmlFor='contact'>Contact Number:</label>
            <input type="tel" value={formData.contact} onChange={handleChange} id="contact" name="contact" />

            <label htmlFor='gender'>Gender:</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <label htmlFor="lang">Your best Subject</label>
            <input type="checkbox" name="lang" id="english" checked={subjects.english === true} onChange={(e) => handleSubjectChange("english")} />
            English
            <input
              type="checkbox"
              name="lang"
              id="maths"
              checked={subjects.maths === true}
              onChange={(e) =>
                handleSubjectChange("maths")
              }
            />
            Maths
            <input
              type="checkbox"
              name="lang"
              id="physics"
              checked={subjects.physics === true}
              onChange={(e) =>
                handleSubjectChange("physics")
              }
            />
            Physics

            <label htmlFor='file'>Upload Resume:</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={(e) => {
                setResume(e.target.files[0]);
                setFormData((prev) => ({
                  ...prev,
                  resume: e.target.files[0]
                }));
              }}
              placeholder="Enter Upload File"
              required
            />

            <label htmlFor='url'>URL:</label>
            <input type="url" value={formData.url} id="url" name="url" onChange={handleChange} />

            <label htmlFor='subjectchoice'>Select your choice</label>
            <select
              name="selectedOption"
              id="select"
              value={formData.selectedOption}
              onChange={(e) => {
                setSelectedOption(e.target.value);
                setFormData((prev) => ({
                  ...prev,
                  selectedOption: e.target.value
                }));
              }}
            >
              <option
                value=""
                disabled
                defaultValue={selectedOption === ""}
              >
                Select your Ans
              </option>
              <optgroup label="Beginers">
                <option value="1">HTML</option>
                <option value="2">CSS</option>
                <option value="3">
                  JavaScript
                </option>
              </optgroup>
              <optgroup label="Advance">
                <option value="4">React</option>
                <option value="5">Node</option>
                <option value="6">
                  Express
                </option>
                <option value="t">
                  MongoDB
                </option>
              </optgroup>
            </select>
            <label htmlFor="about">About</label>
            <textarea
              name="about"
              id="about"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={formData.about}
              placeholder="About your self"
              required
            ></textarea>
            <button
              type="reset"
              value="reset"
              onClick={() => handleReset()}
            >
              Reset
            </button>
            <button
              type="submit"
              value="Submit"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </form>
        </fieldset>
      </div>
    </>
  )
}

export default App
