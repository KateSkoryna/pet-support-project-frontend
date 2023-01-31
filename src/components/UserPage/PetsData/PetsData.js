import { useEffect } from 'react';
import PetsList from '../PetsList/PetsList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPetsData } from 'redux/petsData/petsOperations';

function PetsData() {
  const dispatch = useDispatch();
  const pets = useSelector(state => state.petsData.pets);

  useEffect(() => {
    dispatch(fetchPetsData());
  }, [dispatch]);

  return (
    <>
      <PetsList pets={pets} />
    </>
  );
}

export default PetsData;
