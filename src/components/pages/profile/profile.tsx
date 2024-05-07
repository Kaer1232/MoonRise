import React, { useState, useRef } from 'react';
import { Button, TextField } from '@mui/material';
import { IUser } from '../../../type';
import { updateProfile } from 'firebase/auth';
import { useAuth } from '../../providers/useAuth';
import {Input} from '@mui/material';

const Profile: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { ga, setUser, user } = useAuth();
  const [Iuser, setIuser] = useState<IUser>({
    id: user?.id || '',
    avatar: user?.avatar || '',
    name: user?.name || '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIuser(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const avatarURL = event.target?.result as string;
      setIuser(prevState => ({
        ...prevState,
        avatar: avatarURL,
      }));
    };
    reader.readAsDataURL(file);
  }
    
  };

  const UpDate = async () => {
    if (ga.currentUser) {
      await updateProfile(ga.currentUser, {
        displayName: Iuser.name,
        photoURL: Iuser.avatar,
      });
      setUser(Iuser);
    }
  };
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  

  return (
    <div>
      <TextField
        name="name"
        value={Iuser.name}
        onChange={handleInputChange}
      />
      <input
        type="file"
        style={{ display: 'none' }}
        onChange={handleAvatarChange}
        ref={fileInputRef}
      />
      <button onClick={handleClick}>Выбрать изображение</button>
      <Button type="submit" onClick={UpDate}>
        Сохранить
      </Button>
    </div>
  );
};

export default Profile;