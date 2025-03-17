import { useState } from "react";

export default function AddStudent({ handleAddStudent }) {
  const [formData, setFormData] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false,
  });
  //   const [fullName, setFullName] = useState("");
  //   const [image, setImage] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [program, setProgram] = useState("");
  //   const [graduationYear, setGraduationYear] = useState(2023);
  //   const [graduated, setGraduated] = useState(false);

  const handleName = (e) => {
    // setFullName(e.target.value);
    setFormData({ ...formData, fullName: e.target.value });
  };
  const handleImage = (e) => {
    // setImage(e.target.value);
    setFormData({ ...formData, image: e.target.value });
  };
  const handlePhone = (e) => {
    // setPhone(e.target.value);
    setFormData({ ...formData, phone: e.target.value });
  };
  const handleEmail = (e) => {
    // setEmail(e.target.value);
    setFormData({ ...formData, email: e.target.value });
  };
  const handleProgram = (e) => {
    // setProgram(e.target.value);
    setFormData({ ...formData, program: e.target.value });
  };
  const handleGraduationYear = (e) => {
    // setGraduationYear(e.target.value);
    setFormData({ ...formData, graduationYear: e.target.value });
  };
  const handleGraduated = (e) => {
    // setGraduated(e.target.checked);
    setFormData({ ...formData, graduated: e.target.checked });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      ...formData,
    };

    handleAddStudent(newStudent);

    setFormData({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "",
      graduationYear: 2023,
      graduated: false,
    });
    // setFullName("");
    // setImage("");
    // setPhone("");
    // setEmail("");
    // setEmail("");
    // setProgram("");
    // setGraduationYear(2023);
    // setGraduated(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleName}
            type="text"
            placeholder="Full Name"
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            value={formData.image}
            onChange={handleImage}
            type="url"
            placeholder="Profile Image"
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            value={formData.phone}
            onChange={handlePhone}
            type="tel"
            placeholder="Phone"
          />
        </label>

        <label>
          Email
          <input
            name="email"
            value={formData.email}
            onChange={handleEmail}
            type="email"
            placeholder="Email"
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            value={formData.program}
            onChange={handleProgram}
          >
            <option value="">-- None --</option>
            <option value="Web Dev">Web Dev</option>
            <option value="UXUI">UXUI</option>
            <option value="Data">Data</option>
          </select>
        </label>

        <label>
          Graduation Year
          <input
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleGraduationYear}
            type="number"
            placeholder="Graduation Year"
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            checked={formData.graduated}
            onChange={handleGraduated}
            type="checkbox"
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}
