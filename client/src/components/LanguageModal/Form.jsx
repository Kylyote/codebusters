import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
// import {ADD_LANGUAGE} from '../../utils/mutations';
import Select from 'react-select';
import languages from '../Select';
import skills from '../Select'


function Form () {
    const [language, setLanguage] = useState('');
    const [skill, setSkill] = useState('');
    // const [addLanguage, { error }] = useMutation(ADD_LANGUAGE);

    const handleLanguageChange = (selected) => {
        const language = selected.value;
        setLanguage(language);
    }
    
    const handleSkillChange = (selected) => {
        const skill = selected.value;
        setSkill(skill);
    }

    const handleAddLanguageSubmit = async (e) => {
        try {
            const mutationResponse = await addLanguage ({
                variables: {
                    language: language,
                    skill: skill
                }
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <div className='modal-content'>
                <h2 className='modal-header'>Add Language</h2>
                <hr />
                <div>
                    <form className='modal-form-main' onSubmit={handleAddLanguageSubmit}>
                        <div className='modal-form'>
                            <label htmlFor="language">Language:</label>
                            <Select 
                            className='w-100'
                            name='language'
                            onChange={handleLanguageChange}
                            options={languages}
                            />
                        </div>
                        <div className='modal-form'>
                            <label htmlFor="skill">Skill Level:</label>
                            <Select 
                            className='w-100'
                            name='skill'
                            onChange={handleSkillChange}
                            options={skills}
                            />
                        </div>
                        <button type='submit'></button>
                    </form>
                </div>
            </div>
        </>
    )

}

export default Form;