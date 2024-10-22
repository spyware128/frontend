import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchStudentById(id);
    }
  }, [id]);

  const fetchStudentById = async (id) => {
    try {
      const response = await axios.get(`/student/${id}`);
      setName(response.data.data.name);
      setEmail(response.data.data.email);
    } catch (error) {
      console.error('Error fetching student by ID:', error);
    }
  };

  const saveStudent = async (e) => {
    e.preventDefault();
    const student = { name, email };

    try {
      if (id) {
        await axios.put(`/student/${id}`, student);
      } else {
        await axios.post('/student', student);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving student:', error);
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Student' : 'Add Student'}</h2>
      <form onSubmit={saveStudent}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">{id ? 'Update' : 'Save'}</button>
      </form>
    </div>
  );
};

export default StudentForm;
