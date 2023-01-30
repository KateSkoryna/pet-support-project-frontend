import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { getAuth } from 'redux/auth/authSelectors';
import { fetchNotices } from 'redux/notices/noticesOperations';

import { Button } from '@mui/material';

import ActionAreaCard from './card';

export default function NoticesCategoryList() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const category = useParams()

  useEffect(() => {
    dispatch(fetchNotices(category))
  }, [category, dispatch])

  const { isLoggedIn } = useSelector(getAuth)
  // const isLoggedIn = true

  return (
    <>
    <ActionAreaCard></ActionAreaCard>
      <Button
        variant="outlined"
        sx={{ textTransform: 'lowercase' }}
        onClick={() => navigate('/notices/sell')}
      >
        sell
      </Button>
      <Button
        variant="contained"
        sx={{ textTransform: 'lowercase' }}
        onClick={() => navigate('/notices/sell')}
      >
        lost/found
      </Button>
      <Button
        variant="outlined"
        sx={{ textTransform: 'lowercase' }}
        onClick={() => navigate('/notices/for-free')}
      >
        in good hands
      </Button>
      {isLoggedIn && <>
        <Button
          variant="outlined"
          sx={{ textTransform: 'lowercase' }}
          onClick={() => navigate('/notices/favorite')}
        >
          favorite ads
        </Button>
        <Button
          variant="outlined"
          sx={{ textTransform: 'lowercase' }}
          onClick={() => navigate('/notices/own')}
        >
          my ads
        </Button>
      </>}
    
    </>
  );
}