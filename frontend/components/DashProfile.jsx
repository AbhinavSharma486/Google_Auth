import { Button, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';


export default function DashProfile() {

  const { currentUser, error, loading } = useSelector((state) => state.user);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);


  const handleSubmit = () => { };


  return (
    <div className='max-w-lg mx-auto p-3 w-full'>

      <h1 className="my-7 text-center font-semibold text-3xl">
        Profile
      </h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='file'
          accept='image/*'
          hidden
        />

        <div
          className='relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'
        >
          <img
            src={imageFileUrl || currentUser.profilePicture}
            alt="user"
            className={`rounded-full w-full h-full object-cover border-8 border-[lightgray] ${imageFileUploadProgress &&
              imageFileUploadProgress < 100 &&
              'opacity-60'
              }`}
          />
        </div>

        <TextInput
          type='text'
          id='username'
          placeholder='username'
          defaultValue={currentUser.username}
        />
        <TextInput
          type='email'
          id='email'
          placeholder='email'
          defaultValue={currentUser.email}
        />
        <TextInput
          type='password'
          id='password'
          placeholder='password'
        />

        <Button
          type='submit'
          gradientDuoTone='purpleToBlue'
          outline
          disabled={loading || imageFileUploading}
        >
          {loading ? 'Loading...' : 'Update'}
        </Button>
      </form >

      <div className='text-red-500 flex justify-between mt-5'>
        <span onClick={() => setShowModal(true)} className='cursor-pointer'>
          Delete Account
        </span>
        <span className='cursor-pointer'>
          Sign Out
        </span>
      </div>
    </div >
  );
}
