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
    const userId = decodedToken.id;

    const handleLanguageChange = (selected) => {
        const language = selected.value;
        setLanguage(language);
    }

    const handleSkillChange = (selected) => {
        const skill = selected.value;
        setSkill(skill);
    }

    const handleSubmit = async (e) => {
        console.log(language, skill)
        e.preventDefault()
        try {
            if (!language || !skill){
                alert('Please respond to both input prompts before submitting')
                return
            }
            const mutationResponse = await addLanguage({
                variables: {
                    languages: {
                        language: language,
                        skill: skill
                    }
                }
            });
            const token = mutationResponse.data.updateUser.token;
            Auth.login(token)
        } catch (e) {
            console.log(e);
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
                        <button className='my-3' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )

}

export default Form;