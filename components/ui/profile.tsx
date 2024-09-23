import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import CalButton from './cal-button';
import { ProfileData, profileData } from '@/lib/utils';
import Link from 'next/link';

export default function PersonalProfile() {
  return (
    <div className='flex flex-col'>
      <ProfileHeader name={profileData.name} avatar={profileData.avatar} />
      <ProfileDetails data={profileData} />
    </div>
  );
}

function ProfileHeader({ name, avatar }: { name: string; avatar: string }) {
  return (
    <Card className='max-w-5xl m-4'>
      <CardHeader>
        <div className='flex items-center space-x-4'>
          <Avatar className='w-12 sm:w-20 h-12 md:h-20'>
            <AvatarImage src={avatar} alt='Profile Picture' />
            <AvatarFallback>
              {name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <h1 className='text-2xl font-bold'>{name}</h1>
        </div>
      </CardHeader>
    </Card>
  );
}

function ProfileDetails({ data }: { data: ProfileData }) {
  return (
    <Card className='max-w-5xl m-4'>
      <CardContent className='space-y-6 my-4'>
        <ProfileSection
          title='E-mail'
          content={
            <div>
              {data.email.map((email, index) => (
                <a key={index} href={`mailto:${email}`} className=' hover:text-blue-600'>
                  {email} {data.email.length !== index + 1 && ' | '}
                </a>
              ))}
            </div>
          }
        />
        <Separator />
        <ProfileSection
          title='Phone'
          content={
            <div>
              {data.phone.map((phone, index) => (
                <>
                  <PhoneLink key={index} phone={phone} />
                  {data.phone.length !== index + 1 && ' | '}
                </>
              ))}
            </div>
          }
        />{' '}
        <Separator />
        <ProfileSection title='Profession' content={<div>{data.profession.join(' | ')}</div>} />
        <Separator />
        <ProfileSection
          title='Book a Meeting'
          content={
            <div className='flex flex-wrap gap-2'>
              <CalButton calUser='tomas-monguillot' time='15min' />
              <CalButton calUser='tomas-monguillot' time='30min' />
              <CalButton calUser='tomas-monguillot' time='45min' />
            </div>
          }
        />
        <Separator />
        <ProfileSection
          title='Connect'
          content={
            <div className='flex justify-start gap-2'>
              {Object.entries(data.social).map(([platform, url]) => {
                const Icon = socialIcons[platform as keyof typeof socialIcons];
                return <SocialIcon key={platform} icon={<Icon />} label={platform} href={url} />;
              })}
            </div>
          }
        />
        <Separator />
        <ProfileSection
          title='Expertise'
          content={
            <div className='flex flex-wrap gap-2'>
              {data.experience.map((item, index) => (
                <Badge key={index} variant='secondary'>
                  {item}
                </Badge>
              ))}
            </div>
          }
        />
        <Separator />
        <ProfileSection
          title='Key Skills'
          content={
            <div className='flex flex-wrap gap-2'>
              {data.skills.map((skill, index) => (
                <Badge key={index} variant='secondary'>
                  {skill}
                </Badge>
              ))}
            </div>
          }
        />
      </CardContent>
      <CardFooter className='flex flex-col sm:flex-row gap-4'>
        {data.connect.map((con, i) => (
          <Link href={con.link} className='w-full' key={con.text + i}>
            <Button className='w-full'>{con.text}</Button>
          </Link>
        ))}
      </CardFooter>
    </Card>
  );
}

function ProfileSection({ title, content }: { title: string; content: React.ReactNode }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-start'>
      <div className='font-medium text-muted-foreground'>{title}</div>
      <div className='md:col-span-2'>{content}</div>
    </div>
  );
}

function PhoneLink({ phone }: { phone: { number: string; type: string } }) {
  const { number, type } = phone;
  const href =
    type === 'whatsapp'
      ? `https://wa.me/${number.replace(/\D/g, '')}`
      : type === 'telegram'
      ? `https://t.me/${number.replace(/\D/g, '')}`
      : `tel:${number}`;

  return (
    <a href={href} className=' hover:text-blue-600' target='_blank' rel='noopener noreferrer'>
      {type === 'whatsapp' ? `WhatsApp` : type === 'telegram' ? `Telegram` : number}
    </a>
  );
}

function SocialIcon({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <Button variant='ghost' size='icon' aria-label={label} asChild>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {icon}
      </a>
    </Button>
  );
}

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  facebook: Facebook,
};
