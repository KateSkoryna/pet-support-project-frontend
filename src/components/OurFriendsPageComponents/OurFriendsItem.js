import WorkDays from './WorkDays';

import { Box, Grid } from '@mui/material';
import {
  ContactsItem,
  ContactsTypography,
  FriendsLogo,
  ItemGrid,
  ContactLink,
  TitleLink,
  BoxTitle,
} from './OurFiendsPage.styled';
import defaultLogo from '../../assets/images/default_logo.webp';
import { useTranslation } from 'react-i18next';

const OurFriendsItem = ({ partner }) => {
  const { t } = useTranslation('common');
  const { title, url, addressUrl, address, imageUrl, phone, email, workDays } =
    partner;

  const renderField = (name, value) => {
    if (!value || !value.length) {
      return <p>-------------------</p>;
    }
    let ref;
    switch (name) {
      case 'Email':
        ref = 'mailto:' + value;
        break;
      case 'Phone':
        ref = 'tel:' + value;
        break;
      case 'Time':
        return <WorkDays workDays={value} />;
      case 'Address':
        return (
          <ContactLink
            href={value}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {address}
          </ContactLink>
        );
      default:
        ref = value;
        break;
    }

    return <ContactLink href={ref}>{value}</ContactLink>;
  };

  return (
    <ItemGrid item component="li">
      <BoxTitle>
        <TitleLink
          href={url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          color="inherit"
        >
          {title}
        </TitleLink>
      </BoxTitle>

      <Box
        sx={{
          display: 'flex',
        }}
      >
        <FriendsLogo
          component="img"
          image={imageUrl ?? defaultLogo}
          alt="company logo"
        />
        <Grid container component="ul">
          <ContactsItem item component="li" md={6}>
            <ContactsTypography component="span">
              {t('OurFriendsPage.item.time')}:
              {renderField(t('OurFriendsPage.item.time'), workDays)}
            </ContactsTypography>
          </ContactsItem>
          <ContactsItem item component="li">
            <ContactsTypography component="span">
              {t('OurFriendsPage.item.address')}:
              {renderField(t('OurFriendsPage.item.address'), addressUrl)}
            </ContactsTypography>
          </ContactsItem>
          <ContactsItem item component="li">
            <ContactsTypography component="span">
              {t('OurFriendsPage.item.email')}:
              {renderField(t('OurFriendsPage.item.email'), email)}
            </ContactsTypography>
          </ContactsItem>
          <ContactsItem item component="li">
            <ContactsTypography component="span">
              {t('OurFriendsPage.item.phone')}:
              {renderField(t('OurFriendsPage.item.phone'), phone)}
            </ContactsTypography>
          </ContactsItem>
        </Grid>
      </Box>
    </ItemGrid>
  );
};

export default OurFriendsItem;
