import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import {ADD_REVIEW} from '../../utils/mutations';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import review from '../Select/review';

function ReviewForm() {
  const [reviewScore, setReview] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ reviewNum: 0, reviewText: '' });
  const [addReview, {error}] = useMutation(ADD_REVIEW);

  const handleInputChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value});
  };

  const handleReviewChange = (selected) => {
    const reviewText = selected.value;
    setReviewText(reviewText);
  };

  const handleScoreChange = (selected) => {
    const reviewNum = selected.value;
    setReview(reviewNum);
  };

  const handleReviewSubmit = async (event) => {
    const {id} = useParams();
    const { loading, error, data } = useQuery(QUERY_USER_BY_ID, {
      variables: { id: id },
    });
    const user = data?.user;

    event.preventDefault();
    //handle form submission here. will transfer from signup/login page
    try {
      const mutationResponse = await addReview ({
        variables: {
          id: user._id,
          reviews: [{
            reviewScore: form.reviewNum,
            reviewText: form.reviewText
          }]
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
       <div className='overlay'></div>
            <div className='custom-modal-content custom-modal-review'>
                <h2 className='modal-header'>Add Review</h2>
                <hr />
                <div>
                    <form className='modal-form-main' onSubmit={handleReviewSubmit}>
                        <div className='modal-form .modal-form-review'>
                            <label htmlFor="reviewText">Review:</label>
                            <input 
                            className='w-50'
                            name='reviewText'
                            onChange={handleReviewChange}
                            type='textarea'
                            style={{height: '100px', paddingBottom: '80px', textOverflow: 'true'}}
                            />
                        </div>
                        <div className='modal-form'>
                            <label htmlFor="reviewNum">Give Rating:</label>
                            <Select 
                            className='w-50'
                            name='reviewNum'
                            onChange={handleScoreChange}
                            options={review}
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

export default ReviewForm;