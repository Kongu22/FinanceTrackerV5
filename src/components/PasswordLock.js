// src/components/PasswordLock.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useLanguage } from './LanguageContext';
import { toast } from 'react-toastify';

const PasswordLock = ({ onUnlock }) => {
  const { currentTranslations } = useLanguage();
  const [password, setPassword] = useState('');
  const [savedPassword, setSavedPassword] = useState(localStorage.getItem('appPassword') || '');
  const [isSettingPassword, setIsSettingPassword] = useState(!savedPassword);

  useEffect(() => {
    if (savedPassword) {
      setIsSettingPassword(false);
    }
  }, [savedPassword]);

  const handlePasswordSubmit = () => {
    if (isSettingPassword) {
      if (password.length === 4) {
        localStorage.setItem('appPassword', password);
        setSavedPassword(password);
        toast.success(currentTranslations.passwordSetSuccessfully);
        onUnlock();
      } else {
        toast.error(currentTranslations.passwordFourChars);
      }
    } else {
      if (password === savedPassword) {
        toast.success(currentTranslations.welcomeBack);
        onUnlock();
      } else {
        toast.error(currentTranslations.incorrectPassword);
      }
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Typography variant="h6" gutterBottom>
        {isSettingPassword ? currentTranslations.setNewPassword : currentTranslations.enterPassword}
      </Typography>
      <TextField
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        inputProps={{ maxLength: 4 }}
        variant="outlined"
        sx={{ mb: 2, width: '200px' }}
      />
      <Button variant="contained" color="primary" onClick={handlePasswordSubmit}>
        {isSettingPassword ? currentTranslations.setPassword : currentTranslations.login}
      </Button>
    </Box>
  );
};

export default PasswordLock;
