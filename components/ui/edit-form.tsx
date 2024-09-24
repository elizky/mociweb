'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ProfileData } from '@/lib/utils';
import { saveProfile } from '@/app/actions';
import { Trash2 } from 'lucide-react';

export default function ProfileManagement({ data }: { data: ProfileData }) {
  const [profile, setProfile] = useState<ProfileData>({
    name: '',
    avatar: '',
    email: [],
    phone: [],
    profession: [],
    social: {},
    experience: [],
    skills: [],
    connect: [],
  });

  useEffect(() => {
    setProfile(data);
  }, [data]);

  const handleInputChange = (field: keyof ProfileData, value: unknown) => {
    setProfile({ ...profile, [field]: value });
  };

  const handleArrayChange = (field: keyof ProfileData, index: number, value: unknown) => {
    const updatedArray = [...(profile[field] as unknown[])];
    updatedArray[index] = value;
    setProfile({ ...profile, [field]: updatedArray });
  };

  const handleAddArrayItem = (field: keyof ProfileData, defaultValue: unknown) => {
    const updatedArray = [...(profile[field] as unknown[]), defaultValue];
    setProfile({ ...profile, [field]: updatedArray });
  };

  const handleRemoveArrayItem = (field: keyof ProfileData, index: number) => {
    const updatedArray = [...(profile[field] as unknown[])];
    updatedArray.splice(index, 1);
    setProfile({ ...profile, [field]: updatedArray });
  };

  return (
    <form className='mt-8 space-y-8' action={() => saveProfile(profile)}>
      <div>
        <Label className='text-md font-semibold' htmlFor='name'>
          Name:
        </Label>
        <Input
          className='mt-4'
          id='name'
          type='text'
          value={profile.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
      </div>

      <div>
        <Label className='text-md font-semibold' htmlFor='avatar'>
          Avatar URL:
        </Label>
        <Input
          className='mt-4'
          id='avatar'
          type='text'
          value={profile.avatar}
          onChange={(e) => handleInputChange('avatar', e.target.value)}
        />
      </div>

      <div className='grid md:grid-cols-2 gap-2 md:gap-8 space-y-8 md:space-y-0'>
        <div>
          <Label className='text-md font-semibold'>Emails:</Label>
          {profile.email.map((email, index) => (
            <div key={index} className='flex items-center mt-4 gap-4'>
              <Input
                type='email'
                value={email}
                onChange={(e) => handleArrayChange('email', index, e.target.value)}
              />
              <Button
                variant='ghost'
                type='button'
                size='icon'
                onClick={() => handleRemoveArrayItem('email', index)}
              >
                <Trash2 />
              </Button>
            </div>
          ))}
          <Button
            type='button'
            className='w-full mt-4'
            variant='outline'
            onClick={() => handleAddArrayItem('email', '')}
          >
            Add Email
          </Button>
        </div>

        <div>
          <Label className='text-md font-semibold'>Phones:</Label>
          {profile.phone.map((phone, index) => (
            <div key={index} className='flex items-center mt-4 gap-4'>
              <Input
                type='text'
                placeholder='Number'
                className='w-2/3'
                value={phone.number}
                onChange={(e) =>
                  handleArrayChange('phone', index, { ...phone, number: e.target.value })
                }
              />
              <Input
                type='text'
                placeholder='Type (e.g., call, whatsapp)'
                className='w-1/3'
                value={phone.type}
                onChange={(e) =>
                  handleArrayChange('phone', index, { ...phone, type: e.target.value })
                }
              />
              <Button
                variant='ghost'
                type='button'
                size='icon'
                onClick={() => handleRemoveArrayItem('phone', index)}
              >
                <Trash2 />
              </Button>
            </div>
          ))}
          <Button
            type='button'
            className='w-full mt-4'
            variant='outline'
            onClick={() => handleAddArrayItem('phone', { number: '', type: 'call' })}
          >
            Add Phone
          </Button>
        </div>
      </div>

      <div>
        <Label className='text-md font-semibold'>Profession:</Label>
        {profile.profession.map((profession, index) => (
          <div key={index} className='flex items-center space-x-2 mt-4'>
            <Input
              type='text'
              value={profession}
              onChange={(e) => handleArrayChange('profession', index, e.target.value)}
            />
            <Button
              variant='ghost'
              type='button'
              size='icon'
              onClick={() => handleRemoveArrayItem('profession', index)}
            >
              <Trash2 />
            </Button>
          </div>
        ))}
        <Button
          className='w-full mt-4'
          variant='outline'
          type='button'
          onClick={() => handleAddArrayItem('profession', '')}
        >
          Add Profession
        </Button>
      </div>

      <div>
        <Label className='text-md font-semibold'>Social Links:</Label>
        {Object.entries(profile.social).map(([platform, url]) => (
          <div key={platform} className='flex items-center space-x-2 mt-4'>
            <Input
              type='text'
              placeholder={platform}
              value={url}
              onChange={(e) =>
                handleInputChange('social', { ...profile.social, [platform]: e.target.value })
              }
            />
          </div>
        ))}
      </div>

      <div>
        <Label className='text-md font-semibold'>Experience:</Label>
        {profile.experience.map((experience, index) => (
          <div key={index} className='flex items-center space-x-2 mt-4'>
            <Input
              type='text'
              value={experience}
              onChange={(e) => handleArrayChange('experience', index, e.target.value)}
            />
            <Button
              variant='ghost'
              type='button'
              size='icon'
              onClick={() => handleRemoveArrayItem('experience', index)}
            >
              <Trash2 />
            </Button>
          </div>
        ))}
        <Button
          className='w-full mt-4'
          variant='outline'
          type='button'
          onClick={() => handleAddArrayItem('experience', '')}
        >
          Add Experience
        </Button>
      </div>

      <div>
        <Label className='text-md font-semibold'>Skills:</Label>
        {profile.skills.map((skill, index) => (
          <div key={index} className='flex items-center space-x-2 mt-4'>
            <Input
              type='text'
              value={skill}
              onChange={(e) => handleArrayChange('skills', index, e.target.value)}
            />
            <Button
              variant='ghost'
              type='button'
              size='icon'
              onClick={() => handleRemoveArrayItem('skills', index)}
            >
              <Trash2 />
            </Button>
          </div>
        ))}
        <Button
          className='w-full mt-4'
          variant='outline'
          type='button'
          onClick={() => handleAddArrayItem('skills', '')}
        >
          Add Skill
        </Button>
      </div>

      <div>
        <Label className='text-md font-semibold'>Connect Links:</Label>
        {profile.connect.map((connect, index) => (
          <div key={index} className='flex items-center space-x-2 mt-4'>
            <Input
              type='text'
              placeholder='Text'
              value={connect.text}
              onChange={(e) =>
                handleArrayChange('connect', index, { ...connect, text: e.target.value })
              }
            />
            <Input
              type='text'
              placeholder='Link'
              value={connect.link}
              onChange={(e) =>
                handleArrayChange('connect', index, { ...connect, link: e.target.value })
              }
            />
            <Button
              variant='ghost'
              type='button'
              size='icon'
              onClick={() => handleRemoveArrayItem('connect', index)}
            >
              <Trash2 />
            </Button>
          </div>
        ))}
        <Button
          className='w-full mt-4'
          variant='outline'
          type='button'
          onClick={() => handleAddArrayItem('connect', { text: '', link: '' })}
        >
          Add Connect Link
        </Button>
      </div>

      <Button className='w-full my-4' type='submit'>
        Save Profile
      </Button>
    </form>
  );
}
