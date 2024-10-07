import React from 'react';
import useTokenData from '../hooks/useTokenData';
import { Chip, Typography, styled, useTheme } from '@mui/material';
import useHasRole from '../hooks/useHasRole';
import Config from '../config/Config';
import PersonIcon from '@mui/icons-material/Person';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EngineeringIcon from '@mui/icons-material/Engineering';

const UserBox = styled(Chip)(({ theme }) => ({
  fontSize: "0.875rem",
  padding: theme.spacing(0.75) 
}));

const UserTitle = () => {
  const userData = useTokenData();
  
  const getShortName = ()=>{
    let fullName = `${userData.lastName} ${userData.firstName.charAt(0)}.`;
    if (userData?.secondName) {
      fullName += ` ${userData.secondName.charAt(0)}.`
    }
    return fullName
  }

  const getLableIcom = ()=> {
    switch (userData.roleName) {
      case Config.Roles.PATIENT:
        return <PersonIcon/>
     case Config.Roles.MANAGER:
        return <LocalHospitalIcon/>      
      case Config.Roles.ADMIN:
        return <EngineeringIcon/>
      default:
        return <PersonIcon/>
    }
  }

  return <UserBox color="primary" label={getShortName()} icon={getLableIcom()}/>
};

export default UserTitle;
