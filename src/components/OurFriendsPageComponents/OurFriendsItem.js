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
      return <p>-----------------</p>;
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
        return (
          <ContactsTypography component="p">
            {name}
            <WorkDays workDays={value} />
          </ContactsTypography>
        );
      case 'Address':
        return (
          <ContactsTypography component="p">
            {name}
            <ContactLink
              href={value}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {address}
            </ContactLink>
          </ContactsTypography>
        );
      default:
        ref = value;
        break;
    }

    return (
      <ContactsTypography component="p">
        {name}:<ContactLink href={ref}>{value}</ContactLink>
      </ContactsTypography>
    );
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
        <Grid container component="ul" justifyContent="space-between">
          <ContactsItem item component="li" md={6}>
            {renderField(t('OurFriendsPage.item.time'), workDays)}
          </ContactsItem>
          <ContactsItem item component="li">
            {renderField(t('OurFriendsPage.item.address'), addressUrl)}
          </ContactsItem>
          <ContactsItem item component="li">
            {renderField(t('OurFriendsPage.item.email'), email)}
          </ContactsItem>
          <ContactsItem item component="li">
            {renderField(t('OurFriendsPage.item.phone'), phone)}
          </ContactsItem>
        </Grid>
      </Box>
    </ItemGrid>
  );
};

export default OurFriendsItem;
