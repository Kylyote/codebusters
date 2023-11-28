import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import {ADD_LANGUAGE} from '../../utils/mutations';
import Select from 'react-select';
import languages from '../Select/languages'
import skills from '../Select/skills'
import jwt_decode from 'jwt-decode'

function Form () {
    const [language, setLanguage] = useState('');
    const [skill, setSkill] = useState('');
    const [addLanguage, { error }] = useMutation(ADD_LANGUAGE);
    const token = localStorage.getItem('id_token');
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.data._id;
    console.log(userId);

    const handleLanguageChange = (selected) => {
        const language = selected.value;
        setLanguage(language);
    }

    const handleSkillChange = (selected) => {
        const skill = selected.value;
        setSkill(skill);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!language || !skill){
                alert('Please respond to both prompts before submitting')
            }
            const data = await addLanguage({
                variables: {
                    id: userId,
                    languages: [
                        {
                            language: language,
                            skill: skill
                        }
                    ]
                }
            });
            window.location.reload()
        } catch (e) {
            console.log(e, 'this no worky');
        }
    }

    return (
        <>
            <div className='overlay'></div>
            <div className='custom-modal-content'>
                <h2 className='modal-header'>Add Language</h2>
                <hr />
                <div>
                    <form className='modal-form-main' onSubmit={handleSubmit}>
                        <div className='modal-form'>
                            <label htmlFor="language">Language:</label>
                            <Select 
                            className='w-50'
                            name='language'
                            onChange={handleLanguageChange}
                            options={languages}
                            />
                        </div>
                        <div className='modal-form'>
                            <label htmlFor="skill">Skill Level:</label>
                            <Select 
                            className='w-50'
                            name='skill'
                            onChange={handleSkillChange}
                            options={skills}
                            />
                        </div>
                        {error ? (
                                <div className='error-text-div'>
                                  <p className="error-text">Error: Response not successful</p>
                                </div>
                            ) : null}
                        <button className='my-3' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )

}

export default Form;