import { useDispatch } from 'react-redux';
import { deletePetFromList } from 'redux/userData/userDataOperations';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {
  PetListItem,
  PetImageBox,
  PetImage,
  PetInfoBox,
  PetInfoTitleSpan,
  PetInfoTypography,
  PetInfoBoxWrapper,
  IconButtonWrapper,
  DaleteIconStyled,
  IconButtonStyled,
  ModalDialogContent,
} from './PetItem.styled';
import { useSelector } from 'react-redux';
import { ThreeCircles } from 'react-loader-spinner';
import { Dialog, useTheme } from '@mui/material';
import { isDeletingPet, isUpdatingPet } from 'redux/userData/userDataSelectors';
import { useState } from 'react';

import ModalAddPetsNew from '../ModalAddpetsNew/ModalAddPetsNew';
import { useTranslation } from 'react-i18next';

function PetItem({ avatarUrl, name, birthDate, breed, description, id }) {
  const dispatch = useDispatch();
  const { t } = useTranslation('common');

  const isDeleting = useSelector(isDeletingPet);
  const isUpdating = useSelector(isUpdatingPet);

  const theme = useTheme();

  const handlePetDelete = petId => {
    dispatch(deletePetFromList(petId));
  };

  const [openAddPetForm, setOpenAddPetForm] = useState(false);

  const handleCloseAddNotice = () => {
    setOpenAddPetForm(prev => !prev);
  };

  return (
    <PetListItem>
      <PetImageBox>
        <PetImage src={avatarUrl} alt="my pet" />
      </PetImageBox>
      <PetInfoBoxWrapper>
        <PetInfoBox>
          <PetInfoTypography>
            <PetInfoTitleSpan>{ t('User.petCard.1line')}</PetInfoTitleSpan> {name}
          </PetInfoTypography>
          <PetInfoTypography>
            <PetInfoTitleSpan>{ t('User.petCard.2line')}</PetInfoTitleSpan> {birthDate}
          </PetInfoTypography>
          <PetInfoTypography>
            <PetInfoTitleSpan>{ t('User.petCard.3line')}</PetInfoTitleSpan> {breed}
          </PetInfoTypography>
          <PetInfoTypography>
            <PetInfoTitleSpan>{ t('User.petCard.4line')}</PetInfoTitleSpan> {description}
          </PetInfoTypography>
        </PetInfoBox>
        <IconButtonWrapper>
          <IconButtonStyled onClick={() => handlePetDelete(id)}>
            {isDeleting === id ? (
              <ThreeCircles
                height="20"
                width="20"
                color={theme.palette.primary.main}
                visible={true}
                ariaLabel="three-circles-rotating"
              />
            ) : (
              <DaleteIconStyled />
            )}
          </IconButtonStyled>
          <IconButtonStyled onClick={handleCloseAddNotice}>
            {isUpdating === id ? (
              <ThreeCircles
                height="20"
                width="20"
                color={theme.palette.primary.main}
                visible={true}
                ariaLabel="three-circles-rotating"
              />
            ) : (
              <EditRoundedIcon />
            )}
          </IconButtonStyled>
        </IconButtonWrapper>
      </PetInfoBoxWrapper>
      <Dialog
        sx={{ backdropFilter: 'blur(5px)' }}
        maxWidth="modal"
        open={openAddPetForm}
        onClose={handleCloseAddNotice}
      >
        <ModalDialogContent>
          <ModalAddPetsNew
            onModalClose={handleCloseAddNotice}
            isUpdateAction={true}
            petId={id}
          />
        </ModalDialogContent>
      </Dialog>
    </PetListItem>
  );
}

export default PetItem;
